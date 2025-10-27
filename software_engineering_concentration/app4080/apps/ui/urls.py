from django.urls import path
from .views import (
    LoginView, custom_login_redirect, DashboardView, UploadCodeView,
    ResultsView, UploadHistoryView, DeleteHistoryEntryView, CustomLogoutView
)

app_name = "apps.ui"

urlpatterns = [
    path("", LoginView.as_view(), name="login"),
    path('login-redirect/', custom_login_redirect, name='custom_login_redirect'),
    path('logout/', CustomLogoutView.as_view(), name='logout'),
    path('dashboard/', DashboardView.as_view(), name='dashboard'),
    path('upload_code/', UploadCodeView.as_view(), name='upload_code'),
    path('results/', ResultsView.as_view(), name='results'),
    path('history/', UploadHistoryView.as_view(), name="history"),
    path('history/delete/<int:pk>/', DeleteHistoryEntryView.as_view(), name="delete_history_entry"),
]
