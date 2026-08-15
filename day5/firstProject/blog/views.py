from django.shortcuts import render
from .models import User

def home(request):
    if request.method == "POST":
        name = request.POST.get('name')
        username = request.POST.get('username')
        password = request.POST.get('password')
        age = request.POST.get('age')
        gender = request.POST.get('gender')
        email = request.POST.get('email')

        User.objects.create(
            name=name,
            username=username,
            password=password,
            age=age,
            gender=gender,
            email=email
        )

    users = User.objects.all()
    return render(request, "home.html", {'users': users})