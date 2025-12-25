from rest_framework import viewsets, permissions, status
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import Course, Lesson, Enrollment, LessonProgress
from .serializers import (
    CourseSerializer, CourseDetailSerializer, LessonSerializer,
    EnrollmentSerializer, LessonProgressSerializer
)


class CourseViewSet(viewsets.ModelViewSet):
    """ViewSet for Course operations."""
    
    queryset = Course.objects.filter(is_published=True)
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    lookup_field = 'slug'
    
    def get_serializer_class(self):
        if self.action == 'retrieve':
            return CourseDetailSerializer
        return CourseSerializer
    
    def retrieve(self, request, *args, **kwargs):
        """Increment view count when course is retrieved."""
        instance = self.get_object()
        instance.increment_views()
        serializer = self.get_serializer(instance, context={'request': request})
        return Response(serializer.data)
    
    @action(detail=False, methods=['get'])
    def featured(self, request):
        """Get featured courses."""
        featured = Course.objects.filter(is_published=True, is_featured=True)
        serializer = CourseSerializer(featured, many=True)
        return Response(serializer.data)
    
    @action(detail=True, methods=['post'])
    def enroll(self, request, slug=None):
        """Enroll user in a course."""
        course = self.get_object()
        
        # Check if already enrolled
        if Enrollment.objects.filter(user=request.user, course=course).exists():
            return Response(
                {"detail": "You are already enrolled in this course."},
                status=status.HTTP_400_BAD_REQUEST
            )
        
        # Create enrollment
        enrollment = Enrollment.objects.create(
            user=request.user,
            course=course
        )
        
        # Increment course enrolled count
        course.increment_enrolled()
        
        serializer = EnrollmentSerializer(enrollment)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    
    @action(detail=True, methods=['get'])
    def lessons(self, request, slug=None):
        """Get lessons for a course."""
        course = self.get_object()
        
        # Check enrollment for non-free lessons
        is_enrolled = Enrollment.objects.filter(
            user=request.user,
            course=course,
            is_active=True
        ).exists() if request.user.is_authenticated else False
        
        if is_enrolled or request.user.is_staff_member():
            lessons = course.lessons.filter(is_published=True)
        else:
            lessons = course.lessons.filter(is_published=True, is_free=True)
        
        serializer = LessonSerializer(lessons, many=True)
        return Response(serializer.data)


class EnrollmentViewSet(viewsets.ModelViewSet):
    """ViewSet for Enrollment operations."""
    
    queryset = Enrollment.objects.all()
    serializer_class = EnrollmentSerializer
    permission_classes = [permissions.IsAuthenticated]
    
    def get_queryset(self):
        """Filter enrollments by user."""
        user = self.request.user
        if user.is_staff_member():
            return Enrollment.objects.all()
        return Enrollment.objects.filter(user=user, is_active=True)
    
    @action(detail=True, methods=['get'])
    def progress(self, request, pk=None):
        """Get detailed progress for an enrollment."""
        enrollment = self.get_object()
        progress = enrollment.lesson_progress.all()
        serializer = LessonProgressSerializer(progress, many=True)
        return Response(serializer.data)


class LessonProgressViewSet(viewsets.ModelViewSet):
    """ViewSet for LessonProgress operations."""
    
    queryset = LessonProgress.objects.all()
    serializer_class = LessonProgressSerializer
    permission_classes = [permissions.IsAuthenticated]
    
    def get_queryset(self):
        """Filter progress by user."""
        return LessonProgress.objects.filter(enrollment__user=self.request.user)
    
    @action(detail=True, methods=['post'])
    def complete(self, request, pk=None):
        """Mark a lesson as completed."""
        progress = self.get_object()
        progress.mark_complete()
        serializer = self.get_serializer(progress)
        return Response(serializer.data)
    
    @action(detail=True, methods=['post'])
    def update_video_progress(self, request, pk=None):
        """Update video watching progress."""
        progress = self.get_object()
        seconds = request.data.get('seconds', 0)
        progress.video_progress_seconds = seconds
        progress.save(update_fields=['video_progress_seconds'])
        return Response({"seconds": progress.video_progress_seconds})



