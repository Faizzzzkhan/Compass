from django.utils.deprecation import MiddlewareMixin
from django.http import HttpResponseForbidden

from .google_auth import get_user_details_from_token
from .serializers import UserFromToken

class VerifyTokenWithFirebase(MiddlewareMixin):
    firebase_header = 'FBase-Token'
    def process_request(self, request):
        firebase_token = request.headers.get(self.firebase_header)

        if not firebase_token:
            return HttpResponseForbidden('Missing required header')

        user_details = get_user_details_from_token(firebase_token)

        if not isinstance(user_details, UserFromToken):
            return HttpResponseForbidden("Invalid Token, Token Expired")

        return None

    def process_response(self, request, response):
        return response