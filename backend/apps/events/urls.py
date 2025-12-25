from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import EventViewSet, EventRegistrationViewSet, EventCommentViewSet

router = DefaultRouter()
router.register(r'', EventViewSet, basename='event')
router.register(r'registrations', EventRegistrationViewSet, basename='event-registration')
router.register(r'comments', EventCommentViewSet, basename='event-comment')

urlpatterns = [
    path('', include(router.urls)),
]



