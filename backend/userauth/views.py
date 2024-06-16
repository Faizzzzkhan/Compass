from django.shortcuts import render
from django.http import JsonResponse, HttpRequest, HttpResponse

from django.core.mail import send_mail
from django.views.decorators.csrf import csrf_exempt


def check_status(request: HttpRequest):
    return JsonResponse({"status": "up"})

@csrf_exempt
def mail_endpoint(request: HttpRequest):
    if request.method == 'POST':
        data = await request.POST.dict()
        if data.get('email'):
            print(data.get('email'))
        return JsonResponse({'success':f'mail sent to'})
    return JsonResponse({'msg':'POST body is missing.'})
    


def extract_header(request: HttpRequest, header_name: str):
    """Extract a given header name value
    :param request: HttpRequest
    :param header_name: str

    :return: None 
    """
    header = request.META.get(header_name)
    if not header:
        return JsonResponse({"msg": "Missing headers"})
    print(header)


def test_login(request: HttpRequest):
    extract_header(request, "FBase-Token")
    return JsonResponse({"msg":"Working stuff"})