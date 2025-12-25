from django.db import models
from django.utils.translation import gettext_lazy as _


class Testimony(models.Model):
    """Model for testimonies and impact stories."""
    
    class Category(models.TextChoices):
        SALVATION = 'SALVATION', _('Salvation')
        HEALING = 'HEALING', _('Healing')
        TRANSFORMATION = 'TRANSFORMATION', _('Transformation')
        STREET_KIDS = 'STREET_KIDS', _('Street Kids Impact')
        STUDENT = 'STUDENT', _('Student Life Change')
        PASTOR = 'PASTOR', _('Pastor Testimony')
        OTHER = 'OTHER', _('Other')
    
    title = models.CharField(max_length=200)
    slug = models.SlugField(unique=True)
    category = models.CharField(
        max_length=20,
        choices=Category.choices,
        default=Category.TRANSFORMATION
    )
    
    # Subject information
    person_name = models.CharField(max_length=200, blank=True, help_text="Name of person giving testimony")
    person_photo = models.URLField(blank=True, null=True)
    person_location = models.CharField(max_length=200, blank=True)
    
    # Content
    excerpt = models.TextField(max_length=300)
    story = models.TextField()
    
    # Media
    featured_image = models.URLField(blank=True, null=True)
    video_url = models.URLField(blank=True, null=True, help_text="YouTube video URL")
    
    # Attribution
    ministry = models.ForeignKey(
        'ministries.Ministry',
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name='testimonies'
    )
    
    # Status
    is_featured = models.BooleanField(default=False)
    is_published = models.BooleanField(default=True)
    published_date = models.DateField(blank=True, null=True)
    
    # Metadata
    views_count = models.IntegerField(default=0)
    created_by = models.ForeignKey(
        'users.User',
        on_delete=models.SET_NULL,
        null=True,
        related_name='created_testimonies'
    )
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        verbose_name = _('testimony')
        verbose_name_plural = _('testimonies')
        ordering = ['-published_date', '-created_at']
    
    def __str__(self):
        return self.title
    
    def increment_views(self):
        """Increment view count."""
        self.views_count += 1
        self.save(update_fields=['views_count'])


class ImpactStory(models.Model):
    """Stories about ministry impact (especially for street kids)."""
    
    title = models.CharField(max_length=200)
    slug = models.SlugField(unique=True)
    description = models.TextField()
    
    # Location and date
    location = models.CharField(max_length=200)
    event_date = models.DateField()
    
    # Media
    photos = models.JSONField(default=list, help_text="List of photo URLs")
    video_url = models.URLField(blank=True, null=True)
    
    # Statistics (for impact metrics)
    people_reached = models.IntegerField(default=0)
    lives_impacted = models.IntegerField(default=0)
    
    ministry = models.ForeignKey(
        'ministries.Ministry',
        on_delete=models.CASCADE,
        related_name='impact_stories'
    )
    
    is_featured = models.BooleanField(default=False)
    is_published = models.BooleanField(default=True)
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        verbose_name = _('impact story')
        verbose_name_plural = _('impact stories')
        ordering = ['-event_date']
    
    def __str__(self):
        return self.title


class PhotoGallery(models.Model):
    """Photo galleries for ministry events and activities."""
    
    title = models.CharField(max_length=200)
    slug = models.SlugField(unique=True)
    description = models.TextField(blank=True)
    
    ministry = models.ForeignKey(
        'ministries.Ministry',
        on_delete=models.CASCADE,
        related_name='galleries'
    )
    
    cover_photo = models.URLField(blank=True, null=True)
    
    is_published = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        verbose_name = _('photo gallery')
        verbose_name_plural = _('photo galleries')
        ordering = ['-created_at']
    
    def __str__(self):
        return self.title


class Photo(models.Model):
    """Individual photos in galleries."""
    
    gallery = models.ForeignKey(
        PhotoGallery,
        on_delete=models.CASCADE,
        related_name='photos'
    )
    
    title = models.CharField(max_length=200, blank=True)
    caption = models.TextField(blank=True)
    photo_url = models.URLField()
    thumbnail_url = models.URLField(blank=True, null=True)
    
    order = models.IntegerField(default=0)
    
    uploaded_by = models.ForeignKey(
        'users.User',
        on_delete=models.SET_NULL,
        null=True,
        related_name='uploaded_photos'
    )
    
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        verbose_name = _('photo')
        verbose_name_plural = _('photos')
        ordering = ['gallery', 'order', '-created_at']
    
    def __str__(self):
        return self.title or f"Photo in {self.gallery.title}"



