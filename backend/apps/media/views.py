from rest_framework import viewsets, permissions
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import VideoLibrary, Playlist
from .serializers import (
    VideoLibrarySerializer, PlaylistSerializer,
    PlaylistDetailSerializer
)


class VideoLibraryViewSet(viewsets.ModelViewSet):
    """ViewSet for VideoLibrary operations."""
    
    queryset = VideoLibrary.objects.filter(is_published=True)
    serializer_class = VideoLibrarySerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    lookup_field = 'slug'
    
    def retrieve(self, request, *args, **kwargs):
        """Increment view count when video is retrieved."""
        instance = self.get_object()
        instance.increment_views()
        serializer = self.get_serializer(instance)
        return Response(serializer.data)
    
    @action(detail=False, methods=['get'])
    def featured(self, request):
        """Get featured videos."""
        featured = VideoLibrary.objects.filter(is_published=True, is_featured=True)
        serializer = self.get_serializer(featured, many=True)
        return Response(serializer.data)
    
    @action(detail=False, methods=['get'])
    def by_category(self, request):
        """Get videos by category."""
        category = request.query_params.get('category')
        if category:
            videos = VideoLibrary.objects.filter(is_published=True, category=category)
        else:
            videos = VideoLibrary.objects.filter(is_published=True)
        serializer = self.get_serializer(videos, many=True)
        return Response(serializer.data)


class PlaylistViewSet(viewsets.ModelViewSet):
    """ViewSet for Playlist operations."""
    
    queryset = Playlist.objects.filter(is_published=True)
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    lookup_field = 'slug'
    
    def get_serializer_class(self):
        if self.action == 'retrieve':
            return PlaylistDetailSerializer
        return PlaylistSerializer



