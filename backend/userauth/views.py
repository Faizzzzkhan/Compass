from django.shortcuts import render
from django.http import JsonResponse, HttpRequest, HttpResponse
import json
from django.core.mail import send_mail
from django.views.decorators.csrf import csrf_exempt

from django.conf.global_settings import EMAIL_HOST_USER
from django.utils.html import strip_tags
from django.core.mail import EmailMultiAlternatives
from django.template.loader import render_to_string

def check_status(request: HttpRequest):
    return JsonResponse({"status": "up"})


@csrf_exempt
def mail_endpoint(request: HttpRequest):
    if request.method == "POST":
        if request.content_type == "application/json":
            raw_data = request.body.decode()
            data = json.loads(raw_data)
            email = data.get("email")
            html_email = render_to_string('email/welcome.html', {})
            text_email = strip_tags(html_email)
            new_email = EmailMultiAlternatives(
                to=[email],
                from_email=EMAIL_HOST_USER,
                body=text_email,
                subject="Welcome to Compass!",
            )
            new_email.attach_alternative(html_email, "text/html")
            new_email.send()
            # send_mail(
            #     subject="Welcome to Compass!",
            #     message="",
            #     recipient_list=[email],
            #     from_email=EMAIL_HOST_USER,
            #     fail_silently=True,
            #     html_message=html_email,
            # )
            return JsonResponse({"success": f"mail sent to {email}"})
    return JsonResponse({"msg": "Body is missing"})