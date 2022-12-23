from rest_framework import serializers
from .models import Flight


class FlightSerializer(serializers.ModelSerializer):
    class Meta:
        model = Flight
        fields = ('max_price', 'location_from', 'location_to', 'email')
