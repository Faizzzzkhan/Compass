from django.utils.deprecation import MiddlewareMixin
from django.http import HttpResponseForbidden

from .google_auth import get_user_details_from_token

class VerifyTokenWithFirebase(MiddlewareMixin):
    firebase_header = 'FBase-Token'
    def process_request(self, request):
        firebase_token = request.headers.get(self.firebase_header)
        user_details = get_user_details_from_token(firebase_token)
        print(user_details)
        if not firebase_token:
            return HttpResponseForbidden('Missing required header')
        return None

    def process_response(self, request, response):
        return response