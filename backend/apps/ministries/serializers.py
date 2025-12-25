from rest_framework import serializers
from .models import Ministry, MinistryPage, MinistryNews, MinistryResource


class MinistrySerializer(serializers.ModelSerializer):
    """Serializer for Ministry model."""
    
    class Meta:
        model = Ministry
        fields = '__all__'


class MinistryPageSerializer(serializers.ModelSerializer):
    """Serializer for MinistryPage model."""
    
    ministry_name = serializers.CharField(source='ministry.name', read_only=True)
    
    class Meta:
        model = MinistryPage
        fields = '__all__'


class MinistryNewsSerializer(serializers.ModelSerializer):
    """Serializer for MinistryNews model."""
    
    ministry_name = serializers.CharField(source='ministry.name', read_only=True)
    author_name = serializers.CharField(source='author.full_name', read_only=True)
    
    class Meta:
        model = MinistryNews
        fields = '__all__'
        read_only_fields = ['views_count', 'created_at', 'updated_at']


class MinistryResourceSerializer(serializers.ModelSerializer):
    """Serializer for MinistryResource model."""
    
    ministry_name = serializers.CharField(source='ministry.name', read_only=True)
    uploaded_by_name = serializers.CharField(source='uploaded_by.full_name', read_only=True)
    
    class Meta:
        model = MinistryResource
        fields = '__all__'
        read_only_fields = ['download_count', 'created_at', 'updated_at']



