from django.contrib import admin
from .models import Ministry, MinistryPage, MinistryNews, MinistryResource


@admin.register(Ministry)
class MinistryAdmin(admin.ModelAdmin):
    list_display = ['name', 'ministry_type', 'is_active', 'order', 'created_at']
    list_filter = ['ministry_type', 'is_active']
    search_fields = ['name', 'description']
    ordering = ['order', 'name']
    list_editable = ['order', 'is_active']


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
    list_display = ['title', 'ministry', 'author', 'is_published', 'is_featured', 'published_date', 'views_count']
    list_filter = ['ministry', 'is_published', 'is_featured', 'published_date']
    search_fields = ['title', 'content', 'excerpt']
    prepopulated_fields = {'slug': ('title',)}
    ordering = ['-published_date', '-created_at']
    list_editable = ['is_published', 'is_featured']
    readonly_fields = ['views_count', 'created_at', 'updated_at']


@admin.register(MinistryResource)
class MinistryResourceAdmin(admin.ModelAdmin):
    list_display = ['title', 'ministry', 'resource_type', 'is_public', 'download_count', 'uploaded_by']
    list_filter = ['ministry', 'resource_type', 'is_public']
    search_fields = ['title', 'description']
    ordering = ['-created_at']
    readonly_fields = ['download_count', 'created_at', 'updated_at']



