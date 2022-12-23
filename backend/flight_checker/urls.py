from django.urls import path, include
from . import views
from rest_framework import routers

app_name = 'flight_checker'

router = routers.DefaultRouter()
router.register(r'alarm', views.FlightView, 'alarm')

urlpatterns = [
    path('', views.index, name='index'),
    path('api/', include(router.urls)),
]
