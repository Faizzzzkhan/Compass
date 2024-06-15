from django.shortcuts import render
from django.http import JsonResponse, HttpRequest, HttpResponse



def check_status(request: HttpRequest):
    return JsonResponse({"status": "up"})


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