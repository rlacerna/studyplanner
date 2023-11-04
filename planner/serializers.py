from .models import Planner
from django.contrib.auth.models import User, Group
from rest_framework import serializers

class PlannerSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        # The model it will serialize
        model = Planner
        # the fields that should be included in the serialized output
        fields = ['id', 'subject', 'details']