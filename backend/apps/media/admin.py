from django.contrib import admin
from .models import VideoLibrary, Playlist, PlaylistVideo


@admin.register(VideoLibrary)
class VideoLibraryAdmin(admin.ModelAdmin):
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


@admin.register(Playlist)
class PlaylistAdmin(admin.ModelAdmin):
    list_display = ['title', 'ministry', 'is_published', 'created_at']
    list_filter = ['ministry', 'is_published', 'created_at']
    search_fields = ['title', 'description']
    prepopulated_fields = {'slug': ('title',)}
    ordering = ['-created_at']
    list_editable = ['is_published']


@admin.register(PlaylistVideo)
class PlaylistVideoAdmin(admin.ModelAdmin):
    list_display = ['playlist', 'video', 'order']
    list_filter = ['playlist']
    search_fields = ['playlist__title', 'video__title']
    ordering = ['playlist', 'order']
    list_editable = ['order']



