from django.shortcuts import render
from django.http import JsonResponse, HttpRequest, HttpResponse

from django.contrib.auth import login

from rest_framework.views import APIView
from rest_framework import serializers

from userauth.google_auth import get_user_details_from_token
from userauth.selectors import get_user
from userauth.services import create_user
from django.contrib.auth.models import User


class LoginOrSignUpWithTokenView(APIView):

    class TokenSerializer(serializers.Serializer):
        token = serializers.CharField(
            required=True, help_text="Access token from google"
        )
        email = serializers.EmailField(help_text="Email address of the user")

    def post(self, request):
        """
        Login 
        """
        user_data = self.TokenSerializer(data=request.data)
        if not user_data.is_valid():
            return JsonResponse(
                {"status": "invalid request", "errors": user_data.errors},
                status=400,
            )
        validated_token = user_data.validated_data.get("token")
        user_from_google = get_user_details_from_token(validated_token)
        user_in_db = get_user(user_from_google.email)
        if not user_in_db:
            new_user = create_user(
                user_from_google.email, user_from_google.uid, user_from_google.uid
            )
            if not new_user:
                return JsonResponse(
                    {"status": "request failed unable to create a new user"},
                    status=500
                )
            login(request, new_user)
        login(request, user_in_db)
        return JsonResponse({"status": "success, user is logged in"})


def check_status(request: HttpRequest):
    print(request.user)
    return JsonResponse({"status": "up"})

