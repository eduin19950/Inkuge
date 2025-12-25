from rest_framework import serializers
from .models import VideoLibrary, Playlist, PlaylistVideo


class VideoLibrarySerializer(serializers.ModelSerializer):
    """Serializer for VideoLibrary model."""
    
    ministry_name = serializers.CharField(source='ministry.name', read_only=True)
    
    class Meta:
        model = VideoLibrary
        fields = '__all__'
        read_only_fields = ['views_count', 'created_at', 'updated_at']


class PlaylistVideoSerializer(serializers.ModelSerializer):
    """Serializer for PlaylistVideo model."""
    
    video = VideoLibrarySerializer(read_only=True)
    
    class Meta:
        model = PlaylistVideo
        fields = '__all__'


class PlaylistSerializer(serializers.ModelSerializer):
    """Serializer for Playlist model."""
    
    ministry_name = serializers.CharField(source='ministry.name', read_only=True)
    videos_count = serializers.SerializerMethodField()
    
    class Meta:
        model = Playlist
        fields = '__all__'
    
    def get_videos_count(self, obj):
        return obj.videos.count()


class PlaylistDetailSerializer(serializers.ModelSerializer):
    """Detailed serializer with videos."""
    
    ministry_name = serializers.CharField(source='ministry.name', read_only=True)
    videos = PlaylistVideoSerializer(many=True, read_only=True)
    
    class Meta:
        model = Playlist
        fields = '__all__'



