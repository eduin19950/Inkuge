from rest_framework import viewsets, permissions
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import Testimony, ImpactStory, PhotoGallery, Photo
from .serializers import (
    TestimonySerializer, ImpactStorySerializer,
    PhotoGallerySerializer, PhotoGalleryDetailSerializer,
    PhotoSerializer
)


class TestimonyViewSet(viewsets.ModelViewSet):
    """ViewSet for Testimony operations."""
    
    queryset = Testimony.objects.filter(is_published=True)
    serializer_class = TestimonySerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    lookup_field = 'slug'
    
    def retrieve(self, request, *args, **kwargs):
        """Increment view count when testimony is retrieved."""
        instance = self.get_object()
        instance.increment_views()
        serializer = self.get_serializer(instance)
        return Response(serializer.data)
    
    @action(detail=False, methods=['get'])
    def featured(self, request):
        """Get featured testimonies."""
        featured = Testimony.objects.filter(is_published=True, is_featured=True)
        serializer = self.get_serializer(featured, many=True)
        return Response(serializer.data)
    
    @action(detail=False, methods=['get'])
    def by_category(self, request):
        """Get testimonies by category."""
        category = request.query_params.get('category')
        if category:
            testimonies = Testimony.objects.filter(is_published=True, category=category)
        else:
            testimonies = Testimony.objects.filter(is_published=True)
        serializer = self.get_serializer(testimonies, many=True)
        return Response(serializer.data)


class ImpactStoryViewSet(viewsets.ModelViewSet):
    """ViewSet for ImpactStory operations."""
    
    queryset = ImpactStory.objects.filter(is_published=True)
    serializer_class = ImpactStorySerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    lookup_field = 'slug'
    
    @action(detail=False, methods=['get'])
    def featured(self, request):
        """Get featured impact stories."""
        featured = ImpactStory.objects.filter(is_published=True, is_featured=True)
        serializer = self.get_serializer(featured, many=True)
        return Response(serializer.data)


class PhotoGalleryViewSet(viewsets.ModelViewSet):
    """ViewSet for PhotoGallery operations."""
    
    queryset = PhotoGallery.objects.filter(is_published=True)
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    lookup_field = 'slug'
    
    def get_serializer_class(self):
        if self.action == 'retrieve':
            return PhotoGalleryDetailSerializer
        return PhotoGallerySerializer


class PhotoViewSet(viewsets.ModelViewSet):
    """ViewSet for Photo operations."""
    
    queryset = Photo.objects.all()
    serializer_class = PhotoSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]



