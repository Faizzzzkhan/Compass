from django.utils.deprecation import MiddlewareMixin
from django.http import HttpResponseForbidden, JsonResponse

from .google_auth import get_user_details_from_token
from .serializers import UserFromToken


class VerifyTokenWithFirebase(MiddlewareMixin):
    firebase_header = "FBase-Token"

    def process_request(self, request):
        firebase_token = request.headers.get(self.firebase_header)
        if not firebase_token:
            return JsonResponse(
                {"status": "forbidden", "msg": "Missing required header"}, status=403
            )
        user_details = get_user_details_from_token(firebase_token)
        if not isinstance(user_details, UserFromToken):
            return JsonResponse(
                {"status": "forbidden", "msg": "Invalid Token, Token Expired"}, status=403
            )
        return None

    def process_response(self, request, response):
        return response
