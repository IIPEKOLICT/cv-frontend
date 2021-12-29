from django.shortcuts import render

def index(request):
    return render(request, 'index.html', {
        'title': 'CV',
        'styles': [],
        'scripts': []
    })

def projects(request):
    return render(request, 'projects.html', {
        'title': 'Projects',
        'styles': [],
        'scripts': []
    })
