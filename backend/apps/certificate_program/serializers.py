from rest_framework import serializers
from .models import (
    CertificateProgram, ProgramEnrollment, ProgramModule,
    ModuleLesson, LessonCompletion, Attendance
)


class ModuleLessonSerializer(serializers.ModelSerializer):
    """Serializer for ModuleLesson model."""
    
    class Meta:
        model = ModuleLesson
        fields = '__all__'


class ProgramModuleSerializer(serializers.ModelSerializer):
    """Serializer for ProgramModule model."""
    
    lessons = ModuleLessonSerializer(many=True, read_only=True)
    lessons_count = serializers.SerializerMethodField()
    
    class Meta:
        model = ProgramModule
        fields = '__all__'
    
    def get_lessons_count(self, obj):
        return obj.lessons.filter(is_published=True).count()


class CertificateProgramSerializer(serializers.ModelSerializer):
    """Serializer for CertificateProgram model."""
    
    modules_count = serializers.SerializerMethodField()
    enrolled_count = serializers.SerializerMethodField()
    
    class Meta:
        model = CertificateProgram
        fields = '__all__'
    
    def get_modules_count(self, obj):
        return obj.modules.filter(is_published=True).count()
    
    def get_enrolled_count(self, obj):
        return obj.enrollments.exclude(status=ProgramEnrollment.Status.REJECTED).count()


class CertificateProgramDetailSerializer(serializers.ModelSerializer):
    """Detailed serializer with modules."""
    
    modules = ProgramModuleSerializer(many=True, read_only=True)
    is_enrolled = serializers.SerializerMethodField()
    
    class Meta:
        model = CertificateProgram
        fields = '__all__'
    
    def get_is_enrolled(self, obj):
        request = self.context.get('request')
        if request and request.user.is_authenticated:
            return ProgramEnrollment.objects.filter(
                student=request.user,
                program=obj
            ).exclude(status=ProgramEnrollment.Status.REJECTED).exists()
        return False


class ProgramEnrollmentSerializer(serializers.ModelSerializer):
    """Serializer for ProgramEnrollment model."""
    
    program_title = serializers.CharField(source='program.title', read_only=True)
    student_name = serializers.CharField(source='student.full_name', read_only=True)
    
    class Meta:
        model = ProgramEnrollment
        fields = '__all__'
        read_only_fields = [
            'enrolled_at', 'approved_at', 'completed_at',
            'overall_progress', 'attendance_percentage',
            'certificate_issued', 'certificate_url', 'certificate_issued_date'
        ]


class LessonCompletionSerializer(serializers.ModelSerializer):
    """Serializer for LessonCompletion model."""
    
    lesson_title = serializers.CharField(source='lesson.title', read_only=True)
    module_title = serializers.CharField(source='lesson.module.title', read_only=True)
    
    class Meta:
        model = LessonCompletion
        fields = '__all__'
        read_only_fields = ['created_at', 'updated_at', 'completed_at']


class AttendanceSerializer(serializers.ModelSerializer):
    """Serializer for Attendance model."""
    
    lesson_title = serializers.CharField(source='lesson.title', read_only=True)
    
    class Meta:
        model = Attendance
        fields = '__all__'
        read_only_fields = ['attendance_datetime']



