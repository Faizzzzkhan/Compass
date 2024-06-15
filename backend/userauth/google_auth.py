import os 
from firebase_admin.credentials import Certificate
from firebase_admin.auth import verify_id_token
from firebase_admin import initialize_app

from .serializers import UserFromToken
from compass.settings import BASE_DIR


creds_file = os.path.join(BASE_DIR, 'userauth', 'compassmain.json')
cred = Certificate(creds_file)

default_app = initialize_app(credential=cred)


async def get_user_details_from_token(token:str) -> UserFromToken | str:
    """
    Verify authentication token from google API
    Parameters:
        token : authentication token
    """
    try:
        user_details = verify_id_token(token)
        uid = user_details['uid']
        username = user_details['username']
        email = user_details['email']
        user = UserFromToken(uid, name, email)
        return user
    except Exception as e:
        #TODO: Implement Logging errors
        return f"error : {e}"

