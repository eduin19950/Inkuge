from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CourseViewSet, EnrollmentViewSet, LessonProgressViewSet

router = DefaultRouter()
router.register(r'', CourseViewSet, basename='course')
router.register(r'enrollments', EnrollmentViewSet, basename='enrollment')
router.register(r'progress', LessonProgressViewSet, basename='lesson-progress')

urlpatterns = [
    path('', include(router.urls)),
]



