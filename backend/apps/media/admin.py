from django.contrib import admin
from django import forms
from .models import VideoLibrary, Playlist, PlaylistVideo
from apps.media.supabase_storage import upload_to_supabase


class VideoLibraryAdminForm(forms.ModelForm):
    """Custom form with file upload for video thumbnail."""
    thumbnail_file = forms.ImageField(
        required=False,
        label="Upload Thumbnail Image",
        help_text="Upload video thumbnail image (JPG, PNG, etc.)"
    )
    
    class Meta:
        model = VideoLibrary
        fields = '__all__'
    
    def save(self, commit=True):
        instance = super().save(commit=False)
        
        thumbnail_file = self.cleaned_data.get('thumbnail_file')
        if thumbnail_file:
            try:
                thumbnail_url = upload_to_supabase(thumbnail_file, folder='videos/thumbnails')
                instance.thumbnail_url = thumbnail_url
            except Exception as e:
                raise forms.ValidationError(f"Failed to upload thumbnail: {str(e)}")
        
        if commit:
            instance.save()
        return instance


class PlaylistAdminForm(forms.ModelForm):
    """Custom form with file upload for playlist cover image."""
    cover_image_file = forms.ImageField(
        required=False,
        label="Upload Cover Image",
        help_text="Upload playlist cover image (JPG, PNG, etc.)"
    )
    
    class Meta:
        model = Playlist
        fields = '__all__'
    
    def save(self, commit=True):
        instance = super().save(commit=False)
        
        cover_image_file = self.cleaned_data.get('cover_image_file')
        if cover_image_file:
            try:
                cover_url = upload_to_supabase(cover_image_file, folder='playlists/covers')
                instance.cover_image = cover_url
            except Exception as e:
                raise forms.ValidationError(f"Failed to upload cover image: {str(e)}")
        
        if commit:
            instance.save()
        return instance


@admin.register(VideoLibrary)
class VideoLibraryAdmin(admin.ModelAdmin):
    form = VideoLibraryAdminForm
    list_display = [
        'title', 'category', 'ministry', 'published_date',
        'is_featured', 'is_published', 'views_count'
    ]
    list_filter = ['category', 'ministry', 'is_featured', 'is_published', 'published_date']
    search_fields = ['title', 'description', 'youtube_video_id']
    prepopulated_fields = {'slug': ('title',)}
    ordering = ['-published_date', '-created_at']
    list_editable = ['is_featured', 'is_published']
    readonly_fields = ['views_count', 'created_at', 'updated_at']
    
    fieldsets = (
        ('Basic Information', {
            'fields': ('title', 'slug', 'description', 'category', 'ministry')
        }),
        ('YouTube Video', {
            'fields': ('youtube_video_id', 'youtube_url', 'duration_seconds')
        }),
        ('Upload Thumbnail', {
            'fields': ('thumbnail_file',),
            'description': 'Upload custom video thumbnail (optional)'
        }),
        ('Or Use Thumbnail URL', {
            'fields': ('thumbnail_url',),
            'classes': ('collapse',),
            'description': 'Or paste thumbnail URL if you have one'
        }),
        ('Publishing', {
            'fields': ('is_featured', 'is_published', 'published_date')
        }),
        ('Metadata', {
            'fields': ('views_count', 'uploaded_by', 'created_at', 'updated_at')
        }),
    )
    
    def save_model(self, request, obj, form, change):
        if not obj.uploaded_by:
            obj.uploaded_by = request.user
        super().save_model(request, obj, form, change)


@admin.register(Playlist)
class PlaylistAdmin(admin.ModelAdmin):
    form = PlaylistAdminForm
    list_display = ['title', 'ministry', 'is_published', 'created_at']
    list_filter = ['ministry', 'is_published', 'created_at']
    search_fields = ['title', 'description']
    prepopulated_fields = {'slug': ('title',)}
    ordering = ['-created_at']
    list_editable = ['is_published']
    
    fieldsets = (
        ('Basic Information', {
            'fields': ('title', 'slug', 'description', 'ministry', 'youtube_playlist_id')
        }),
        ('Upload Cover Image', {
            'fields': ('cover_image_file',),
            'description': 'Upload playlist cover image'
        }),
        ('Or Use Cover URL', {
            'fields': ('cover_image',),
            'classes': ('collapse',),
        }),
        ('Publishing', {
            'fields': ('is_published',)
        }),
    )


@admin.register(PlaylistVideo)
class PlaylistVideoAdmin(admin.ModelAdmin):
    list_display = ['playlist', 'video', 'order']
    list_filter = ['playlist']
    search_fields = ['playlist__title', 'video__title']
    ordering = ['playlist', 'order']
    list_editable = ['order']
