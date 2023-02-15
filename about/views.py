from django.shortcuts import render
from .models import *
import os

# Create your views here.


def render_about(request):
    details = get_about_details()
    print("os.getcwd() idhar milega: ", os.getcwd())
    return render(request, 'index.html')
