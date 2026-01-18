from django.contrib import admin
from django import forms
from .models import Event, EventRegistration, EventComment
from apps.media.supabase_storage import upload_to_supabase


class EventAdminForm(forms.ModelForm):
    """Custom form with file upload fields for images."""
    speaker_photo_file = forms.ImageField(
        required=False,
        label="Upload Speaker Photo",
        help_text="Upload speaker photo (JPG, PNG, etc.)"
    )
    banner_image_file = forms.ImageField(
        required=False,
        label="Upload Banner Image",
        help_text="Upload event banner image"
    )
    thumbnail_image_file = forms.ImageField(
        required=False,
        label="Upload Thumbnail Image",
        help_text="Upload event thumbnail image"
    )
    
    class Meta:
        model = Event
        fields = '__all__'
    
    def save(self, commit=True):
        instance = super().save(commit=False)
        
        # Handle speaker photo upload
        speaker_photo_file = self.cleaned_data.get('speaker_photo_file')
        if speaker_photo_file:
            try:
                photo_url = upload_to_supabase(speaker_photo_file, folder='events/speakers')
                instance.speaker_photo = photo_url
            except Exception as e:
                raise forms.ValidationError(f"Failed to upload speaker photo: {str(e)}")
        
        # Handle banner image upload
        banner_image_file = self.cleaned_data.get('banner_image_file')
        if banner_image_file:
            try:
                banner_url = upload_to_supabase(banner_image_file, folder='events/banners')
                instance.banner_image = banner_url
            except Exception as e:
                raise forms.ValidationError(f"Failed to upload banner image: {str(e)}")
        
        # Handle thumbnail image upload
        thumbnail_image_file = self.cleaned_data.get('thumbnail_image_file')
        if thumbnail_image_file:
            try:
                thumbnail_url = upload_to_supabase(thumbnail_image_file, folder='events/thumbnails')
                instance.thumbnail_image = thumbnail_url
            except Exception as e:
                raise forms.ValidationError(f"Failed to upload thumbnail image: {str(e)}")
        
        if commit:
            instance.save()
        return instance


@admin.register(Event)
class EventAdmin(admin.ModelAdmin):
    form = EventAdminForm
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
            'fields': ('speaker_name', 'speaker_bio')
        }),
        ('Upload Speaker Photo', {
            'fields': ('speaker_photo_file',),
            'description': 'Upload speaker photo file'
        }),
        ('Or Use Speaker Photo URL', {
            'fields': ('speaker_photo',),
            'classes': ('collapse',),
        }),
        ('Upload Event Images', {
            'fields': ('banner_image_file', 'thumbnail_image_file'),
            'description': 'Upload banner and thumbnail images'
        }),
        ('Or Use Image URLs', {
            'fields': ('banner_image', 'thumbnail_image'),
            'classes': ('collapse',),
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
    
    def save_model(self, request, obj, form, change):
        if not obj.created_by:
            obj.created_by = request.user
        super().save_model(request, obj, form, change)


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
