from rest_framework import serializers
from .models import Course, Lesson, Enrollment, LessonProgress


class LessonSerializer(serializers.ModelSerializer):
    """Serializer for Lesson model."""
    
    class Meta:
        model = Lesson
        fields = '__all__'


class CourseSerializer(serializers.ModelSerializer):
    """Serializer for Course model."""
    
    ministry_name = serializers.CharField(source='ministry.name', read_only=True)
    instructor_name = serializers.CharField(source='instructor.full_name', read_only=True)
    lessons_count = serializers.SerializerMethodField()
    
    class Meta:
        model = Course
        fields = '__all__'
        read_only_fields = ['enrolled_count', 'views_count', 'created_at', 'updated_at']
    
    def get_lessons_count(self, obj):
        return obj.lessons.filter(is_published=True).count()


class CourseDetailSerializer(serializers.ModelSerializer):
    """Detailed serializer with lessons."""
    
    ministry_name = serializers.CharField(source='ministry.name', read_only=True)
    instructor_name = serializers.CharField(source='instructor.full_name', read_only=True)
    lessons = LessonSerializer(many=True, read_only=True)
    is_enrolled = serializers.SerializerMethodField()
    
    class Meta:
        model = Course
        fields = '__all__'
        read_only_fields = ['enrolled_count', 'views_count', 'created_at', 'updated_at']
    
    def get_is_enrolled(self, obj):
        request = self.context.get('request')
        if request and request.user.is_authenticated:
            return Enrollment.objects.filter(
                user=request.user,
                course=obj,
                is_active=True
            ).exists()
        return False


class EnrollmentSerializer(serializers.ModelSerializer):
    """Serializer for Enrollment model."""
    
    course_title = serializers.CharField(source='course.title', read_only=True)
    course_slug = serializers.CharField(source='course.slug', read_only=True)
    course_thumbnail = serializers.URLField(source='course.thumbnail_image', read_only=True)
    
    class Meta:
        model = Enrollment
        fields = '__all__'
        read_only_fields = [
            'enrolled_at', 'last_accessed_at', 'completed_at',
            'progress_percentage'
        ]


class LessonProgressSerializer(serializers.ModelSerializer):
    """Serializer for LessonProgress model."""
    
    lesson_title = serializers.CharField(source='lesson.title', read_only=True)
    
    class Meta:
        model = LessonProgress
        fields = '__all__'
        read_only_fields = ['started_at', 'last_accessed_at', 'completed_at']



