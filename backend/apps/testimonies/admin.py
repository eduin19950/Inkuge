from django.contrib import admin
from .models import Testimony, ImpactStory, PhotoGallery, Photo


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


@admin.register(Photo)
class PhotoAdmin(admin.ModelAdmin):
    list_display = ['title', 'gallery', 'order', 'uploaded_by', 'created_at']
    list_filter = ['gallery__ministry', 'gallery', 'created_at']
    search_fields = ['title', 'caption', 'gallery__title']
    ordering = ['gallery', 'order', '-created_at']
    list_editable = ['order']



