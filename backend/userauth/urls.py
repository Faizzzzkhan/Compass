from django.urls import path
from .views import check_status, LoginOrSignUpWithTokenView, LogoutView

urlpatterns = [
    path("status", check_status),
    path(
        "login", LoginOrSignUpWithTokenView.as_view(), name="login"
    ),
    path("logout", LogoutView.as_view()),
]
