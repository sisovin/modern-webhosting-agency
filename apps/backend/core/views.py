from rest_framework import generics
from .models import YourModel
from .serializers import YourModelSerializer

class YourModelListView(generics.ListCreateAPIView):
    queryset = YourModel.objects.all()
    serializer_class = YourModelSerializer

class YourModelDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = YourModel.objects.all()
    serializer_class = YourModelSerializer
