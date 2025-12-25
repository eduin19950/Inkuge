from django.contrib import admin
from .models import Event, EventRegistration, EventComment


@admin.register(Event)
class EventAdmin(admin.ModelAdmin):
    list_display = [
        'title', 'event_type', 'ministry', 'start_datetime',
        'status', 'is_featured', 'views_count'
    ]
    list_filter = ['event_type', 'status', 'ministry', 'is_featured', 'start_datetime']
    search_fields = ['title', 'description', 'speaker_name']
    prepopulated_fields = {'slug': ('title',)}
    ordering = ['-start_datetime']
    list_editable = ['status', 'is_featured']
    readonly_fields = ['views_count', 'created_at', 'updated_at']
    
    fieldsets = (
        ('Basic Information', {
            'fields': ('title', 'slug', 'description', 'event_type', 'ministry')
        }),
        ('Schedule', {
            'fields': ('start_datetime', 'end_datetime', 'timezone_name')
        }),
        ('Speaker', {
            'fields': ('speaker_name', 'speaker_bio', 'speaker_photo')
        }),
        ('Media', {
            'fields': ('banner_image', 'thumbnail_image')
        }),
        ('Streaming', {
            'fields': (
                'youtube_live_url', 'enable_youtube',
                'jitsi_room_name', 'enable_jitsi',
                'recording_url'
            )
        }),
        ('Registration', {
            'fields': ('requires_registration', 'max_participants', 'registration_deadline')
        }),
        ('Status & Visibility', {
            'fields': ('status', 'is_featured', 'is_public')
        }),
        ('Metadata', {
            'fields': ('views_count', 'created_by', 'created_at', 'updated_at')
        }),
    )


@admin.register(EventRegistration)
class EventRegistrationAdmin(admin.ModelAdmin):
    list_display = ['user', 'event', 'is_confirmed', 'attended', 'registered_at']
    list_filter = ['is_confirmed', 'attended', 'event', 'registered_at']
    search_fields = ['user__email', 'event__title', 'phone_number']
    ordering = ['-registered_at']
    list_editable = ['is_confirmed', 'attended']


@admin.register(EventComment)
class EventCommentAdmin(admin.ModelAdmin):
    list_display = ['user', 'event', 'content_preview', 'is_approved', 'is_pinned', 'created_at']
    list_filter = ['is_approved', 'is_pinned', 'event', 'created_at']
    search_fields = ['content', 'user__email', 'event__title']
    ordering = ['-created_at']
    list_editable = ['is_approved', 'is_pinned']
    
    def content_preview(self, obj):
        return obj.content[:50] + '...' if len(obj.content) > 50 else obj.content
    content_preview.short_description = 'Content'



