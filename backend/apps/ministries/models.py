from django.db import models
from django.utils.translation import gettext_lazy as _


class Ministry(models.Model):
    """Model representing different ministries."""
    
    class MinistryType(models.TextChoices):
        EVANGELISM = 'EVANGELISM', _('Campus & High School Evangelism')
        APOLOGETICS = 'APOLOGETICS', _('Christian Apologetics Hub')
        LEADERSHIP = 'LEADERSHIP', _('Pastors Leadership Training')
        STREET_KIDS = 'STREET_KIDS', _('Street Kids Ministry')
    
    name = models.CharField(max_length=200)
    ministry_type = models.CharField(
        max_length=20,
        choices=MinistryType.choices,
        unique=True
    )
    description = models.TextField()
    banner_image = models.URLField(blank=True, null=True)
    icon = models.URLField(blank=True, null=True)
    is_active = models.BooleanField(default=True)
    order = models.IntegerField(default=0, help_text="Display order on homepage")
    
    # Contact information
    contact_email = models.EmailField(blank=True, null=True)
    contact_phone = models.CharField(max_length=20, blank=True, null=True)
    
    # Social media
    facebook_url = models.URLField(blank=True, null=True)
    twitter_url = models.URLField(blank=True, null=True)
    instagram_url = models.URLField(blank=True, null=True)
    youtube_url = models.URLField(blank=True, null=True)
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        verbose_name = _('ministry')
        verbose_name_plural = _('ministries')
        ordering = ['order', 'name']
    
    def __str__(self):
        return self.name


class MinistryPage(models.Model):
    """Custom pages for each ministry (About, Vision, etc)."""
    
    ministry = models.ForeignKey(
        Ministry,
        on_delete=models.CASCADE,
        related_name='pages'
    )
    title = models.CharField(max_length=200)
    slug = models.SlugField(unique=True)
    content = models.TextField()
    order = models.IntegerField(default=0)
    is_published = models.BooleanField(default=True)
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        verbose_name = _('ministry page')
        verbose_name_plural = _('ministry pages')
        ordering = ['ministry', 'order', 'title']
        unique_together = ['ministry', 'slug']
    
    def __str__(self):
        return f"{self.ministry.name} - {self.title}"


class MinistryNews(models.Model):
    """News and updates for ministries."""
    
    ministry = models.ForeignKey(
        Ministry,
        on_delete=models.CASCADE,
        related_name='news'
    )
    title = models.CharField(max_length=200)
    slug = models.SlugField(unique=True)
    excerpt = models.TextField(max_length=300)
    content = models.TextField()
    featured_image = models.URLField(blank=True, null=True)
    author = models.ForeignKey(
        'users.User',
        on_delete=models.SET_NULL,
        null=True,
        related_name='ministry_news'
    )
    
    is_featured = models.BooleanField(default=False)
    is_published = models.BooleanField(default=True)
    published_date = models.DateTimeField(blank=True, null=True)
    
    views_count = models.IntegerField(default=0)
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        verbose_name = _('ministry news')
        verbose_name_plural = _('ministry news')
        ordering = ['-published_date', '-created_at']
    
    def __str__(self):
        return self.title
    
    def increment_views(self):
        """Increment view count."""
        self.views_count += 1
        self.save(update_fields=['views_count'])


class MinistryResource(models.Model):
    """Downloadable resources for ministries."""
    
    class ResourceType(models.TextChoices):
        PDF = 'PDF', _('PDF Document')
        VIDEO = 'VIDEO', _('Video')
        AUDIO = 'AUDIO', _('Audio')
        IMAGE = 'IMAGE', _('Image')
        OTHER = 'OTHER', _('Other')
    
    ministry = models.ForeignKey(
        Ministry,
        on_delete=models.CASCADE,
        related_name='resources'
    )
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    resource_type = models.CharField(
        max_length=20,
        choices=ResourceType.choices,
        default=ResourceType.PDF
    )
    file_url = models.URLField()
    file_size = models.CharField(max_length=50, blank=True, help_text="e.g., 2.5 MB")
    thumbnail_url = models.URLField(blank=True, null=True)
    
    download_count = models.IntegerField(default=0)
    is_public = models.BooleanField(default=True)
    
    uploaded_by = models.ForeignKey(
        'users.User',
        on_delete=models.SET_NULL,
        null=True,
        related_name='uploaded_resources'
    )
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        verbose_name = _('ministry resource')
        verbose_name_plural = _('ministry resources')
        ordering = ['-created_at']
    
    def __str__(self):
        return self.title
    
    def increment_downloads(self):
        """Increment download count."""
        self.download_count += 1
        self.save(update_fields=['download_count'])



