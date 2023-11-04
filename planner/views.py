from .models import Planner
from rest_framework import viewsets
from rest_framework import permissions
from .serializers import PlannerSerializer


class PlannerViewSet(viewsets.ModelViewSet):
    ## The Main Query for the index route
    queryset = Planner.objects.all()
    # The serializer class for serializing output
    serializer_class = PlannerSerializer
    # optional permission class set permission level
    permission_classes = [permissions.AllowAny] #Coule be [permissions.IsAuthenticated]