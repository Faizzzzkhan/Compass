from django.urls import path 
from .views import ( check_status, test_login, mail_endpoint )

urlpatterns = [
    path("status", check_status ),
    path("check_token", test_login),
    path("send_mail", mail_endpoint)
]