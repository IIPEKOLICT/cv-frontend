from django.shortcuts import render
from .docs import docs

def index(request):
    return render(request, 'index.html', {
        'title': 'CV',
        'docs': docs,
        'styles': [],
        'scripts': []
    })
