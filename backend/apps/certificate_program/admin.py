from django.contrib import admin
from .models import (
    CertificateProgram, ProgramEnrollment, ProgramModule,
    ModuleLesson, LessonCompletion, Attendance
)


@admin.register(CertificateProgram)
class CertificateProgramAdmin(admin.ModelAdmin):
    list_display = [
        'title', 'start_date', 'end_date', 'status',
        'enrollment_open', 'enrollment_deadline'
    ]
    list_filter = ['status', 'enrollment_open', 'start_date']
    search_fields = ['title', 'description']
    ordering = ['-start_date']
    list_editable = ['status', 'enrollment_open']


@admin.register(ProgramEnrollment)
class ProgramEnrollmentAdmin(admin.ModelAdmin):
    list_display = [
        'student', 'program', 'status', 'overall_progress',
        'attendance_percentage', 'certificate_issued', 'enrolled_at'
    ]
    list_filter = ['status', 'certificate_issued', 'program', 'enrolled_at']
    search_fields = ['student__email', 'student__first_name', 'student__last_name']
    ordering = ['-enrolled_at']
    list_editable = ['status']
    readonly_fields = ['enrolled_at', 'approved_at', 'completed_at']


@admin.register(ProgramModule)
class ProgramModuleAdmin(admin.ModelAdmin):
    list_display = [
        'title', 'program', 'order', 'duration_weeks',
        'start_date', 'end_date', 'is_published'
    ]
    list_filter = ['program', 'is_published']
    search_fields = ['title', 'description']
    ordering = ['program', 'order']
    list_editable = ['order', 'is_published']


@admin.register(ModuleLesson)
class ModuleLessonAdmin(admin.ModelAdmin):
    list_display = [
        'title', 'module', 'order', 'session_datetime', 'is_published'
    ]
    list_filter = ['module__program', 'module', 'is_published']
    search_fields = ['title', 'description']
    ordering = ['module', 'order']
    list_editable = ['order', 'is_published']


@admin.register(LessonCompletion)
class LessonCompletionAdmin(admin.ModelAdmin):
    list_display = [
        'enrollment', 'lesson', 'completed', 'score',
        'completed_at'
    ]
    list_filter = ['completed', 'lesson__module__program']
    search_fields = ['enrollment__student__email', 'lesson__title']
    ordering = ['-completed_at']
    readonly_fields = ['created_at', 'updated_at']


@admin.register(Attendance)
class AttendanceAdmin(admin.ModelAdmin):
    list_display = [
        'enrollment', 'lesson', 'attended', 'attendance_datetime'
    ]
    list_filter = ['attended', 'lesson__module__program', 'attendance_datetime']
    search_fields = ['enrollment__student__email', 'lesson__title']
    ordering = ['-attendance_datetime']
    list_editable = ['attended']



