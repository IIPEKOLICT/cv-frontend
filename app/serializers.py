from rest_framework import serializers
from .models import *

class ContactSerializer(serializers.ModelSerializer):
    contact_icon = serializers.SerializerMethodField()

    def get_icon(self, contact):
        request = self.context.get('request')
        return request.build_absolute_uri(contact.contact_icon.url)

    class Meta:
        model = Contact
        fields = ('id', 'contact_name', 'contact_icon', 'contact_link')

class EducationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Education
        fields = ('id', 'education_place', 'education_speciality', 'education_years')

class EmploymentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employment
        fields = ('id', 'employment_place', 'employment_desc', 'employment_period')

class TechnologySerializer(serializers.ModelSerializer):
    technology_logo = serializers.SerializerMethodField()

    def get_technology_logo(self, technology):
        request = self.context.get('request')
        return request.build_absolute_uri(technology.technology_logo.url)

    class Meta:
        model = Technology
        fields = ('id', 'technology_name', 'technology_logo')

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = (
            'id',
            'project_name',
            'project_description',
            'project_techs',
            'project_deploy',
            'project_repo',
            'project_date'
        )

class CvSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cv
        fields = ('id', 'name', 'job', 'about', 'contacts', 'educations', 'english', 'technologies', 'projects')
