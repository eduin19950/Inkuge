"""
Supabase Storage Integration for file uploads.
"""

from django.conf import settings
from supabase import create_client, Client
import os


class SupabaseStorage:
    """Helper class for Supabase storage operations."""
    
    def __init__(self):
        self.supabase: Client = create_client(
            settings.SUPABASE_URL,
            settings.SUPABASE_KEY
        )
        self.bucket_name = settings.SUPABASE_BUCKET
    
    def upload_file(self, file_path: str, file_content: bytes, content_type: str = None) -> str:
        """
        Upload a file to Supabase storage.
        
        Args:
            file_path: Path where file will be stored in bucket
            file_content: File content as bytes
            content_type: MIME type of the file
            
        Returns:
            Public URL of the uploaded file
        """
        try:
            # Upload to Supabase storage
            response = self.supabase.storage.from_(self.bucket_name).upload(
                file_path,
                file_content,
                file_options={"content-type": content_type} if content_type else {}
            )
            
            # Get public URL
            public_url = self.supabase.storage.from_(self.bucket_name).get_public_url(file_path)
            return public_url
        
        except Exception as e:
            raise Exception(f"Failed to upload file to Supabase: {str(e)}")
    
    def delete_file(self, file_path: str) -> bool:
        """
        Delete a file from Supabase storage.
        
        Args:
            file_path: Path of file in bucket
            
        Returns:
            True if successful
        """
        try:
            self.supabase.storage.from_(self.bucket_name).remove([file_path])
            return True
        except Exception as e:
            print(f"Failed to delete file from Supabase: {str(e)}")
            return False
    
    def list_files(self, folder_path: str = "") -> list:
        """
        List files in a folder.
        
        Args:
            folder_path: Folder path in bucket
            
        Returns:
            List of files
        """
        try:
            files = self.supabase.storage.from_(self.bucket_name).list(folder_path)
            return files
        except Exception as e:
            print(f"Failed to list files from Supabase: {str(e)}")
            return []
    
    def get_public_url(self, file_path: str) -> str:
        """
        Get public URL for a file.
        
        Args:
            file_path: Path of file in bucket
            
        Returns:
            Public URL
        """
        return self.supabase.storage.from_(self.bucket_name).get_public_url(file_path)


def upload_to_supabase(file, folder: str = "uploads") -> str:
    """
    Convenience function to upload Django file to Supabase.
    
    Args:
        file: Django UploadedFile object
        folder: Folder name in bucket
        
    Returns:
        Public URL of uploaded file
    """
    from django.conf import settings
    
    # Check if Supabase is configured
    if not settings.SUPABASE_URL or not settings.SUPABASE_KEY:
        print("⚠️ WARNING: Supabase credentials not configured. Skipping file upload.")
        print("Please set SUPABASE_URL and SUPABASE_KEY in your environment variables.")
        return ""
    
    try:
        storage = SupabaseStorage()
        
        # Generate unique filename
        import uuid
        from datetime import datetime
        
        timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
        unique_id = str(uuid.uuid4())[:8]
        file_extension = os.path.splitext(file.name)[1]
        filename = f"{timestamp}_{unique_id}{file_extension}"
        
        file_path = f"{folder}/{filename}"
        
        # Upload file with timeout handling
        print(f"📤 Uploading {file.name} to Supabase ({file.size} bytes)...")
        public_url = storage.upload_file(
            file_path,
            file.read(),
            content_type=file.content_type
        )
        print(f"✅ Upload successful: {public_url}")
        
        return public_url
    except Exception as e:
        print(f"❌ Supabase upload failed: {str(e)}")
        print("The form will still save, but without the uploaded file.")
        return ""



