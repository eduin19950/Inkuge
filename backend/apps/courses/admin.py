from django.contrib import admin
from .models import Course, Lesson, Enrollment, LessonProgress


@admin.register(Course)
class CourseAdmin(admin.ModelAdmin):
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



