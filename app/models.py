from django.db import models


class Contact(models.Model):
    contact_name = models.CharField(max_length=50, blank=True)
    contact_icon = models.ImageField(upload_to='assets/contacts')
    contact_link = models.URLField()

    class Meta:
        verbose_name_plural = 'contacts'

    def __str__(self):
        return self.contact_name or self.contact_link


class Education(models.Model):
    education_place = models.CharField(max_length=100)
    education_speciality = models.CharField(max_length=50)
    education_years = models.CharField(max_length=20)

    class Meta:
        verbose_name_plural = 'educations'
        ordering = ['education_years']

    def __str__(self):
        return self.education_place


class Employment(models.Model):
    employment_place = models.CharField(max_length=100)
    employment_desc = models.TextField()
    employment_period = models.CharField(max_length=30)

    class Meta:
        verbose_name_plural = 'employments'

    def __str__(self):
        return self.employment_place


class Technology(models.Model):
    technology_name = models.CharField(max_length=30)
    technology_logo = models.ImageField(upload_to='assets/technologies')

    class Meta:
        verbose_name_plural = 'technologies'
        ordering = ['technology_name']

    def __str__(self):
        return self.technology_name


class Project(models.Model):
    project_name = models.CharField(max_length=50)
    project_description = models.TextField()
    project_techs = models.ManyToManyField(to=Technology)
    project_deploy = models.URLField(blank=True)
    project_repo = models.URLField(blank=True)
    project_date = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name_plural = 'projects'
        ordering = ['project_date']

    def __str__(self):
        return self.project_name


class Cv(models.Model):
    name = models.CharField(max_length=50)
    job = models.CharField(max_length=100)
    about = models.TextField(blank=True)
    contacts = models.ManyToManyField(to=Contact)
    educations = models.ManyToManyField(to=Education)
    english = models.TextField(blank=True)
    technologies = models.ManyToManyField(to=Technology)
    projects = models.ManyToManyField(to=Project)

    class Meta:
        verbose_name_plural = 'cvs'

    def __str__(self):
        return self.job
