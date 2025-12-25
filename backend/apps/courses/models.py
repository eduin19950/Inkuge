from django.db import models
from django.utils.translation import gettext_lazy as _


class Course(models.Model):
    """Model for online courses."""
    
    class Level(models.TextChoices):
        BEGINNER = 'BEGINNER', _('Beginner')
        INTERMEDIATE = 'INTERMEDIATE', _('Intermediate')
        ADVANCED = 'ADVANCED', _('Advanced')
    
    title = models.CharField(max_length=200)
    slug = models.SlugField(unique=True)
    description = models.TextField()
    short_description = models.CharField(max_length=300)
    
    ministry = models.ForeignKey(
        'ministries.Ministry',
        on_delete=models.CASCADE,
        related_name='courses'
    )
    
    # Course details
    instructor = models.ForeignKey(
        'users.User',
        on_delete=models.SET_NULL,
        null=True,
        related_name='taught_courses'
    )
    level = models.CharField(
        max_length=20,
        choices=Level.choices,
        default=Level.BEGINNER
    )
    duration_hours = models.IntegerField(help_text="Estimated duration in hours")
    
    # Media
    thumbnail_image = models.URLField(blank=True, null=True)
    promo_video_url = models.URLField(blank=True, null=True)
    
    # Status
    is_published = models.BooleanField(default=False)
    is_featured = models.BooleanField(default=False)
    requires_enrollment = models.BooleanField(default=True)
    
    # Metadata
    enrolled_count = models.IntegerField(default=0)
    views_count = models.IntegerField(default=0)
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        verbose_name = _('course')
        verbose_name_plural = _('courses')
        ordering = ['-created_at']
    
    def __str__(self):
        return self.title
    
    def increment_views(self):
        """Increment view count."""
        self.views_count += 1
        self.save(update_fields=['views_count'])
    
    def increment_enrolled(self):
        """Increment enrollment count."""
        self.enrolled_count += 1
        self.save(update_fields=['enrolled_count'])


class Lesson(models.Model):
    """Model for course lessons."""
    
    class LessonType(models.TextChoices):
        VIDEO = 'VIDEO', _('Video Lesson')
        READING = 'READING', _('Reading Material')
        QUIZ = 'QUIZ', _('Quiz')
        ASSIGNMENT = 'ASSIGNMENT', _('Assignment')
    
    course = models.ForeignKey(
        Course,
        on_delete=models.CASCADE,
        related_name='lessons'
    )
    title = models.CharField(max_length=200)
    slug = models.SlugField()
    description = models.TextField(blank=True)
    
    lesson_type = models.CharField(
        max_length=20,
        choices=LessonType.choices,
        default=LessonType.VIDEO
    )
    order = models.IntegerField(default=0)
    
    # Content
    content = models.TextField(blank=True, help_text="Text content or instructions")
    video_url = models.URLField(blank=True, null=True, help_text="YouTube or Vimeo URL")
    video_duration = models.IntegerField(blank=True, null=True, help_text="Duration in seconds")
    
    # Resources
    resource_url = models.URLField(blank=True, null=True, help_text="PDF or other resource")
    
    is_free = models.BooleanField(default=False, help_text="Available without enrollment")
    is_published = models.BooleanField(default=True)
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        verbose_name = _('lesson')
        verbose_name_plural = _('lessons')
        ordering = ['course', 'order']
        unique_together = ['course', 'slug']
    
    def __str__(self):
        return f"{self.course.title} - {self.title}"


class Enrollment(models.Model):
    """Model for course enrollments."""
    
    user = models.ForeignKey(
        'users.User',
        on_delete=models.CASCADE,
        related_name='course_enrollments'
    )
    course = models.ForeignKey(
        Course,
        on_delete=models.CASCADE,
        related_name='enrollments'
    )
    
    enrolled_at = models.DateTimeField(auto_now_add=True)
    last_accessed_at = models.DateTimeField(auto_now=True)
    
    is_active = models.BooleanField(default=True)
    completed = models.BooleanField(default=False)
    completed_at = models.DateTimeField(blank=True, null=True)
    
    progress_percentage = models.IntegerField(default=0)
    
    class Meta:
        verbose_name = _('enrollment')
        verbose_name_plural = _('enrollments')
        unique_together = ['user', 'course']
        ordering = ['-enrolled_at']
    
    def __str__(self):
        return f"{self.user.email} - {self.course.title}"
    
    def update_progress(self):
        """Calculate and update progress percentage."""
        total_lessons = self.course.lessons.filter(is_published=True).count()
        if total_lessons == 0:
            self.progress_percentage = 0
        else:
            completed_lessons = self.lesson_progress.filter(completed=True).count()
            self.progress_percentage = int((completed_lessons / total_lessons) * 100)
        
        # Check if course is completed
        if self.progress_percentage == 100 and not self.completed:
            from django.utils import timezone
            self.completed = True
            self.completed_at = timezone.now()
        
        self.save(update_fields=['progress_percentage', 'completed', 'completed_at'])


class LessonProgress(models.Model):
    """Track user progress through lessons."""
    
    enrollment = models.ForeignKey(
        Enrollment,
        on_delete=models.CASCADE,
        related_name='lesson_progress'
    )
    lesson = models.ForeignKey(
        Lesson,
        on_delete=models.CASCADE,
        related_name='user_progress'
    )
    
    started_at = models.DateTimeField(auto_now_add=True)
    last_accessed_at = models.DateTimeField(auto_now=True)
    completed = models.BooleanField(default=False)
    completed_at = models.DateTimeField(blank=True, null=True)
    
    # For video lessons
    video_progress_seconds = models.IntegerField(default=0)
    
    class Meta:
        verbose_name = _('lesson progress')
        verbose_name_plural = _('lesson progress')
        unique_together = ['enrollment', 'lesson']
        ordering = ['lesson__order']
    
    def __str__(self):
        return f"{self.enrollment.user.email} - {self.lesson.title}"
    
    def mark_complete(self):
        """Mark lesson as completed."""
        if not self.completed:
            from django.utils import timezone
            self.completed = True
            self.completed_at = timezone.now()
            self.save(update_fields=['completed', 'completed_at'])
            
            # Update enrollment progress
            self.enrollment.update_progress()



