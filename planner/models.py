from django.db import models
from django.utils import timezone

class Planner(models.Model):
    course = models.CharField(max_length=100)
    hours = models.PositiveIntegerField()
    completion_date = models.DateField(default=timezone.now)
    goals = models.TextField()
    details = models.TextField()
