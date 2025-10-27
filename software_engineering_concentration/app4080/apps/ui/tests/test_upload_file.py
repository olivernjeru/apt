from django.test import TestCase, Client, RequestFactory
from django.contrib.auth.models import User
from unittest.mock import patch, mock_open, MagicMock
from django.core.files.uploadedfile import SimpleUploadedFile
from apps.ui.models import UserUpload, CodeReview
from apps.ui.services.upload_service import (
    get_user_upload_folder,
    is_valid_file_name,
    process_uploaded_files,
)
import os
import zipfile

class UploadServiceTests(TestCase):
    def setUp(self):
        """Set up test users and client."""
        self.user = User.objects.create_user(username="testuser", password="testpass")
        self.client = Client()

        # Log in the test user to ensure the request is authenticated
        self.client.login(username="testuser", password="testpass")

    def test_get_user_upload_folder_creates_folder(self):
        """Test that get_user_upload_folder creates the user's folder if it doesn't exist."""
        with patch("os.makedirs") as mocked_makedirs:
            folder = get_user_upload_folder(self.user)
            expected_folder = os.path.join("uploads", f"user_{self.user.id}")
            self.assertIn(expected_folder,folder)

    def test_is_valid_file_name(self):
        """Test the file name validation logic."""
        self.assertTrue(is_valid_file_name("test_file.py"))
        self.assertFalse(is_valid_file_name(".hidden_file"))
        self.assertFalse(is_valid_file_name("..invalid"))

    @patch("os.makedirs")
    @patch("builtins.open", new_callable=mock_open)
    @patch("apps.ui.services.upload_service.send_code_for_peer_review", return_value={})
    def test_process_single_valid_file(self, mock_review, mock_open, mock_makedirs):
        """Test that a single valid file is processed correctly."""
        file = SimpleUploadedFile("test.py", b"print('Hello, World!')")

        # Simulate a POST request with a file
        response = self.client.post("/upload_code/", {"file": file})

        self.assertEqual(response.status_code, 200)
        self.assertIn("successfully", response.json()["success"])
        self.assertEqual(UserUpload.objects.count(), 1)  # One upload entry created