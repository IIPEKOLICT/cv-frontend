from django.urls import path
from app.views import index, projects

urlpatterns = [
    path('', index, name='index'),
    path('projects/', projects, name='projects'),
]
