from django.contrib import admin
from apps.ui.models import UserUpload, CodeReview


@admin.register(UserUpload)
class UserUploadAdmin(admin.ModelAdmin):
    """
    Admin class for UserUpload model
    """
    list_display = ('id', 'user', 'filename', 'uploaded_at', 'is_zip', 'parent_zip')
    list_filter = ('is_zip', 'uploaded_at')
    search_fields = ('filename', 'user__username')
    readonly_fields = ('uploaded_at',)
    list_select_related = ('user', 'parent_zip')  # Optimize queries

    def get_queryset(self, request):
        # Prefetch related uploads to avoid N+1 issues
        return super().get_queryset(request).select_related('user', 'parent_zip')


@admin.register(CodeReview)
class CodeReviewAdmin(admin.ModelAdmin):
    """
    Admin class for CodeReview model
    """
    list_display = ('id', 'upload', 'file_name', 'reviewed_at')
    list_filter = ('reviewed_at',)
    search_fields = ('file_name', 'upload__filename')
    readonly_fields = ('reviewed_at', 'review_result')
    list_select_related = ('upload',)  # Optimize queries

    def get_queryset(self, request):
        # Prefetch related uploads to avoid N+1 issues
        return super().get_queryset(request).select_related('upload')
