from .models import Planner
from django.contrib.auth.models import User, Group
from rest_framework import serializers

class PlannerSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Planner
        fields = ['id', 'course', 'hours', 'completion_date', 'goals', 'details']
