from django.test import TestCase, Client
from django.urls import reverse
from django.contrib.auth.models import User
from apps.ui.models import UserUpload, CodeReview
from django.http import JsonResponse


class ViewsTest(TestCase):
    def setUp(self):
        self.client = Client()
        self.user = User.objects.create_user(username="testuser", password="testpass", email="user@example.com")
        self.admin_user = User.objects.create_superuser(username="admin", password="adminpass",
                                                        email="admin@example.com")
        self.upload = UserUpload.objects.create(
            user=self.user, filename="test_file.txt", file_path="/files/test_file.txt"
        )

    def test_login_view(self):
        """Test that the login view renders correctly."""
        response = self.client.get(reverse("apps.ui:login"))
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, "login.html")

    def test_custom_login_redirect_superuser(self):
        """Test redirect for admin user to the admin site."""
        self.client.login(username="admin", password="adminpass")
        response = self.client.get(reverse("apps.ui:custom_login_redirect"))
        self.assertRedirects(response, "/admin/")

    def test_dashboard_view_unauthenticated(self):
        """Test that unauthenticated users are redirected to login."""
        response = self.client.get(reverse("apps.ui:dashboard"))
        self.assertRedirects(response, reverse("apps.ui:login"))

    def test_upload_code_view_get_not_allowed(self):
        """Test that GET method on UploadCodeView is not allowed."""
        self.client.login(username="testuser", password="testpass")
        response = self.client.get(reverse("apps.ui:upload_code"))
        self.assertEqual(response.status_code, 405)
        self.assertEqual(response.json(), {"error": "Only POST method allowed"})

    def test_delete_history_entry_view(self):
        """Test deleting an upload entry."""
        self.client.login(username="testuser", password="testpass")
        response = self.client.post(reverse("apps.ui:delete_history_entry", args=[self.upload.id]))
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json(), {"message": "History entry deleted successfully"})
        self.assertFalse(UserUpload.objects.filter(id=self.upload.id).exists())

    def test_delete_history_entry_view_get_redirects(self):
        """Test that GET method on DeleteHistoryEntryView redirects to history."""
        self.client.login(username="testuser", password="testpass")
        response = self.client.get(reverse("apps.ui:delete_history_entry", args=[self.upload.id]))
        self.assertRedirects(response, reverse("apps.ui:history"))
