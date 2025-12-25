from django.db import models
from django.utils.translation import gettext_lazy as _
from django.core.validators import MinValueValidator, MaxValueValidator


class CertificateProgram(models.Model):
    """6-Month Certificate Program in Apologetics & Discipleship."""
    
    class Status(models.TextChoices):
        UPCOMING = 'UPCOMING', _('Upcoming')
        ACTIVE = 'ACTIVE', _('Active')
        COMPLETED = 'COMPLETED', _('Completed')
    
    title = models.CharField(max_length=200, default="6-Month Certificate Program")
    description = models.TextField()
    
    start_date = models.DateField()
    end_date = models.DateField()
    
    status = models.CharField(
        max_length=20,
        choices=Status.choices,
        default=Status.UPCOMING
    )
    
    enrollment_open = models.BooleanField(default=True)
    enrollment_deadline = models.DateField(blank=True, null=True)
    max_students = models.IntegerField(blank=True, null=True)
    
    certificate_template_url = models.URLField(
        blank=True,
        null=True,
        help_text="Template for certificate generation"
    )
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        verbose_name = _('certificate program')
        verbose_name_plural = _('certificate programs')
        ordering = ['-start_date']
    
    def __str__(self):
        return f"{self.title} ({self.start_date.year})"


class ProgramEnrollment(models.Model):
    """Student enrollment in certificate program."""
    
    class Status(models.TextChoices):
        PENDING = 'PENDING', _('Pending Approval')
        APPROVED = 'APPROVED', _('Approved')
        REJECTED = 'REJECTED', _('Rejected')
        ACTIVE = 'ACTIVE', _('Active')
        COMPLETED = 'COMPLETED', _('Completed')
        DROPPED = 'DROPPED', _('Dropped')
    
    program = models.ForeignKey(
        CertificateProgram,
        on_delete=models.CASCADE,
        related_name='enrollments'
    )
    student = models.ForeignKey(
        'users.User',
        on_delete=models.CASCADE,
        related_name='program_enrollments'
    )
    
    # Application details
    motivation_letter = models.TextField()
    church_affiliation = models.CharField(max_length=200)
    pastor_reference = models.CharField(max_length=200, blank=True)
    pastor_contact = models.CharField(max_length=100, blank=True)
    
    # Status
    status = models.CharField(
        max_length=20,
        choices=Status.choices,
        default=Status.PENDING
    )
    
    # Progress
    overall_progress = models.IntegerField(default=0, validators=[MinValueValidator(0), MaxValueValidator(100)])
    attendance_percentage = models.IntegerField(default=0, validators=[MinValueValidator(0), MaxValueValidator(100)])
    
    # Certificate
    certificate_issued = models.BooleanField(default=False)
    certificate_url = models.URLField(blank=True, null=True)
    certificate_issued_date = models.DateField(blank=True, null=True)
    
    enrolled_at = models.DateTimeField(auto_now_add=True)
    approved_at = models.DateTimeField(blank=True, null=True)
    completed_at = models.DateTimeField(blank=True, null=True)
    
    class Meta:
        verbose_name = _('program enrollment')
        verbose_name_plural = _('program enrollments')
        unique_together = ['program', 'student']
        ordering = ['-enrolled_at']
    
    def __str__(self):
        return f"{self.student.email} - {self.program.title}"


class ProgramModule(models.Model):
    """Modules/units in the certificate program."""
    
    program = models.ForeignKey(
        CertificateProgram,
        on_delete=models.CASCADE,
        related_name='modules'
    )
    
    title = models.CharField(max_length=200)
    description = models.TextField()
    order = models.IntegerField(default=0)
    
    # Duration
    duration_weeks = models.IntegerField(default=1)
    start_date = models.DateField(blank=True, null=True)
    end_date = models.DateField(blank=True, null=True)
    
    # Content
    learning_objectives = models.TextField(blank=True)
    
    is_published = models.BooleanField(default=True)
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        verbose_name = _('program module')
        verbose_name_plural = _('program modules')
        ordering = ['program', 'order']
    
    def __str__(self):
        return f"{self.program.title} - Module {self.order}: {self.title}"


class ModuleLesson(models.Model):
    """Individual lessons within program modules."""
    
    module = models.ForeignKey(
        ProgramModule,
        on_delete=models.CASCADE,
        related_name='lessons'
    )
    
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    order = models.IntegerField(default=0)
    
    # Content
    content = models.TextField(blank=True)
    video_url = models.URLField(blank=True, null=True)
    reading_material_url = models.URLField(blank=True, null=True)
    
    # Interactive session
    jitsi_room_name = models.CharField(max_length=100, blank=True)
    session_datetime = models.DateTimeField(blank=True, null=True)
    
    is_published = models.BooleanField(default=True)
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        verbose_name = _('module lesson')
        verbose_name_plural = _('module lessons')
        ordering = ['module', 'order']
    
    def __str__(self):
        return f"{self.module.title} - {self.title}"


class LessonCompletion(models.Model):
    """Track student completion of lessons."""
    
    enrollment = models.ForeignKey(
        ProgramEnrollment,
        on_delete=models.CASCADE,
        related_name='lesson_completions'
    )
    lesson = models.ForeignKey(
        ModuleLesson,
        on_delete=models.CASCADE,
        related_name='completions'
    )
    
    completed = models.BooleanField(default=False)
    completed_at = models.DateTimeField(blank=True, null=True)
    
    # Notes/submission
    student_notes = models.TextField(blank=True)
    submission_url = models.URLField(blank=True, null=True)
    
    # Grading
    score = models.IntegerField(
        blank=True,
        null=True,
        validators=[MinValueValidator(0), MaxValueValidator(100)]
    )
    instructor_feedback = models.TextField(blank=True)
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        verbose_name = _('lesson completion')
        verbose_name_plural = _('lesson completions')
        unique_together = ['enrollment', 'lesson']
        ordering = ['lesson__module__order', 'lesson__order']
    
    def __str__(self):
        return f"{self.enrollment.student.email} - {self.lesson.title}"


class Attendance(models.Model):
    """Track attendance for interactive sessions."""
    
    enrollment = models.ForeignKey(
        ProgramEnrollment,
        on_delete=models.CASCADE,
        related_name='attendance_records'
    )
    lesson = models.ForeignKey(
        ModuleLesson,
        on_delete=models.CASCADE,
        related_name='attendance_records'
    )
    
    attended = models.BooleanField(default=False)
    attendance_datetime = models.DateTimeField(auto_now_add=True)
    
    notes = models.TextField(blank=True)
    
    class Meta:
        verbose_name = _('attendance')
        verbose_name_plural = _('attendance records')
        unique_together = ['enrollment', 'lesson']
        ordering = ['-attendance_datetime']
    
    def __str__(self):
        return f"{self.enrollment.student.email} - {self.lesson.title} - {'Present' if self.attended else 'Absent'}"



