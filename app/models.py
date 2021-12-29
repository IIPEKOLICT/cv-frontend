from django.db import models


class Contact(models.Model):
    name = models.CharField(max_length=50, blank=True)
    icon = models.ImageField(upload_to='app/contacts')
    link = models.URLField()

    class Meta:
        verbose_name_plural = 'contacts'

    def __str__(self):
        return self.name or self.link


class Education(models.Model):
    place = models.CharField(max_length=100)
    speciality = models.CharField(max_length=50)
    year = models.IntegerField()

    class Meta:
        verbose_name_plural = 'educations'
        ordering = ['year']

    def __str__(self):
        return self.place


class Employment(models.Model):
    place = models.CharField(max_length=100)
    desc = models.TextField()

    class Meta:
        verbose_name_plural = 'employments'

    def __str__(self):
        return self.place


class Tech(models.Model):
    name = models.CharField(max_length=30)
    logo = models.URLField(blank=True)

    class Meta:
        verbose_name_plural = 'techs'
        ordering = ['name']

    def __str__(self):
        return self.name


class Project(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField()
    project_techs = models.ForeignKey(Tech, on_delete=models.CASCADE)
    deploy = models.URLField()
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
    contacts = models.ForeignKey(Contact, on_delete=models.CASCADE)
    educations = models.ForeignKey(Education, on_delete=models.CASCADE)
    english = models.TextField(blank=True)

    class Meta:
        verbose_name_plural = 'cvs'

    def __str__(self):
        return self.job
