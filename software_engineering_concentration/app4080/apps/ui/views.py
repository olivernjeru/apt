import os
from django.conf import settings
from django.http import JsonResponse
from django.views import View
from django.contrib.auth.decorators import login_required
from django.shortcuts import redirect, reverse
from django.views.generic import TemplateView
from structlog import get_logger
from django.contrib.auth.views import LogoutView
from django.contrib.auth import logout as django_logout
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from apps.ui.services.upload_service import process_uploaded_files
from django.views.generic import ListView
from django.shortcuts import get_object_or_404
from apps.ui.models import UserUpload, CodeReview
import os

logger = get_logger()


# Create your views here.
class LoginView(TemplateView):
    template_name = "login.html"


def custom_login_redirect(request):
    """
    Custom login redirect view
    :param request:
    :return:
    """
    # Check if user is authenticated
    logger.debug("Checking if user is authenticated")
    if request.user.is_authenticated:
        # If user is a superuser or staff, redirect to admin
        superuser_emails = ['admin@example.com', 'superuser@example.com']

        # Check if user is in the list of superuser emails
        if request.user.email in superuser_emails:
            logger.debug("User is superuser, redirecting to admin")
            return redirect('/admin/')

        else:
            logger.debug("User is authenticated, redirecting to dashboard")
            return redirect('/dashboard')
    else:
        logger.debug("User not authenticated, redirecting to login")
    return redirect(settings.LOGIN_URL)


class CustomLogoutView(LogoutView):
    """
    Custom logout view
    """
    def get(self, request, *args, **kwargs):
        return self.post(request, *args, **kwargs)


class UserTemplateView(TemplateView):
    """
    Custom template view for authenticated users
    """
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['login_type'] = "member"
        context['user'] = self.request.user
        return context

    def get(self, request, *args, **kwargs):
        if (
                not request.user.is_authenticated
                or not request.user.is_active
        ):
            return redirect("apps.ui:login")
        else:
            return super().get(request, *args, **kwargs)


class DashboardView(UserTemplateView):
    """
    Dashboard view for authenticated users
    """
    template_name = "dashboard.html"


# Create the user upload folder
def get_user_upload_folder(user):
    """
    Get the folder path for the user's uploaded files
    :param user:
    :return:
    """
    user_folder = os.path.join(UPLOAD_FOLDER, f'user_{user.id}')
    if not os.path.exists(user_folder):
        os.makedirs(user_folder)
    return user_folder


@method_decorator(csrf_exempt, name='dispatch')
@method_decorator(login_required, name='dispatch')  # Ensure the user is authenticated
class UploadCodeView(View):
    """
    View to upload code for review
    """
    def post(self, request, *args, **kwargs):
        """
        Handle POST requests
        :param request:
        :param args:
        :param kwargs:
        :return:
        """
        combined_code, review_results = process_uploaded_files(request)
        # Store both results and files in the session
        request.session['review_results'] = review_results
        request.session['uploaded_files'] = combined_code
        return JsonResponse({'success': 'Files uploaded successfully'}, status=200)

    def get(self, request, *args, **kwargs):
        """
        Handle GET requests
        :param request:
        :param args:
        :param kwargs:
        :return:
        """
        return JsonResponse({'error': 'Only POST method allowed'}, status=405)


class ResultsView(TemplateView):
    """
    View to display code review results
    """
    template_name = 'results.html'  # Specify your template name

    def get_context_data(self, **kwargs):
        """
        Get context data for the template
        :param kwargs:
        :return:
        """
        # Call the base implementation first to get a context
        context = super().get_context_data(**kwargs)

        # Retrieve review results from the session
        review_results = self.request.session.get('review_results', {})
        uploaded_files = self.request.session.get('uploaded_files', [])
        file_names = list(uploaded_files.keys())

        # Add review results to the context
        context['review_results'] = review_results
        context['uploaded_files'] = uploaded_files
        context['file_names'] = file_names
        logger.info("Review results", review_results=review_results, uploaded_files=uploaded_files)
        return context


class UploadHistoryView(ListView):
    """
    View to display the upload history
    """
    model = UserUpload
    template_name = 'upload_history.html'
    context_object_name = 'uploads'

    def get_queryset(self):
        """
        Get the queryset for the view
        :return:
        """
        # Filter out .zip files
        return UserUpload.objects.filter(user=self.request.user).exclude(filename__endswith='.zip').order_by(
            '-uploaded_at')

    def get_context_data(self, **kwargs):
        """
        Get context data for the template
        :param kwargs:
        :return:
        """
        context = super().get_context_data(**kwargs)
        uploaded_files = {}
        review_results = {}

        # Iterate through uploads to read file contents and fetch reviews
        for upload in context['uploads']:
            uploaded_files[upload.filename] = self.read_file_content(upload.file_path)

            # Fetch review results for the current upload
            reviews = CodeReview.objects.filter(upload=upload)
            for review in reviews:
                # Directly assign the review_result JSON to the review_results dict
                if review.file_name not in review_results:
                    review_results[review.file_name] = {}

                # Use the review result directly
                review_results[review.file_name] = review.review_result

        context['uploaded_files'] = uploaded_files
        context['review_results'] = review_results
        return context

    def read_file_content(self, file_path):
        """
        Read the contents of a file
        :param file_path:
        :return:
        """
        try:
            with open(file_path, 'r') as file:
                return file.read()
        except Exception as e:
            # Handle errors (e.g., file not found, permission denied)
            return f"Error reading file: {str(e)}"


@method_decorator(login_required, name='dispatch')
class DeleteHistoryEntryView(View):
    """
    View to delete a history entry
    """
    def post(self, request, pk, *args, **kwargs):
        """
        Handle POST requests
        :param request:
        :param pk:
        :param args:
        :param kwargs:
        :return:
        """
        upload = get_object_or_404(UserUpload, pk=pk, user=request.user)
        logger.info(f"Deleting upload: {upload.filename}")
        upload.delete()
        return JsonResponse({'message': 'History entry deleted successfully'}, status=200)

    def get(self, request, *args, **kwargs):
        """
        Handle GET requests
        :param request:
        :param args:
        :param kwargs:
        :return:
        """
        return redirect('apps.ui:history')


def logout(request):
    django_logout(request)
    return redirect(reverse("apps.ui:login"))

class DisableClientSideCachingMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        response = self.get_response(request)
        response['Cache-Control'] = 'no-store, no-cache, must-revalidate, max-age=0'
        response['Pragma'] = 'no-cache'
        response['Expires'] = '0'
        return response
