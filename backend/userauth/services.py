from django.contrib.auth.models import User

def create_user(email:str, password:str, username:str) -> User:
    try:
        user = User(email=email, username=username)
        user.set_password(password)
        user.save()
        return user
    except Exception as e:
        print(e)
        return None