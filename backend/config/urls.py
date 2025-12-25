"""
URL configuration for Ratio Christi Rwanda platform.
"""

from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from rest_framework import routers

# API Router
router = routers.DefaultRouter()

urlpatterns = [
    # Admin
    path('admin/', admin.site.urls),
    
    # API endpoints
    path('api/auth/', include('djoser.urls')),
    path('api/auth/', include('djoser.urls.jwt')),
    path('api/users/', include('apps.users.urls')),
    path('api/ministries/', include('apps.ministries.urls')),
    path('api/events/', include('apps.events.urls')),
    path('api/courses/', include('apps.courses.urls')),
    path('api/certificate-program/', include('apps.certificate_program.urls')),
    path('api/testimonies/', include('apps.testimonies.urls')),
    path('api/media/', include('apps.media.urls')),
    
    # API root
    path('api/', include(router.urls)),
]

# Serve media files in development
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

# Admin site customization
admin.site.site_header = "Ratio Christi Rwanda Admin"
admin.site.site_title = "RC Rwanda Admin Portal"
admin.site.index_title = "Welcome to Ratio Christi Rwanda Digital Ministry Platform"



