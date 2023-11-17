import random

from django.views.generic import View
from inertia import render

class AppView(View):
    def get(self, request):
        return render(request, 'index', props={ 
            'name': 'hamada get',
            'id': random.randint(1, 100)
        })
    
    def post(self, request):
        return render(request, 'index', props={ 
            'name': 'hamada post',
            'id': random.randint(1, 100)
        })