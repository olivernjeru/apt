from django.test import TestCase, Client
from django.contrib.auth.models import User
from django.urls import reverse
from django.contrib.admin.sites import site
from apps.ui.models import UserUpload, CodeReview
from apps.ui.admin import UserUploadAdmin, CodeReviewAdmin


class AdminSiteTests(TestCase):
    def setUp(self):
        """Set up test users and client for admin access."""
        self.client = Client()
        self.admin_user = User.objects.create_superuser(username="admin", password="adminpass", email="admin@example.com")
        self.user = User.objects.create_user(username="testuser", password="testpass")

        # Log in as the admin user
        self.client.login(username="admin", password="adminpass")

        # Create a UserUpload and CodeReview instance for testing
        self.upload = UserUpload.objects.create(
            user=self.user, filename="test_file.txt", file_path="/files/test_file.txt", is_zip=False
        )
        self.review = CodeReview.objects.create(
            upload=self.upload, file_name="test_file.txt", review_result={"feedback": "Good"}
        )

    def test_user_upload_admin_registered(self):
        """Test that UserUpload is registered in the admin."""
        self.assertIn(UserUpload, site._registry)
        self.assertIsInstance(site._registry[UserUpload], UserUploadAdmin)

    def test_code_review_admin_registered(self):
        """Test that CodeReview is registered in the admin."""
        self.assertIn(CodeReview, site._registry)
        self.assertIsInstance(site._registry[CodeReview], CodeReviewAdmin)

    def test_user_upload_admin_list_display(self):
        """Test list display fields for UserUpload admin."""
        response = self.client.get(reverse("admin:ui_userupload_changelist"))
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, self.upload.filename)
        self.assertContains(response, self.user.username)

    def test_code_review_admin_list_display(self):
        """Test list display fields for CodeReview admin."""
        response = self.client.get(reverse("admin:ui_codereview_changelist"))
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, self.review.file_name)
        self.assertContains(response, self.upload.filename)

    def test_user_upload_admin_filters(self):
        """Test filters on UserUpload admin page."""
        response = self.client.get(reverse("admin:ui_userupload_changelist") + "?is_zip__exact=0")
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, self.upload.filename)

    def test_code_review_admin_search(self):
        """Test search functionality in CodeReview admin."""
        response = self.client.get(reverse("admin:ui_codereview_changelist") + "?q=test_file.txt")
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, self.review.file_name)

    def test_user_upload_admin_readonly_fields(self):
        """Test that the 'uploaded_at' field is readonly in UserUpload admin."""
        response = self.client.get(reverse("admin:ui_userupload_change", args=[self.upload.id]))
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, "readonly")

    def test_code_review_admin_readonly_fields(self):
        """Test that 'reviewed_at' and 'review_result' are readonly in CodeReview admin."""
        response = self.client.get(reverse("admin:ui_codereview_change", args=[self.review.id]))
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, "readonly")


