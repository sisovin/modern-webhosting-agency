from django.urls import path
from .views import YourModelListView, YourModelDetailView

urlpatterns = [
    path('yourmodel/', YourModelListView.as_view(), name='yourmodel-list'),
    path('yourmodel/<int:pk>/', YourModelDetailView.as_view(), name='yourmodel-detail'),
]
