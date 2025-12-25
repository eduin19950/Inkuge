from django.db import models
from django.utils.translation import gettext_lazy as _
from django.utils import timezone


class Event(models.Model):
    """Model for live events, conferences, and webinars."""
    
    class EventType(models.TextChoices):
        CONFERENCE = 'CONFERENCE', _('Conference')
        WEBINAR = 'WEBINAR', _('Webinar')
        WORKSHOP = 'WORKSHOP', _('Workshop')
        QA_SESSION = 'QA_SESSION', _('Q&A Session')
        TRAINING = 'TRAINING', _('Training Session')
    
    class Status(models.TextChoices):
        UPCOMING = 'UPCOMING', _('Upcoming')
        LIVE = 'LIVE', _('Live Now')
        ENDED = 'ENDED', _('Ended')
        CANCELLED = 'CANCELLED', _('Cancelled')
    
    title = models.CharField(max_length=200)
    slug = models.SlugField(unique=True)
    description = models.TextField()
    event_type = models.CharField(
        max_length=20,
        choices=EventType.choices,
        default=EventType.CONFERENCE
    )
    
    ministry = models.ForeignKey(
        'ministries.Ministry',
        on_delete=models.CASCADE,
        related_name='events'
    )
    
    # Event timing
    start_datetime = models.DateTimeField()
    end_datetime = models.DateTimeField()
    timezone_name = models.CharField(max_length=50, default='Africa/Kigali')
    
    # Event details
    speaker_name = models.CharField(max_length=200, blank=True)
    speaker_bio = models.TextField(blank=True)
    speaker_photo = models.URLField(blank=True, null=True)
    
    banner_image = models.URLField(blank=True, null=True)
    thumbnail_image = models.URLField(blank=True, null=True)
    
    # Streaming details
    youtube_live_url = models.URLField(blank=True, null=True, help_text="YouTube Live URL")
    jitsi_room_name = models.CharField(max_length=100, blank=True, help_text="Jitsi room ID")
    enable_jitsi = models.BooleanField(default=False, help_text="Enable interactive Jitsi session")
    enable_youtube = models.BooleanField(default=True, help_text="Enable YouTube live stream")
    
    # Recording
    recording_url = models.URLField(blank=True, null=True, help_text="YouTube video after event")
    
    # Registration
    requires_registration = models.BooleanField(default=False)
    max_participants = models.IntegerField(blank=True, null=True)
    registration_deadline = models.DateTimeField(blank=True, null=True)
    
    # Status
    status = models.CharField(
        max_length=20,
        choices=Status.choices,
        default=Status.UPCOMING
    )
    is_featured = models.BooleanField(default=False)
    is_public = models.BooleanField(default=True)
    
    # Metadata
    views_count = models.IntegerField(default=0)
    created_by = models.ForeignKey(
        'users.User',
        on_delete=models.SET_NULL,
        null=True,
        related_name='created_events'
    )
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        verbose_name = _('event')
        verbose_name_plural = _('events')
        ordering = ['-start_datetime']
    
    def __str__(self):
        return self.title
    
    @property
    def is_live(self):
        """Check if event is currently live."""
        now = timezone.now()
        return self.start_datetime <= now <= self.end_datetime and self.status == self.Status.LIVE
    
    @property
    def is_upcoming(self):
        """Check if event is upcoming."""
        return timezone.now() < self.start_datetime and self.status == self.Status.UPCOMING
    
    @property
    def has_ended(self):
        """Check if event has ended."""
        return timezone.now() > self.end_datetime or self.status == self.Status.ENDED
    
    def increment_views(self):
        """Increment view count."""
        self.views_count += 1
        self.save(update_fields=['views_count'])


class EventRegistration(models.Model):
    """Model for event registrations."""
    
    event = models.ForeignKey(
        Event,
        on_delete=models.CASCADE,
        related_name='registrations'
    )
    user = models.ForeignKey(
        'users.User',
        on_delete=models.CASCADE,
        related_name='event_registrations'
    )
    
    # Additional registration info
    phone_number = models.CharField(max_length=20, blank=True)
    reason_for_attending = models.TextField(blank=True)
    
    # Status
    is_confirmed = models.BooleanField(default=True)
    attended = models.BooleanField(default=False)
    
    registered_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        verbose_name = _('event registration')
        verbose_name_plural = _('event registrations')
        unique_together = ['event', 'user']
        ordering = ['-registered_at']
    
    def __str__(self):
        return f"{self.user.email} - {self.event.title}"


class EventComment(models.Model):
    """Comments/questions during events."""
    
    event = models.ForeignKey(
        Event,
        on_delete=models.CASCADE,
        related_name='comments'
    )
    user = models.ForeignKey(
        'users.User',
        on_delete=models.CASCADE,
        related_name='event_comments'
    )
    
    content = models.TextField()
    parent = models.ForeignKey(
        'self',
        on_delete=models.CASCADE,
        null=True,
        blank=True,
        related_name='replies'
    )
    
    is_approved = models.BooleanField(default=True)
    is_pinned = models.BooleanField(default=False)
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        verbose_name = _('event comment')
        verbose_name_plural = _('event comments')
        ordering = ['-is_pinned', '-created_at']
    
    def __str__(self):
        return f"{self.user.email} on {self.event.title}"



