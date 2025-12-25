from rest_framework import viewsets, permissions, status
from rest_framework.decorators import action
from rest_framework.response import Response
from django.utils import timezone
from .models import (
    CertificateProgram, ProgramEnrollment, ProgramModule,
    ModuleLesson, LessonCompletion, Attendance
)
from .serializers import (
    CertificateProgramSerializer, CertificateProgramDetailSerializer,
    ProgramEnrollmentSerializer, ProgramModuleSerializer,
    ModuleLessonSerializer, LessonCompletionSerializer,
    AttendanceSerializer
)


class CertificateProgramViewSet(viewsets.ModelViewSet):
    """ViewSet for CertificateProgram operations."""
    
    queryset = CertificateProgram.objects.all()
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    
    def get_serializer_class(self):
        if self.action == 'retrieve':
            return CertificateProgramDetailSerializer
        return CertificateProgramSerializer
    
    @action(detail=False, methods=['get'])
    def active(self, request):
        """Get active programs."""
        active = CertificateProgram.objects.filter(status=CertificateProgram.Status.ACTIVE)
        serializer = self.get_serializer(active, many=True)
        return Response(serializer.data)
    
    @action(detail=True, methods=['post'])
    def enroll(self, request, pk=None):
        """Enroll student in program."""
        program = self.get_object()
        
        # Check if already enrolled
        if ProgramEnrollment.objects.filter(student=request.user, program=program).exists():
            return Response(
                {"detail": "You have already applied to this program."},
                status=status.HTTP_400_BAD_REQUEST
            )
        
        # Check enrollment deadline
        if program.enrollment_deadline and timezone.now().date() > program.enrollment_deadline:
            return Response(
                {"detail": "Enrollment deadline has passed."},
                status=status.HTTP_400_BAD_REQUEST
            )
        
        # Check capacity
        if program.max_students:
            current_count = program.enrollments.exclude(
                status=ProgramEnrollment.Status.REJECTED
            ).count()
            if current_count >= program.max_students:
                return Response(
                    {"detail": "Program has reached maximum capacity."},
                    status=status.HTTP_400_BAD_REQUEST
                )
        
        # Create enrollment
        enrollment_data = {
            'program': program.id,
            'student': request.user.id,
            'motivation_letter': request.data.get('motivation_letter', ''),
            'church_affiliation': request.data.get('church_affiliation', ''),
            'pastor_reference': request.data.get('pastor_reference', ''),
            'pastor_contact': request.data.get('pastor_contact', ''),
        }
        
        serializer = ProgramEnrollmentSerializer(data=enrollment_data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    
    @action(detail=True, methods=['get'])
    def modules(self, request, pk=None):
        """Get modules for a program."""
        program = self.get_object()
        modules = program.modules.filter(is_published=True)
        serializer = ProgramModuleSerializer(modules, many=True)
        return Response(serializer.data)


class ProgramEnrollmentViewSet(viewsets.ModelViewSet):
    """ViewSet for ProgramEnrollment operations."""
    
    queryset = ProgramEnrollment.objects.all()
    serializer_class = ProgramEnrollmentSerializer
    permission_classes = [permissions.IsAuthenticated]
    
    def get_queryset(self):
        """Filter enrollments by user role."""
        user = self.request.user
        if user.is_staff_member():
            return ProgramEnrollment.objects.all()
        return ProgramEnrollment.objects.filter(student=user)
    
    @action(detail=True, methods=['get'])
    def progress(self, request, pk=None):
        """Get detailed progress for enrollment."""
        enrollment = self.get_object()
        completions = enrollment.lesson_completions.all()
        serializer = LessonCompletionSerializer(completions, many=True)
        return Response(serializer.data)
    
    @action(detail=True, methods=['post'])
    def complete_lesson(self, request, pk=None):
        """Mark a lesson as completed."""
        enrollment = self.get_object()
        lesson_id = request.data.get('lesson_id')
        
        try:
            lesson = ModuleLesson.objects.get(id=lesson_id)
        except ModuleLesson.DoesNotExist:
            return Response(
                {"detail": "Lesson not found."},
                status=status.HTTP_404_NOT_FOUND
            )
        
        completion, created = LessonCompletion.objects.get_or_create(
            enrollment=enrollment,
            lesson=lesson
        )
        
        if not completion.completed:
            completion.completed = True
            completion.completed_at = timezone.now()
            completion.student_notes = request.data.get('notes', '')
            completion.submission_url = request.data.get('submission_url', '')
            completion.save()
        
        serializer = LessonCompletionSerializer(completion)
        return Response(serializer.data)


class LessonCompletionViewSet(viewsets.ModelViewSet):
    """ViewSet for LessonCompletion operations."""
    
    queryset = LessonCompletion.objects.all()
    serializer_class = LessonCompletionSerializer
    permission_classes = [permissions.IsAuthenticated]
    
    def get_queryset(self):
        """Filter by user."""
        user = self.request.user
        if user.is_staff_member():
            return LessonCompletion.objects.all()
        return LessonCompletion.objects.filter(enrollment__student=user)



