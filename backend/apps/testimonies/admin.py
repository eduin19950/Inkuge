from django.contrib import admin
from django import forms
from .models import Testimony, ImpactStory, PhotoGallery, Photo
from apps.media.supabase_storage import upload_to_supabase


class TestimonyAdminForm(forms.ModelForm):
    """Custom form with file uploads for testimony images."""
    person_photo_file = forms.ImageField(
        required=False,
        label="Upload Person Photo",
        help_text="Upload photo of the person giving testimony"
    )
    featured_image_file = forms.ImageField(
        required=False,
        label="Upload Featured Image",
        help_text="Upload featured image for this testimony"
    )
    
    class Meta:
        model = Testimony
        fields = '__all__'
    
    def save(self, commit=True):
        instance = super().save(commit=False)
        
        # Handle person photo upload
        person_photo_file = self.cleaned_data.get('person_photo_file')
        if person_photo_file:
            try:
                photo_url = upload_to_supabase(person_photo_file, folder='testimonies/people')
                instance.person_photo = photo_url
            except Exception as e:
                raise forms.ValidationError(f"Failed to upload person photo: {str(e)}")
        
        # Handle featured image upload
        featured_image_file = self.cleaned_data.get('featured_image_file')
        if featured_image_file:
            try:
                image_url = upload_to_supabase(featured_image_file, folder='testimonies/featured')
                instance.featured_image = image_url
            except Exception as e:
                raise forms.ValidationError(f"Failed to upload featured image: {str(e)}")
        
        if commit:
            instance.save()
        return instance


class PhotoGalleryAdminForm(forms.ModelForm):
    """Custom form with file upload for gallery cover photo."""
    cover_photo_file = forms.ImageField(
        required=False,
        label="Upload Cover Photo",
        help_text="Upload gallery cover photo"
    )
    
    class Meta:
        model = PhotoGallery
        fields = '__all__'
    
    def save(self, commit=True):
        instance = super().save(commit=False)
        
        cover_photo_file = self.cleaned_data.get('cover_photo_file')
        if cover_photo_file:
            try:
                cover_url = upload_to_supabase(cover_photo_file, folder='galleries/covers')
                instance.cover_photo = cover_url
            except Exception as e:
                raise forms.ValidationError(f"Failed to upload cover photo: {str(e)}")
        
        if commit:
            instance.save()
        return instance


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


@admin.register(Testimony)
class TestimonyAdmin(admin.ModelAdmin):
    form = TestimonyAdminForm
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
    
    fieldsets = (
        ('Basic Information', {
            'fields': ('title', 'slug', 'category', 'ministry')
        }),
        ('Content', {
            'fields': ('excerpt', 'story')
        }),
        ('Person Information', {
            'fields': ('person_name', 'person_location')
        }),
        ('Upload Person Photo', {
            'fields': ('person_photo_file',),
        }),
        ('Upload Featured Image', {
            'fields': ('featured_image_file',),
        }),
        ('Or Use URLs', {
            'fields': ('person_photo', 'featured_image', 'video_url'),
            'classes': ('collapse',),
        }),
        ('Publishing', {
            'fields': ('is_featured', 'is_published', 'published_date')
        }),
        ('Metadata', {
            'fields': ('views_count', 'created_by', 'created_at', 'updated_at')
        }),
    )
    
    def save_model(self, request, obj, form, change):
        if not obj.created_by:
            obj.created_by = request.user
        super().save_model(request, obj, form, change)


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
    form = PhotoGalleryAdminForm
    list_display = ['title', 'ministry', 'is_published', 'created_at']
    list_filter = ['ministry', 'is_published', 'created_at']
    search_fields = ['title', 'description']
    prepopulated_fields = {'slug': ('title',)}
    ordering = ['-created_at']
    list_editable = ['is_published']
    
    fieldsets = (
        ('Basic Information', {
            'fields': ('title', 'slug', 'description', 'ministry')
        }),
        ('Upload Cover Photo', {
            'fields': ('cover_photo_file',),
        }),
        ('Or Use Cover URL', {
            'fields': ('cover_photo',),
            'classes': ('collapse',),
        }),
        ('Publishing', {
            'fields': ('is_published',)
        }),
    )


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
