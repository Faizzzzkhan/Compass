from django.contrib.auth.models import User


def get_user(email: str) -> User | None:
    """Retrieves a Django User object by email address, handling potential issues.

    Args:
        email (str): The email address to use for lookup.

    Returns:
        User | None: The User object if found, otherwise None.

    Raises:
        MultipleUsersFound: If multiple users with the same email are found.
    """

    try:
        user = User.objects.get(email=email)
        print(user.date_joined)
        return user
    except User.DoesNotExist:
        return None
