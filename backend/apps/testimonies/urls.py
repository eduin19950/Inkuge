from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    TestimonyViewSet, ImpactStoryViewSet,
    PhotoGalleryViewSet, PhotoViewSet
)

router = DefaultRouter()
router.register(r'testimonies', TestimonyViewSet, basename='testimony')
router.register(r'impact-stories', ImpactStoryViewSet, basename='impact-story')
router.register(r'galleries', PhotoGalleryViewSet, basename='photo-gallery')
router.register(r'photos', PhotoViewSet, basename='photo')

urlpatterns = [
    path('', include(router.urls)),
]



