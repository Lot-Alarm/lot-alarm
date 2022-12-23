from django.shortcuts import render
from rest_framework import viewsets
from .serializers import FlightSerializer
from .models import Flight


# Create your views here.
def index(request):
    return render(request, 'flight_checker/index.html')


class FlightView(viewsets.ModelViewSet):
    serializer_class = FlightSerializer
    queryset = Flight.objects.all()
