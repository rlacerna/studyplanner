from rest_framework import viewsets
from rest_framework import permissions
from .models import Planner
from .serializers import PlannerSerializer

class PlannerViewSet(viewsets.ModelViewSet):
    queryset = Planner.objects.all()
    serializer_class = PlannerSerializer
    permission_classes = [permissions.AllowAny]  # You can use more specific permission classes here
