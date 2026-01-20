from django.contrib import admin
from django import forms
from django.contrib import messages
from .models import VideoLibrary, Playlist, PlaylistVideo
from .supabase_storage import upload_to_supabase
from .youtube_upload import upload_video_to_youtube, YOUTUBE_CATEGORIES


class VideoLibraryAdminForm(forms.ModelForm):
    """Custom form with video and thumbnail upload."""
    
    # Video upload field
    video_file = forms.FileField(
        required=False,
        label="Upload Video File",
        help_text="Upload video file (MP4, AVI, MOV, etc.). Will be automatically processed and hosted.",
        widget=forms.ClearableFileInput(attrs={
            'accept': 'video/*',
            'class': 'video-upload-input'
        })
    )
    
    # Thumbnail upload field
    thumbnail_file = forms.ImageField(
        required=False,
        label="Upload Thumbnail Image",
        help_text="Upload custom video thumbnail (optional - one will be generated automatically)"
    )
    
    # Video metadata settings
    youtube_title = forms.CharField(
        required=False,
        max_length=100,
        label="Custom Video Title",
        help_text="Leave blank to use the video title above"
    )
    
    youtube_description = forms.CharField(
        required=False,
        widget=forms.Textarea(attrs={'rows': 4}),
        label="Custom Description",
        help_text="Custom description for the video (leave blank to use video description)"
    )
    
    youtube_tags = forms.CharField(
        required=False,
        label="Tags",
        help_text="Comma-separated tags (e.g., apologetics, christian, rwanda)"
    )
    
    youtube_category = forms.ChoiceField(
        choices=[('', '-- Select Category --')] + [(k, v) for k, v in YOUTUBE_CATEGORIES.items()],
        required=False,
        initial='22',
        label="Video Category"
    )
    
    youtube_privacy = forms.ChoiceField(
        choices=[
            ('public', 'Public - Anyone can see'),
            ('unlisted', 'Unlisted - Only people with link'),
            ('private', 'Private - Only you can see')
        ],
        initial='public',
        label="Privacy Status"
    )
    
    class Meta:
        model = VideoLibrary
        fields = [
            'title', 'slug', 'description', 'category', 'ministry',
            'duration_seconds', 'published_date', 'is_featured', 
            'is_published', 'uploaded_by'
        ]
    
    def clean(self):
        cleaned_data = super().clean()
        video_file = cleaned_data.get('video_file')
        youtube_video_id = self.instance.youtube_video_id if self.instance.pk else None
        
        # Check if we have either a video file or existing video
        if not video_file and not youtube_video_id:
            raise forms.ValidationError(
                "Please upload a video file. It will be automatically processed and hosted."
            )
        
        return cleaned_data
    
    def save(self, commit=True):
        instance = super().save(commit=False)
        
        # Handle video upload to YouTube
        video_file = self.files.get('video_file')
        if video_file:
            try:
                # Prepare YouTube metadata
                youtube_title = self.cleaned_data.get('youtube_title') or instance.title
                youtube_description = self.cleaned_data.get('youtube_description') or instance.description
                youtube_tags = self.cleaned_data.get('youtube_tags', '').split(',')
                youtube_tags = [tag.strip() for tag in youtube_tags if tag.strip()]
                youtube_category = self.cleaned_data.get('youtube_category') or '22'
                youtube_privacy = self.cleaned_data.get('youtube_privacy') or 'public'
                
                # Upload video
                print(f"Processing video: {youtube_title}")
                result = upload_video_to_youtube(
                    video_file=video_file,
                    title=youtube_title,
                    description=youtube_description,
                    tags=youtube_tags,
                    category_id=youtube_category,
                    privacy_status=youtube_privacy
                )
                
                # Save video details
                instance.youtube_video_id = result['video_id']
                instance.youtube_url = result['video_url']
                instance.thumbnail_url = result['thumbnail_url']
                
                print(f"✅ Video processed successfully! ID: {result['video_id']}")
                
            except Exception as e:
                error_msg = f"Failed to process video: {str(e)}"
                print(f"❌ {error_msg}")
                raise forms.ValidationError(error_msg)
        
        # Handle custom thumbnail upload
        thumbnail_file = self.files.get('thumbnail_file')
        if thumbnail_file:
            try:
                thumbnail_url = upload_to_supabase(thumbnail_file, folder='videos/thumbnails')
                instance.thumbnail_url = thumbnail_url
            except Exception as e:
                # Don't fail the whole form if thumbnail upload fails
                print(f"Warning: Failed to upload custom thumbnail: {str(e)}")
        
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
        
        cover_image_file = self.files.get('cover_image_file')
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
    readonly_fields = ['youtube_video_id', 'youtube_url', 'thumbnail_url', 'views_count', 'created_at', 'updated_at']
    
    fieldsets = (
        ('Basic Information', {
            'fields': ('title', 'slug', 'description', 'category', 'ministry')
        }),
        ('📹 Upload Video', {
            'fields': ('video_file',),
            'description': 'Upload your video file here. It will be automatically processed and hosted.'
        }),
        ('🎬 Video Settings', {
            'fields': (
                'youtube_title',
                'youtube_description',
                'youtube_tags',
                'youtube_category',
                'youtube_privacy'
            ),
            'description': 'Customize video settings (optional)'
        }),
        ('🖼️ Custom Thumbnail (Optional)', {
            'fields': ('thumbnail_file',),
            'classes': ('collapse',),
            'description': 'Upload custom thumbnail or leave blank to use auto-generated thumbnail'
        }),
        ('📊 Video Info (Auto-generated)', {
            'fields': ('youtube_video_id', 'youtube_url', 'thumbnail_url', 'duration_seconds'),
            'classes': ('collapse',),
            'description': 'These fields are automatically filled after upload'
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
        
        try:
            super().save_model(request, obj, form, change)
            messages.success(request, '✅ Video uploaded successfully!')
        except Exception as e:
            messages.error(request, f'❌ Error uploading video: {str(e)}')
            raise


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
