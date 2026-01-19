from rest_framework import serializers
from .models import Testimony, ImpactStory, PhotoGallery, Photo


class TestimonySerializer(serializers.ModelSerializer):
    """Serializer for Testimony model."""
    
    ministry_name = serializers.CharField(source='ministry.name', read_only=True)
    
    class Meta:
        model = Testimony
        fields = '__all__'
        read_only_fields = ['views_count', 'created_at', 'updated_at']


class ImpactStorySerializer(serializers.ModelSerializer):
    """Serializer for ImpactStory model."""
    
    ministry_name = serializers.CharField(source='ministry.name', read_only=True)
    
    class Meta:
        model = ImpactStory
        fields = '__all__'


class PhotoSerializer(serializers.ModelSerializer):
    """Serializer for Photo model."""
    
    uploaded_by_name = serializers.CharField(source='uploaded_by.full_name', read_only=True)
    gallery_title = serializers.CharField(source='gallery.title', read_only=True)
    gallery_ministry_name = serializers.CharField(source='gallery.ministry.name', read_only=True, allow_null=True)
    
    class Meta:
        model = Photo
        fields = '__all__'


class PhotoGallerySerializer(serializers.ModelSerializer):
    """Serializer for PhotoGallery model."""
    
    ministry_name = serializers.CharField(source='ministry.name', read_only=True)
    photos_count = serializers.SerializerMethodField()
    
    class Meta:
        model = PhotoGallery
        fields = '__all__'
    
    def get_photos_count(self, obj):
        return obj.photos.count()


class PhotoGalleryDetailSerializer(serializers.ModelSerializer):
    """Detailed serializer with photos."""
    
    ministry_name = serializers.CharField(source='ministry.name', read_only=True)
    photos = PhotoSerializer(many=True, read_only=True)
    
    class Meta:
        model = PhotoGallery
        fields = '__all__'



