from rest_framework import serializers
from .models import *

class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = ('id', 'name', 'icon', 'link')

class EducationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Education
        fields = ('id', 'place', 'speciality', 'years')

class EmploymentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employment
        fields = ('id', 'place', 'desc', 'period')

class TechnologySerializer(serializers.ModelSerializer):
    class Meta:
        model = Technology
        fields = ('id', 'name', 'logo')

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = (
            'id',
            'name',
            'description',
            'techs',
            'deploy',
            'repo',
            'date'
        )

class CvSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cv
        fields = (
            'id',
            'name',
            'job',
            'about',
            'contacts',
            'educations',
            'english',
            'technologies',
            'projects'
        )
