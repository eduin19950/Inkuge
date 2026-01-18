from django.contrib import admin
from django import forms
from .models import Testimony, ImpactStory, PhotoGallery, Photo
from apps.media.supabase_storage import upload_to_supabase


@admin.register(Testimony)
class TestimonyAdmin(admin.ModelAdmin):
    list_display = [
        'title', 'category', 'person_name', 'ministry',
        'is_featured', 'is_published', 'published_date', 'views_count'
    ]
    list_filter = ['category', 'ministry', 'is_featured', 'is_published', 'published_date']
    search_fields = ['title', 'story', 'person_name']
    prepopulated_fields = {'slug': ('title',)}
    ordering = ['-published_date', '-created_at']
    list_editable = ['is_featured', 'is_published']
    readonly_fields = ['views_count', 'created_at', 'updated_at']


@admin.register(ImpactStory)
class ImpactStoryAdmin(admin.ModelAdmin):
    list_display = [
        'title', 'ministry', 'location', 'event_date',
        'people_reached', 'lives_impacted', 'is_featured', 'is_published'
    ]
    list_filter = ['ministry', 'is_featured', 'is_published', 'event_date']
    search_fields = ['title', 'description', 'location']
    prepopulated_fields = {'slug': ('title',)}
    ordering = ['-event_date']
    list_editable = ['is_featured', 'is_published']


@admin.register(PhotoGallery)
class PhotoGalleryAdmin(admin.ModelAdmin):
    list_display = ['title', 'ministry', 'is_published', 'created_at']
    list_filter = ['ministry', 'is_published', 'created_at']
    search_fields = ['title', 'description']
    prepopulated_fields = {'slug': ('title',)}
    ordering = ['-created_at']
    list_editable = ['is_published']


class PhotoAdminForm(forms.ModelForm):
    """Custom form with file upload field."""
    image_file = forms.ImageField(
        required=False,
        help_text="Upload an image file (JPG, PNG, etc.). This will be uploaded to Supabase storage."
    )
    
    class Meta:
        model = Photo
        fields = '__all__'
    
    def save(self, commit=True):
        instance = super().save(commit=False)
        
        # Handle file upload
        image_file = self.cleaned_data.get('image_file')
        if image_file:
            try:
                # Upload to Supabase
                photo_url = upload_to_supabase(image_file, folder='photos')
                instance.photo_url = photo_url
                instance.thumbnail_url = photo_url  # Use same URL for thumbnail
            except Exception as e:
                raise forms.ValidationError(f"Failed to upload image: {str(e)}")
        
        if commit:
            instance.save()
        return instance


@admin.register(Photo)
class PhotoAdmin(admin.ModelAdmin):
    form = PhotoAdminForm
    list_display = ['title', 'gallery', 'order', 'uploaded_by', 'created_at']
    list_filter = ['gallery__ministry', 'gallery', 'created_at']
    search_fields = ['title', 'caption', 'gallery__title']
    ordering = ['gallery', 'order', '-created_at']
    list_editable = ['order']
    
    fieldsets = (
        ('Basic Information', {
            'fields': ('gallery', 'title', 'caption', 'order')
        }),
        ('Upload Image', {
            'fields': ('image_file',),
            'description': 'Upload a photo file from your computer. The image will be uploaded to cloud storage.'
        }),
        ('Or Use URL (Optional)', {
            'fields': ('photo_url', 'thumbnail_url'),
            'classes': ('collapse',),
            'description': 'If you already have a URL, you can paste it here instead of uploading.'
        }),
        ('Metadata', {
            'fields': ('uploaded_by',),
        }),
    )
    
    def save_model(self, request, obj, form, change):
        if not obj.uploaded_by:
            obj.uploaded_by = request.user
        super().save_model(request, obj, form, change)



