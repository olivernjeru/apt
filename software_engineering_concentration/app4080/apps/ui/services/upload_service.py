from apps.ui.models import UserUpload, CodeReview
from django.db import transaction
from datetime import datetime
import os
import zipfile
from django.conf import settings
from structlog import get_logger
from apps.ui.services.review_service import send_code_for_peer_review
from django.core.exceptions import SuspiciousFileOperation

logger = get_logger()

UPLOAD_FOLDER = os.path.join(settings.BASE_DIR, 'uploads')
ALLOWED_EXTENSIONS = {'.py', '.js', '.html', '.css', '.java', '.cpp', '.c', '.cs', '.rb', '.php', '.go', '.rs',
                      '.swift', '.kt', '.ts', '.tsx', '.jsx', '.xml', '.json', '.yaml', '.yml', '.sh', '.bat',
                      '.sql', '.r', '.pl', '.lua', '.scala', '.hs', '.vb', '.fs', '.dart', '.erl', '.ex', '.md'}



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


def is_valid_file_name(name):
    """
    Check if the file name is valid
    :param name:
    :return:
    """
    return not (name.startswith(('_', '.')) or '..' in name)


def process_uploaded_files(request):
    """
    Process uploaded files and send them for peer review
    :param request:
    :return:
    """
    logger.info("Processing uploaded files")
    user_folder = get_user_upload_folder(request.user)
    files = request.FILES.getlist('file')

    if not files:
        return {'error': 'No file uploaded'}

    combined_code = {}
    review_results = {}
    upload_entries = {}

    with transaction.atomic():
        for file in files:
            original_filename = file.name
            filename_ext = os.path.splitext(original_filename)[1]
            current_time = datetime.now().strftime('%Y%m%d%H%M%S')
            file_path = os.path.join(user_folder, f"{current_time}_{original_filename}")

            if filename_ext in ALLOWED_EXTENSIONS or filename_ext == '.zip':
                logger.info("Processing file", filename=original_filename)
                with open(file_path, 'wb+') as destination:
                    for chunk in file.chunks():
                        destination.write(chunk)

                is_zip = filename_ext == '.zip'
                parent_upload = UserUpload.objects.create(
                    user=request.user,
                    filename=original_filename,
                    file_path=file_path,
                    is_zip=is_zip
                )
                upload_entries[original_filename] = parent_upload

                if is_zip:
                    unzip_folder = os.path.join(user_folder, f"unzipped_{current_time}")
                    os.makedirs(unzip_folder, exist_ok=True)
                    with zipfile.ZipFile(file_path, 'r') as zip_ref:
                        zip_ref.extractall(unzip_folder)
                    os.remove(file_path)

                    for root, _, files in os.walk(unzip_folder):
                        for f in files:
                            file_extension = os.path.splitext(f)[1]
                            if file_extension in ALLOWED_EXTENSIONS and is_valid_file_name(f):
                                try:
                                    extracted_file_path = os.path.join(root, f)
                                    file_content = open(extracted_file_path, 'r', encoding='utf-8', errors='ignore').read()
                                    combined_code[f] = file_content

                                    # Create an entry for each extracted file
                                    extracted_upload = UserUpload.objects.create(
                                        user=request.user,
                                        filename=f,
                                        file_path=extracted_file_path,
                                        parent_zip=parent_upload
                                    )
                                    upload_entries[f] = extracted_upload
                                except Exception as e:
                                    logger.error("Error reading extracted file", error=str(e))
                                    os.remove(os.path.join(root, f))
                else:
                    try:
                        file_content = open(file_path, 'r', encoding='utf-8', errors='ignore').read()
                        combined_code[original_filename] = file_content
                    except Exception as e:
                        logger.error("Error reading file", error=str(e))
                        continue
            else:
                return {'error': f'File type not allowed: {original_filename}'}

        if combined_code:
            review_results = send_code_for_peer_review(combined_code)
            logger.info("Review results", results=review_results)

            # Save code review results for each file
            for file_name, issues in review_results.items():
                if file_name in upload_entries:
                    CodeReview.objects.create(
                        upload=upload_entries[file_name],
                        file_name=file_name,
                        review_result=issues
                    )

    return combined_code, review_results
