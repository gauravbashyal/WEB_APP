# from django.urls import path
# from . import views

# urlpatterns = [
#     path('', views.blog),
#     # path('/first-blog', view.first_blog),
# ]
from django.urls import path
from . import views

urlpatterns = [
    path('', views.home),
]