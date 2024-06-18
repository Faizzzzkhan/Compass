from django.urls import path 
from .views import ( check_status, test_login )

urlpatterns = [
    path('api/questions/<str:mode>/<str:category>/', views.GetQuestionsView.as_view()),
    path("status", check_status ),
    path("check_token", test_login),
    path("send_mail", mail_endpoint)
]