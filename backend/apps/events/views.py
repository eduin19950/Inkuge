from rest_framework import viewsets, permissions, status
from rest_framework.decorators import action
from rest_framework.response import Response
from django.utils import timezone
from .models import Event, EventRegistration, EventComment
from .serializers import (
    EventSerializer, EventListSerializer,
    EventRegistrationSerializer, EventCommentSerializer
)


class EventViewSet(viewsets.ModelViewSet):
    """ViewSet for Event operations."""
    
    queryset = Event.objects.filter(is_public=True)
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    lookup_field = 'slug'
    
    def get_serializer_class(self):
        if self.action == 'list':
            return EventListSerializer
        return EventSerializer
    
    def retrieve(self, request, *args, **kwargs):
        """Increment view count when event is retrieved."""
        instance = self.get_object()
        instance.increment_views()
        serializer = self.get_serializer(instance)
        return Response(serializer.data)
    
    @action(detail=False, methods=['get'])
    def upcoming(self, request):
        """Get upcoming events."""
        upcoming = Event.objects.filter(
            is_public=True,
            status=Event.Status.UPCOMING,
            start_datetime__gte=timezone.now()
        ).order_by('start_datetime')
        serializer = EventListSerializer(upcoming, many=True)
        return Response(serializer.data)
    
    @action(detail=False, methods=['get'])
    def live(self, request):
        """Get live events."""
        now = timezone.now()
        live = Event.objects.filter(
            is_public=True,
            status=Event.Status.LIVE,
            start_datetime__lte=now,
            end_datetime__gte=now
        )
        serializer = self.get_serializer(live, many=True)
        return Response(serializer.data)
    
    @action(detail=False, methods=['get'])
    def past(self, request):
        """Get past events with recordings."""
        past = Event.objects.filter(
            is_public=True,
            status=Event.Status.ENDED,
            recording_url__isnull=False
        ).order_by('-start_datetime')
        serializer = EventListSerializer(past, many=True)
        return Response(serializer.data)
    
    @action(detail=False, methods=['get'])
    def featured(self, request):
        """Get featured events."""
        featured = Event.objects.filter(
            is_public=True,
            is_featured=True
        ).order_by('-start_datetime')[:5]
        serializer = EventListSerializer(featured, many=True)
        return Response(serializer.data)
    
    @action(detail=True, methods=['post'])
    def register(self, request, slug=None):
        """Register user for an event."""
        event = self.get_object()
        
        # Check if registration is required
        if not event.requires_registration:
            return Response(
                {"detail": "This event does not require registration."},
                status=status.HTTP_400_BAD_REQUEST
            )
        
        # Check if already registered
        if EventRegistration.objects.filter(event=event, user=request.user).exists():
            return Response(
                {"detail": "You are already registered for this event."},
                status=status.HTTP_400_BAD_REQUEST
            )
        
        # Check capacity
        if event.max_participants:
            current_count = event.registrations.filter(is_confirmed=True).count()
            if current_count >= event.max_participants:
                return Response(
                    {"detail": "This event has reached maximum capacity."},
                    status=status.HTTP_400_BAD_REQUEST
                )
        
        # Create registration
        registration = EventRegistration.objects.create(
            event=event,
            user=request.user,
            phone_number=request.data.get('phone_number', ''),
            reason_for_attending=request.data.get('reason_for_attending', '')
        )
        
        serializer = EventRegistrationSerializer(registration)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    
    @action(detail=True, methods=['get'])
    def comments(self, request, slug=None):
        """Get comments for an event."""
        event = self.get_object()
        comments = event.comments.filter(is_approved=True, parent__isnull=True)
        serializer = EventCommentSerializer(comments, many=True)
        return Response(serializer.data)


class EventRegistrationViewSet(viewsets.ModelViewSet):
    """ViewSet for EventRegistration operations."""
    
    queryset = EventRegistration.objects.all()
    serializer_class = EventRegistrationSerializer
    permission_classes = [permissions.IsAuthenticated]
    
    def get_queryset(self):
        """Filter registrations by user."""
        user = self.request.user
        if user.is_staff_member():
            return EventRegistration.objects.all()
        return EventRegistration.objects.filter(user=user)


class EventCommentViewSet(viewsets.ModelViewSet):
    """ViewSet for EventComment operations."""
    
    queryset = EventComment.objects.filter(is_approved=True)
    serializer_class = EventCommentSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    
    def perform_create(self, serializer):
        """Set user when creating comment."""
        serializer.save(user=self.request.user)



