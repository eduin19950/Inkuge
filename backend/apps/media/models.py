from django.db import models
from django.utils.translation import gettext_lazy as _


class VideoLibrary(models.Model):
    """YouTube videos library."""
    
    class Category(models.TextChoices):
        SERMON = 'SERMON', _('Sermon')
        TEACHING = 'TEACHING', _('Teaching')
        TESTIMONY = 'TESTIMONY', _('Testimony')
        CONFERENCE = 'CONFERENCE', _('Conference')
        TRAINING = 'TRAINING', _('Training')
        OTHER = 'OTHER', _('Other')
    
    title = models.CharField(max_length=200)
    slug = models.SlugField(unique=True)
    description = models.TextField(blank=True)
    
    youtube_video_id = models.CharField(max_length=50, help_text="YouTube video ID")
    youtube_url = models.URLField()
    thumbnail_url = models.URLField(blank=True, null=True)
    
    category = models.CharField(
        max_length=20,
        choices=Category.choices,
        default=Category.OTHER
    )
    
    ministry = models.ForeignKey(
        'ministries.Ministry',
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name='videos'
    )
    
    duration_seconds = models.IntegerField(default=0)
    published_date = models.DateField(blank=True, null=True)
    
    views_count = models.IntegerField(default=0)
    is_featured = models.BooleanField(default=False)
    is_published = models.BooleanField(default=True)
    
    uploaded_by = models.ForeignKey(
        'users.User',
        on_delete=models.SET_NULL,
        null=True,
        related_name='uploaded_videos'
    )
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        verbose_name = _('video')
        verbose_name_plural = _('video library')
        ordering = ['-published_date', '-created_at']
    
    def __str__(self):
        return self.title
    
    def increment_views(self):
        """Increment view count."""
        self.views_count += 1
        self.save(update_fields=['views_count'])


class Playlist(models.Model):
    """YouTube playlists."""
    
    title = models.CharField(max_length=200)
    slug = models.SlugField(unique=True)
    description = models.TextField(blank=True)
    
    youtube_playlist_id = models.CharField(max_length=50, blank=True)
    
    ministry = models.ForeignKey(
        'ministries.Ministry',
        on_delete=models.CASCADE,
        related_name='playlists'
    )
    
    cover_image = models.URLField(blank=True, null=True)
    
    is_published = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        verbose_name = _('playlist')
        verbose_name_plural = _('playlists')
        ordering = ['-created_at']
    
    def __str__(self):
        return self.title


class PlaylistVideo(models.Model):
    """Videos in playlists."""
    
    playlist = models.ForeignKey(
        Playlist,
        on_delete=models.CASCADE,
        related_name='videos'
    )
    video = models.ForeignKey(
        VideoLibrary,
        on_delete=models.CASCADE,
        related_name='playlist_items'
    )
    
    order = models.IntegerField(default=0)
    
    class Meta:
        verbose_name = _('playlist video')
        verbose_name_plural = _('playlist videos')
        unique_together = ['playlist', 'video']
        ordering = ['playlist', 'order']
    
    def __str__(self):
        return f"{self.playlist.title} - {self.video.title}"



