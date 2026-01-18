from django.contrib import admin
from django import forms
from .models import Ministry, MinistryPage, MinistryNews, MinistryResource
from apps.media.supabase_storage import upload_to_supabase


class MinistryAdminForm(forms.ModelForm):
    """Custom form with file upload for banner image."""
    banner_image_file = forms.ImageField(
        required=False,
        label="Upload Banner Image",
        help_text="Upload ministry banner image (JPG, PNG, etc.)"
    )
    
    class Meta:
        model = Ministry
        fields = '__all__'
    
    def save(self, commit=True):
        instance = super().save(commit=False)
        
        banner_image_file = self.cleaned_data.get('banner_image_file')
        if banner_image_file:
            try:
                banner_url = upload_to_supabase(banner_image_file, folder='ministries/banners')
                instance.banner_image = banner_url
            except Exception as e:
                raise forms.ValidationError(f"Failed to upload banner image: {str(e)}")
        
        if commit:
            instance.save()
        return instance


class MinistryNewsAdminForm(forms.ModelForm):
    """Custom form with file upload for news featured image."""
    featured_image_file = forms.ImageField(
        required=False,
        label="Upload Featured Image",
        help_text="Upload news featured image"
    )
    
    class Meta:
        model = MinistryNews
        fields = '__all__'
    
    def save(self, commit=True):
        instance = super().save(commit=False)
        
        featured_image_file = self.cleaned_data.get('featured_image_file')
        if featured_image_file:
            try:
                image_url = upload_to_supabase(featured_image_file, folder='ministries/news')
                instance.featured_image = image_url
            except Exception as e:
                raise forms.ValidationError(f"Failed to upload featured image: {str(e)}")
        
        if commit:
            instance.save()
        return instance


class MinistryResourceAdminForm(forms.ModelForm):
    """Custom form with file uploads for resources."""
    resource_file = forms.FileField(
        required=False,
        label="Upload Resource File",
        help_text="Upload PDF, document, or other file"
    )
    thumbnail_file = forms.ImageField(
        required=False,
        label="Upload Thumbnail Image",
        help_text="Upload resource thumbnail image"
    )
    
    class Meta:
        model = MinistryResource
        fields = '__all__'
    
    def save(self, commit=True):
        instance = super().save(commit=False)
        
        # Handle resource file upload
        resource_file = self.cleaned_data.get('resource_file')
        if resource_file:
            try:
                file_url = upload_to_supabase(resource_file, folder='ministries/resources')
                instance.file_url = file_url
            except Exception as e:
                raise forms.ValidationError(f"Failed to upload resource file: {str(e)}")
        
        # Handle thumbnail upload
        thumbnail_file = self.cleaned_data.get('thumbnail_file')
        if thumbnail_file:
            try:
                thumbnail_url = upload_to_supabase(thumbnail_file, folder='ministries/thumbnails')
                instance.thumbnail_url = thumbnail_url
            except Exception as e:
                raise forms.ValidationError(f"Failed to upload thumbnail: {str(e)}")
        
        if commit:
            instance.save()
        return instance


@admin.register(Ministry)
class MinistryAdmin(admin.ModelAdmin):
    form = MinistryAdminForm
    list_display = ['name', 'ministry_type', 'is_active', 'order', 'created_at']
    list_filter = ['ministry_type', 'is_active']
    search_fields = ['name', 'description']
    ordering = ['order', 'name']
    list_editable = ['order', 'is_active']
    
    fieldsets = (
        ('Basic Information', {
            'fields': ('name', 'ministry_type', 'tagline', 'description', 'is_active', 'order')
        }),
        ('Upload Banner Image', {
            'fields': ('banner_image_file',),
        }),
        ('Or Use Banner URL', {
            'fields': ('banner_image',),
            'classes': ('collapse',),
        }),
    )


@admin.register(MinistryPage)
class MinistryPageAdmin(admin.ModelAdmin):
    list_display = ['title', 'ministry', 'slug', 'is_published', 'order']
    list_filter = ['ministry', 'is_published']
    search_fields = ['title', 'content']
    prepopulated_fields = {'slug': ('title',)}
    ordering = ['ministry', 'order']
    list_editable = ['order', 'is_published']


@admin.register(MinistryNews)
class MinistryNewsAdmin(admin.ModelAdmin):
    form = MinistryNewsAdminForm
    list_display = ['title', 'ministry', 'author', 'is_published', 'is_featured', 'published_date', 'views_count']
    list_filter = ['ministry', 'is_published', 'is_featured', 'published_date']
    search_fields = ['title', 'content', 'excerpt']
    prepopulated_fields = {'slug': ('title',)}
    ordering = ['-published_date', '-created_at']
    list_editable = ['is_published', 'is_featured']
    readonly_fields = ['views_count', 'created_at', 'updated_at']
    
    fieldsets = (
        ('Basic Information', {
            'fields': ('title', 'slug', 'ministry', 'author', 'excerpt', 'content')
        }),
        ('Upload Featured Image', {
            'fields': ('featured_image_file',),
        }),
        ('Or Use Image URL', {
            'fields': ('featured_image',),
            'classes': ('collapse',),
        }),
        ('Publishing', {
            'fields': ('is_published', 'is_featured', 'published_date')
        }),
        ('Metadata', {
            'fields': ('views_count', 'created_at', 'updated_at')
        }),
    )


@admin.register(MinistryResource)
class MinistryResourceAdmin(admin.ModelAdmin):
    form = MinistryResourceAdminForm
    list_display = ['title', 'ministry', 'resource_type', 'is_public', 'download_count', 'uploaded_by']
    list_filter = ['ministry', 'resource_type', 'is_public']
    search_fields = ['title', 'description']
    ordering = ['-created_at']
    readonly_fields = ['download_count', 'created_at', 'updated_at']
    
    fieldsets = (
        ('Basic Information', {
            'fields': ('title', 'description', 'ministry', 'resource_type', 'is_public')
        }),
        ('Upload Files', {
            'fields': ('resource_file', 'thumbnail_file'),
            'description': 'Upload resource file (PDF, document, etc.) and optional thumbnail'
        }),
        ('Or Use URLs', {
            'fields': ('file_url', 'thumbnail_url'),
            'classes': ('collapse',),
        }),
        ('Metadata', {
            'fields': ('download_count', 'uploaded_by', 'created_at', 'updated_at')
        }),
    )
    
    def save_model(self, request, obj, form, change):
        if not obj.uploaded_by:
            obj.uploaded_by = request.user
        super().save_model(request, obj, form, change)
