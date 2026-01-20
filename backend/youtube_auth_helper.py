#!/usr/bin/env python
"""
YouTube Authentication Helper Script
Run this once to authorize your YouTube channel.
"""

import os
import sys
import django

# Setup Django
sys.path.insert(0, os.path.dirname(__file__))
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings')
django.setup()

from apps.media.youtube_upload import YouTubeUploader

def main():
    print("=" * 60)
    print("🎥 YouTube Channel Authentication")
    print("=" * 60)
    print()
    print("This will open a browser window to authorize your YouTube channel.")
    print("Follow these steps:")
    print("1. Sign in with your YouTube channel Google account")
    print("2. Click 'Continue' (ignore 'app not verified' warning)")
    print("3. Click 'Advanced' → 'Go to [App Name] (unsafe)'")
    print("4. Click 'Allow' to grant permissions")
    print()
    input("Press ENTER to continue...")
    print()
    
    try:
        print("🔄 Starting authentication...")
        print("📝 Note: Using port 8080 for OAuth callback")
        print()
        uploader = YouTubeUploader()
        uploader.authenticate()
        print()
        print("✅ SUCCESS! Authentication completed!")
        print("✅ Token saved to: youtube_token.pickle")
        print()
        print("You can now upload videos through your admin panel!")
        print("=" * 60)
        
    except Exception as e:
        print()
        print(f"❌ ERROR: {str(e)}")
        print()
        print("Make sure you have set:")
        print("  - YOUTUBE_CLIENT_ID")
        print("  - YOUTUBE_CLIENT_SECRET")
        print()
        sys.exit(1)

if __name__ == '__main__':
    main()

