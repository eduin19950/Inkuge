"""
YouTube Upload Service
Handles uploading videos directly to YouTube from Django admin.
"""

import os
import pickle
from google.auth.transport.requests import Request
from google_auth_oauthlib.flow import InstalledAppFlow
from googleapiclient.discovery import build
from googleapiclient.http import MediaFileUpload
from django.conf import settings


# OAuth 2.0 scopes for YouTube upload
SCOPES = ['https://www.googleapis.com/auth/youtube.upload']


class YouTubeUploader:
    """Service class for uploading videos to YouTube."""
    
    def __init__(self):
        self.youtube = None
        self.credentials = None
    
    def authenticate(self):
        """Authenticate with YouTube API using OAuth 2.0."""
        token_path = os.path.join(settings.BASE_DIR, 'youtube_token.pickle')
        client_secrets_path = os.path.join(settings.BASE_DIR, 'client_secrets.json')
        
        # Load existing credentials
        if os.path.exists(token_path):
            with open(token_path, 'rb') as token:
                self.credentials = pickle.load(token)
        
        # Refresh or get new credentials
        if not self.credentials or not self.credentials.valid:
            if self.credentials and self.credentials.expired and self.credentials.refresh_token:
                self.credentials.refresh(Request())
            else:
                # Try to load from client_secrets.json file first
                if os.path.exists(client_secrets_path):
                    flow = InstalledAppFlow.from_client_secrets_file(client_secrets_path, SCOPES)
                    self.credentials = flow.run_local_server(port=8080)
                else:
                    # Fallback to environment variables
                    client_config = {
                        "installed": {
                            "client_id": settings.YOUTUBE_CLIENT_ID,
                            "client_secret": settings.YOUTUBE_CLIENT_SECRET,
                            "auth_uri": "https://accounts.google.com/o/oauth2/auth",
                            "token_uri": "https://oauth2.googleapis.com/token",
                            "redirect_uris": ["http://localhost:8080"]
                        }
                    }
                    
                    flow = InstalledAppFlow.from_client_config(client_config, SCOPES)
                    self.credentials = flow.run_local_server(port=8080)
            
            # Save credentials for future use
            with open(token_path, 'wb') as token:
                pickle.dump(self.credentials, token)
        
        # Build YouTube service
        self.youtube = build('youtube', 'v3', credentials=self.credentials)
    
    def upload_video(self, video_file_path, title, description="", 
                     tags=None, category_id="22", privacy_status="public"):
        """
        Upload a video to YouTube.
        
        Args:
            video_file_path: Path to the video file
            title: Video title
            description: Video description
            tags: List of tags
            category_id: YouTube category ID (default: 22 = People & Blogs)
            privacy_status: 'public', 'private', or 'unlisted'
        
        Returns:
            dict: Response with video_id, url, and other details
        """
        if not self.youtube:
            self.authenticate()
        
        if tags is None:
            tags = []
        
        # Prepare video metadata
        body = {
            'snippet': {
                'title': title,
                'description': description,
                'tags': tags,
                'categoryId': category_id
            },
            'status': {
                'privacyStatus': privacy_status,
                'selfDeclaredMadeForKids': False
            }
        }
        
        # Create media file upload object
        media = MediaFileUpload(
            video_file_path,
            chunksize=-1,
            resumable=True,
            mimetype='video/*'
        )
        
        # Execute upload request
        request = self.youtube.videos().insert(
            part=','.join(body.keys()),
            body=body,
            media_body=media
        )
        
        response = None
        while response is None:
            status, response = request.next_chunk()
            if status:
                progress = int(status.progress() * 100)
                print(f"Upload progress: {progress}%")
        
        # Extract video details
        video_id = response['id']
        video_url = f"https://www.youtube.com/watch?v={video_id}"
        thumbnail_url = f"https://img.youtube.com/vi/{video_id}/maxresdefault.jpg"
        
        return {
            'video_id': video_id,
            'video_url': video_url,
            'thumbnail_url': thumbnail_url,
            'title': title,
            'status': 'uploaded'
        }
    
    def update_video_thumbnail(self, video_id, thumbnail_path):
        """Upload a custom thumbnail for a video."""
        if not self.youtube:
            self.authenticate()
        
        self.youtube.thumbnails().set(
            videoId=video_id,
            media_body=MediaFileUpload(thumbnail_path)
        ).execute()
    
    def get_video_categories(self):
        """Get list of available YouTube video categories."""
        if not self.youtube:
            self.authenticate()
        
        request = self.youtube.videoCategories().list(
            part='snippet',
            regionCode='US'
        )
        response = request.execute()
        
        categories = {}
        for item in response.get('items', []):
            categories[item['id']] = item['snippet']['title']
        
        return categories


def upload_video_to_youtube(video_file, title, description="", tags=None, 
                            category_id="22", privacy_status="public"):
    """
    Convenience function to upload video to YouTube.
    
    Args:
        video_file: Django UploadedFile object or file path
        title: Video title
        description: Video description
        tags: List of tags
        category_id: YouTube category ID
        privacy_status: 'public', 'private', or 'unlisted'
    
    Returns:
        dict: Response with video details
    """
    uploader = YouTubeUploader()
    
    # Handle Django UploadedFile
    if hasattr(video_file, 'temporary_file_path'):
        file_path = video_file.temporary_file_path()
    elif hasattr(video_file, 'read'):
        # Save to temporary file
        import tempfile
        temp_file = tempfile.NamedTemporaryFile(delete=False, suffix='.mp4')
        for chunk in video_file.chunks():
            temp_file.write(chunk)
        temp_file.close()
        file_path = temp_file.name
    else:
        file_path = video_file
    
    try:
        result = uploader.upload_video(
            video_file_path=file_path,
            title=title,
            description=description,
            tags=tags,
            category_id=category_id,
            privacy_status=privacy_status
        )
        return result
    finally:
        # Clean up temporary file if created
        if hasattr(video_file, 'read') and os.path.exists(file_path):
            os.unlink(file_path)


# YouTube category IDs for reference
YOUTUBE_CATEGORIES = {
    '1': 'Film & Animation',
    '2': 'Autos & Vehicles',
    '10': 'Music',
    '15': 'Pets & Animals',
    '17': 'Sports',
    '19': 'Travel & Events',
    '20': 'Gaming',
    '22': 'People & Blogs',
    '23': 'Comedy',
    '24': 'Entertainment',
    '25': 'News & Politics',
    '26': 'Howto & Style',
    '27': 'Education',
    '28': 'Science & Technology',
    '29': 'Nonprofits & Activism'
}

