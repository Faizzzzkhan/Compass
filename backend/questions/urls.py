from django.urls import path 
from . import views

urlpatterns = [
    path("<str:mode>/<str:category>/", views.GetQuestionsView.as_view())
]