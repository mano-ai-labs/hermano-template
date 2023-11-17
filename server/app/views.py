from inertia import inertia
from django.http import HttpResponse

@inertia("index")
def index(request):
    return {
        "name": "hamada!",
    }