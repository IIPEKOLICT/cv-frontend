from rest_framework import serializers
from .models import *

class ContactSerializer(serializers.ModelSerializer):
    icon = serializers.SerializerMethodField()

    def get_icon(self, contact):
        request = self.context.get('request')
        return request.build_absolute_uri(contact.icon.url)

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
    logo = serializers.SerializerMethodField()

    def get_logo(self, technology):
        request = self.context.get('request')
        return request.build_absolute_uri(technology.logo.url)

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
