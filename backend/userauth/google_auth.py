import os 
from firebase_admin.credentials import Certificate
from firebase_admin.auth import verify_id_token, ExpiredIdTokenError
from firebase_admin import initialize_app

from .serializers import UserFromToken
from django.conf import settings


creds_file = os.path.join(settings.BASE_DIR, 'userauth', 'compassmain.json')
cred = Certificate(creds_file)

default_app = initialize_app(credential=cred)


def get_user_details_from_token(token:str) -> UserFromToken | str:
    """
    Verify authentication token from google API
    Parameters:
        token : authentication token
    """
    try:
        user_details = verify_id_token(token)
        name = user_details['name']
        uid = user_details['user_id']
        email = user_details['email']
        return UserFromToken(uid, name, email)
    except ExpiredIdTokenError:
        return "Token Expired"
    except Exception as e:
        #TODO: Implement Logging errors
        return f"error : {e}"

