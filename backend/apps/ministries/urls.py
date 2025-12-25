from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    MinistryViewSet, MinistryPageViewSet,
    MinistryNewsViewSet, MinistryResourceViewSet
)

router = DefaultRouter()
router.register(r'', MinistryViewSet, basename='ministry')
router.register(r'pages', MinistryPageViewSet, basename='ministry-page')
router.register(r'news', MinistryNewsViewSet, basename='ministry-news')
router.register(r'resources', MinistryResourceViewSet, basename='ministry-resource')

urlpatterns = [
    path('', include(router.urls)),
]



