from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import VideoLibraryViewSet, PlaylistViewSet

router = DefaultRouter()
router.register(r'videos', VideoLibraryViewSet, basename='video')
router.register(r'playlists', PlaylistViewSet, basename='playlist')

urlpatterns = [
    path('', include(router.urls)),
]



