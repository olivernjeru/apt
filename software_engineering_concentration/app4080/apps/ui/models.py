from django.db import models
from django.contrib.auth.models import User


class UserUpload(models.Model):
    """
    Model to store user uploaded files
    """
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    filename = models.CharField(max_length=255)
    file_path = models.CharField(max_length=512)
    uploaded_at = models.DateTimeField(auto_now_add=True)
    is_zip = models.BooleanField(default=False)  # Track if this is a zip file
    parent_zip = models.ForeignKey(
        'self', null=True, blank=True, on_delete=models.CASCADE,
        related_name='extracted_files'  # Link extracted files to the original zip
    )

    def __str__(self):
        return f"{self.filename} ({'ZIP' if self.is_zip else 'File'})"


class CodeReview(models.Model):
    """
    Model to store code review results
    """
    upload = models.ForeignKey(UserUpload, on_delete=models.CASCADE)
    file_name = models.CharField(max_length=255)
    review_result = models.JSONField()  # Store OpenAI review results as JSON
    reviewed_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Review for {self.file_name}"
