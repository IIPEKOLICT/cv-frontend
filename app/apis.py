from django.http import JsonResponse
from .serializers import *

class ApiView:
    @staticmethod
    def get_projects(_):
        projects = ProjectSerializer(Project.objects.all().order_by('-date'), many=True).data
        return JsonResponse({ 'projects': projects })

    @staticmethod
    def get_contacts(request):
        contacts = ContactSerializer(
            Contact.objects.all().order_by('-id'),
            context={ 'request': request },
            many=True
        ).data

        return JsonResponse({ 'contacts': contacts })

    @staticmethod
    def get_educations(_):
        educations = EducationSerializer(Education.objects.all(), many=True).data
        return JsonResponse({ 'educations': educations })

    @staticmethod
    def get_employments(_):
        employments = EmploymentSerializer(Employment.objects.all(), many=True).data
        return JsonResponse({ 'employments': employments })

    @staticmethod
    def get_technologies(request):
        technologies = TechnologySerializer(
            Technology.objects.all(),
            context={ 'request': request },
            many=True
        ).data

        return JsonResponse({ 'technologies': technologies })

    @staticmethod
    def get_cv(_, cv_id):
        cv = CvSerializer(Cv.objects.get(pk=cv_id)).data
        return JsonResponse({ 'cv': cv })

    @staticmethod
    def get_all_cv(_):
        cvs = CvSerializer(Cv.objects.all(), many=True).data
        return JsonResponse({ 'cvs': cvs })
