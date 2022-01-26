from django.urls import path
from .views import index
from .apis import ApiView

urlpatterns = [
    path('', index, name='index'),
    path('api/contact', ApiView.get_contacts, name='api-contacts'),
    path('api/education', ApiView.get_educations, name='api-educations'),
    path('api/employment', ApiView.get_employments, name='api-employments'),
    path('api/technology', ApiView.get_technologies, name='api-technologies'),
    path('api/project', ApiView.get_projects, name='api-projects'),
    path('api/cv', ApiView.get_all_cv, name='api-cvs'),
    path('api/cv/<int:cv_id>/', ApiView.get_cv, name='api-current-cv'),
]
