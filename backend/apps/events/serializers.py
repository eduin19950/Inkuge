from rest_framework import serializers
from .models import Event, EventRegistration, EventComment


class EventSerializer(serializers.ModelSerializer):
    """Serializer for Event model."""
    
    ministry_name = serializers.CharField(source='ministry.name', read_only=True)
    ministry_type = serializers.CharField(source='ministry.ministry_type', read_only=True)
    is_live = serializers.ReadOnlyField()
    is_upcoming = serializers.ReadOnlyField()
    has_ended = serializers.ReadOnlyField()
    registration_count = serializers.SerializerMethodField()
    
    class Meta:
        model = Event
        fields = '__all__'
        read_only_fields = ['views_count', 'created_at', 'updated_at']
    
    def get_registration_count(self, obj):
        return obj.registrations.filter(is_confirmed=True).count()


class EventListSerializer(serializers.ModelSerializer):
    """Lightweight serializer for event listings."""
    
    ministry_name = serializers.CharField(source='ministry.name', read_only=True)
    is_live = serializers.ReadOnlyField()
    
    class Meta:
        model = Event
        fields = [
            'id', 'title', 'slug', 'event_type', 'ministry_name',
            'start_datetime', 'end_datetime', 'speaker_name',
            'thumbnail_image', 'status', 'is_featured', 'is_live'
        ]


class EventRegistrationSerializer(serializers.ModelSerializer):
    """Serializer for EventRegistration model."""
    
    event_title = serializers.CharField(source='event.title', read_only=True)
    user_name = serializers.CharField(source='user.full_name', read_only=True)
    user_email = serializers.CharField(source='user.email', read_only=True)
    
    class Meta:
        model = EventRegistration
        fields = '__all__'
        read_only_fields = ['registered_at', 'updated_at']


class EventCommentSerializer(serializers.ModelSerializer):
    """Serializer for EventComment model."""
    
    user_name = serializers.CharField(source='user.full_name', read_only=True)
    user_profile_picture = serializers.URLField(source='user.profile_picture', read_only=True)
    replies_count = serializers.SerializerMethodField()
    
    class Meta:
        model = EventComment
        fields = '__all__'
        read_only_fields = ['created_at', 'updated_at']
    
    def get_replies_count(self, obj):
        return obj.replies.filter(is_approved=True).count()



