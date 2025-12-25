from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    CertificateProgramViewSet, ProgramEnrollmentViewSet,
    LessonCompletionViewSet
)

router = DefaultRouter()
router.register(r'programs', CertificateProgramViewSet, basename='certificate-program')
router.register(r'enrollments', ProgramEnrollmentViewSet, basename='program-enrollment')
router.register(r'completions', LessonCompletionViewSet, basename='lesson-completion')

urlpatterns = [
    path('', include(router.urls)),
]



