from django.contrib import admin
from django import forms
from .models import Course, Lesson, Enrollment, LessonProgress
from apps.media.supabase_storage import upload_to_supabase


class CourseAdminForm(forms.ModelForm):
    """Custom form with file upload for thumbnail image."""
    thumbnail_image_file = forms.ImageField(
        required=False,
        label="Upload Thumbnail Image",
        help_text="Upload course thumbnail image (JPG, PNG, etc.)"
    )
    
    class Meta:
        model = Course
        fields = '__all__'
    
    def save(self, commit=True):
        instance = super().save(commit=False)
        
        thumbnail_image_file = self.files.get('thumbnail_image_file')
        if thumbnail_image_file:
            try:
                thumbnail_url = upload_to_supabase(thumbnail_image_file, folder='courses/thumbnails')
                instance.thumbnail_image = thumbnail_url
            except Exception as e:
                raise forms.ValidationError(f"Failed to upload thumbnail image: {str(e)}")
        
        if commit:
            instance.save()
        return instance


@admin.register(Course)
class CourseAdmin(admin.ModelAdmin):
    form = CourseAdminForm
    list_display = [
        'title', 'ministry', 'instructor', 'level',
        'is_published', 'is_featured', 'enrolled_count', 'views_count'
    ]
    list_filter = ['ministry', 'level', 'is_published', 'is_featured']
    search_fields = ['title', 'description', 'instructor__first_name', 'instructor__last_name']
    prepopulated_fields = {'slug': ('title',)}
    ordering = ['-created_at']
    list_editable = ['is_published', 'is_featured']
    readonly_fields = ['enrolled_count', 'views_count', 'created_at', 'updated_at']
    
    fieldsets = (
        ('Basic Information', {
            'fields': ('title', 'slug', 'description', 'ministry', 'instructor', 'level')
        }),
        ('Course Details', {
            'fields': ('duration_weeks', 'lessons_count', 'certificate_available')
        }),
        ('Upload Thumbnail', {
            'fields': ('thumbnail_image_file',),
            'description': 'Upload course thumbnail image'
        }),
        ('Or Use Thumbnail URL', {
            'fields': ('thumbnail_image',),
            'classes': ('collapse',),
        }),
        ('Publishing', {
            'fields': ('is_published', 'is_featured', 'is_free')
        }),
        ('Metadata', {
            'fields': ('enrolled_count', 'views_count', 'created_at', 'updated_at')
        }),
    )


@admin.register(Lesson)
class LessonAdmin(admin.ModelAdmin):
    list_display = ['title', 'course', 'lesson_type', 'order', 'is_free', 'is_published']
    list_filter = ['course', 'lesson_type', 'is_free', 'is_published']
    search_fields = ['title', 'content', 'course__title']
    ordering = ['course', 'order']
    list_editable = ['order', 'is_free', 'is_published']


@admin.register(Enrollment)
class EnrollmentAdmin(admin.ModelAdmin):
    list_display = [
        'user', 'course', 'enrolled_at', 'is_active',
        'progress_percentage', 'completed', 'completed_at'
    ]
    list_filter = ['is_active', 'completed', 'course', 'enrolled_at']
    search_fields = ['user__email', 'course__title']
    ordering = ['-enrolled_at']
    readonly_fields = ['progress_percentage', 'enrolled_at', 'completed_at']


@admin.register(LessonProgress)
class LessonProgressAdmin(admin.ModelAdmin):
    list_display = [
        'enrollment', 'lesson', 'completed',
        'started_at', 'completed_at'
    ]
    list_filter = ['completed', 'lesson__course', 'started_at']
    search_fields = ['enrollment__user__email', 'lesson__title']
    ordering = ['-started_at']
    readonly_fields = ['started_at', 'completed_at']
