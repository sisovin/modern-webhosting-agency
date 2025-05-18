from django.urls import path
from .views import (
    YourModelListView, YourModelDetailView,
    RegisterView, LoginView,
    HostingPlanListView, HostingPlanDetailView,
    DomainListView, DomainDetailView,
    TestimonialListView, TestimonialDetailView,
    ContactCreateView
)

urlpatterns = [
    path('yourmodel/', YourModelListView.as_view(), name='yourmodel-list'),
    path('yourmodel/<int:pk>/', YourModelDetailView.as_view(), name='yourmodel-detail'),
    path('auth/register/', RegisterView.as_view(), name='auth-register'),
    path('auth/login/', LoginView.as_view(), name='auth-login'),
    path('hostingplans/', HostingPlanListView.as_view(), name='hostingplan-list'),
    path('hostingplans/<int:pk>/', HostingPlanDetailView.as_view(), name='hostingplan-detail'),
    path('domains/', DomainListView.as_view(), name='domain-list'),
    path('domains/<int:pk>/', DomainDetailView.as_view(), name='domain-detail'),
    path('testimonials/', TestimonialListView.as_view(), name='testimonial-list'),
    path('testimonials/<int:pk>/', TestimonialDetailView.as_view(), name='testimonial-detail'),
    path('contact/', ContactCreateView.as_view(), name='contact-create'),
]
