from django.db import models
from django.core.validators import MinValueValidator


# Create your models here.
class Flight(models.Model):
    max_price = models.IntegerField(validators=[MinValueValidator(1)])
    location_from = models.CharField(max_length=30)
    location_to = models.CharField(max_length=30)
    email = models.EmailField()

    def __str__(self):
        return f"{self.email}: from {self.location_from} to {self.location_to}"
    