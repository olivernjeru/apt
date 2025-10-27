from django.test import TestCase
from django.contrib.auth.models import User
from django.utils.timezone import now
from ..models import UserUpload, CodeReview


class UserUploadModelTest(TestCase):
    def setUp(self):
        self.user = User.objects.create_user(username="testuser", password="testpass")

    def test_create_user_upload(self):
        """Test creating a UserUpload instance."""
        upload = UserUpload.objects.create(
            user=self.user,
            filename="test_file.txt",
            file_path="/files/test_file.txt",
            is_zip=False,
        )
        self.assertEqual(upload.user, self.user)
        self.assertEqual(upload.filename, "test_file.txt")
        self.assertEqual(upload.is_zip, False)
        self.assertIn("(File)", str(upload))

    def test_create_zip_file_with_extracted_files(self):
        """Test creating a zip file and linking extracted files."""
        parent_zip = UserUpload.objects.create(
            user=self.user,
            filename="archive.zip",
            file_path="/files/archive.zip",
            is_zip=True,
        )
        extracted_file = UserUpload.objects.create(
            user=self.user,
            filename="extracted.txt",
            file_path="/files/extracted.txt",
            parent_zip=parent_zip,
        )
        self.assertEqual(extracted_file.parent_zip, parent_zip)
        self.assertEqual(parent_zip.extracted_files.count(), 1)
        self.assertIn("ZIP", str(parent_zip))
        self.assertIn("(File)", str(extracted_file))


class CodeReviewModelTest(TestCase):
    def setUp(self):
        self.user = User.objects.create_user(username="testuser", password="testpass")
        self.upload = UserUpload.objects.create(
            user=self.user,
            filename="test_file.txt",
            file_path="/files/test_file.txt",
        )

    def test_create_code_review(self):
        """Test creating a CodeReview instance."""
        review_result = {"feedback": "Looks good", "score": 8.5}
        review = CodeReview.objects.create(
            upload=self.upload,
            file_name="test_file.txt",
            review_result=review_result,
        )
        self.assertEqual(review.upload, self.upload)
        self.assertEqual(review.review_result, review_result)
        self.assertIn("Review for", str(review))

