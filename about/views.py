from django.shortcuts import render
from .models import *

# Create your views here.


def render_about(request):
    details = get_about_details()
    return render(request, 'home.html', {'details': details})