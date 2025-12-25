from rest_framework import viewsets, permissions, status
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import Ministry, MinistryPage, MinistryNews, MinistryResource
from .serializers import (
    MinistrySerializer, MinistryPageSerializer,
    MinistryNewsSerializer, MinistryResourceSerializer
)


class MinistryViewSet(viewsets.ModelViewSet):
    """ViewSet for Ministry operations."""
    
    queryset = Ministry.objects.filter(is_active=True)
    serializer_class = MinistrySerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    lookup_field = 'ministry_type'
    
    @action(detail=True, methods=['get'])
    def pages(self, request, ministry_type=None):
        """Get all pages for a ministry."""
        ministry = self.get_object()
        pages = ministry.pages.filter(is_published=True)
        serializer = MinistryPageSerializer(pages, many=True)
        return Response(serializer.data)
    
    @action(detail=True, methods=['get'])
    def news(self, request, ministry_type=None):
        """Get news for a ministry."""
        ministry = self.get_object()
        news = ministry.news.filter(is_published=True)
        serializer = MinistryNewsSerializer(news, many=True)
        return Response(serializer.data)
    
    @action(detail=True, methods=['get'])
    def resources(self, request, ministry_type=None):
        """Get resources for a ministry."""
        ministry = self.get_object()
        resources = ministry.resources.filter(is_public=True)
        serializer = MinistryResourceSerializer(resources, many=True)
        return Response(serializer.data)


class MinistryPageViewSet(viewsets.ModelViewSet):
    """ViewSet for MinistryPage operations."""
    
    queryset = MinistryPage.objects.filter(is_published=True)
    serializer_class = MinistryPageSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    lookup_field = 'slug'


class MinistryNewsViewSet(viewsets.ModelViewSet):
    """ViewSet for MinistryNews operations."""
    
    queryset = MinistryNews.objects.filter(is_published=True)
    serializer_class = MinistryNewsSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    lookup_field = 'slug'
    
    def retrieve(self, request, *args, **kwargs):
        """Increment view count when news is retrieved."""
        instance = self.get_object()
        instance.increment_views()
        serializer = self.get_serializer(instance)
        return Response(serializer.data)
    
    @action(detail=False, methods=['get'])
    def featured(self, request):
        """Get featured news."""
        featured = MinistryNews.objects.filter(is_published=True, is_featured=True)
        serializer = self.get_serializer(featured, many=True)
        return Response(serializer.data)


class MinistryResourceViewSet(viewsets.ModelViewSet):
    """ViewSet for MinistryResource operations."""
    
    queryset = MinistryResource.objects.filter(is_public=True)
    serializer_class = MinistryResourceSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    
    @action(detail=True, methods=['post'])
    def download(self, request, pk=None):
        """Track download."""
        resource = self.get_object()
        resource.increment_downloads()
        return Response({
            'url': resource.file_url,
            'downloads': resource.download_count
        })



