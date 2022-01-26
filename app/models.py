from django.db import models


class Contact(models.Model):
    name = models.CharField(max_length=50, blank=True)
    icon = models.URLField(blank=True, default='')
    link = models.URLField()

    class Meta:
        verbose_name_plural = 'contacts'

    def __str__(self):
        return self.name or self.link


class Education(models.Model):
    place = models.CharField(max_length=100)
    speciality = models.CharField(max_length=50)
    years = models.CharField(max_length=20)

    class Meta:
        verbose_name_plural = 'educations'
        ordering = ['years']

    def __str__(self):
        return self.place


class Employment(models.Model):
    place = models.CharField(max_length=100)
    desc = models.TextField()
    period = models.CharField(max_length=30)

    class Meta:
        verbose_name_plural = 'employments'

    def __str__(self):
        return self.place


class Technology(models.Model):
    name = models.CharField(max_length=30)
    logo = models.URLField(blank=True, default='')

    class Meta:
        verbose_name_plural = 'technologies'
        ordering = ['name']

    def __str__(self):
        return self.name


class Project(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField()
    techs = models.ManyToManyField(to=Technology)
    deploy = models.URLField(blank=True)
    repo = models.URLField(blank=True)
    date = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name_plural = 'projects'
        ordering = ['date']

    def __str__(self):
        return self.name


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
