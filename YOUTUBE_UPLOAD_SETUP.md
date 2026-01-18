# YouTube Auto-Upload Setup Guide

## 🎥 Overview

Your admin panel can now upload videos directly to YouTube! Just upload a video file, and it automatically goes to your YouTube channel.

---

## 📋 Prerequisites

1. A YouTube channel
2. A Google Cloud account (free)
3. 10-15 minutes for setup

---

## 🚀 Step-by-Step Setup

### Step 1: Create Google Cloud Project

1. Go to **Google Cloud Console**: https://console.cloud.google.com/
2. Click **"Select a project"** → **"NEW PROJECT"**
3. Project name: `Apologetics Rwanda YouTube Upload`
4. Click **"CREATE"**

### Step 2: Enable YouTube Data API v3

1. In Google Cloud Console, click **"APIs & Services"** → **"Library"**
2. Search for: `YouTube Data API v3`
3. Click on it
4. Click **"ENABLE"**

### Step 3: Create OAuth 2.0 Credentials

1. Go to **"APIs & Services"** → **"Credentials"**
2. Click **"+ CREATE CREDENTIALS"** → **"OAuth client ID"**
3. If prompted, configure **"OAuth consent screen"** first:
   - User Type: **External**
   - App name: `Apologetics Rwanda Admin`
   - User support email: Your email
   - Developer contact: Your email
   - Click **"SAVE AND CONTINUE"**
   - Scopes: Click **"ADD OR REMOVE SCOPES"**
     - Search for: `YouTube Data API v3`
     - Select: `https://www.googleapis.com/auth/youtube.upload`
     - Click **"UPDATE"** → **"SAVE AND CONTINUE"**
   - Test users: Add your email
   - Click **"SAVE AND CONTINUE"**

4. Back to **"Create OAuth client ID"**:
   - Application type: **Desktop app**
   - Name: `Apologetics Rwanda Desktop`
   - Click **"CREATE"**

5. **Download credentials**:
   - You'll see a popup with Client ID and Client Secret
   - **COPY BOTH** - You'll need them!
   - Client ID: Looks like `123456789-abcdefg.apps.googleusercontent.com`
   - Client Secret: Looks like `GOCSPX-AbCdEfGhIjKlMnOpQrStUv`

### Step 4: Add Credentials to Render

1. Go to **Render Dashboard**: https://dashboard.render.com
2. Click on **`inkuge-backend`** service
3. Click **"Environment"** (left sidebar)
4. Click **"Add Environment Variable"**
5. Add these variables:

```
Key: YOUTUBE_CLIENT_ID
Value: [Paste your Client ID from Step 3]

Key: YOUTUBE_CLIENT_SECRET
Value: [Paste your Client Secret from Step 3]
```

6. Click **"Save Changes"**

### Step 5: First-Time Authorization (Important!)

**⚠️ You need to do this ONCE from your local computer:**

1. On your local machine, run:
```bash
cd /Users/eduin.muisha/Projects/Inkuge/backend
source venv/bin/activate
python manage.py shell
```

2. In the Python shell, paste this:
```python
from apps.media.youtube_upload import YouTubeUploader
uploader = YouTubeUploader()
uploader.authenticate()
```

3. A browser window will open
4. **Sign in with your YouTube channel Google account**
5. Click **"Continue"** (it will say the app is unverified - that's okay!)
6. Click **"Advanced"** → **"Go to Apologetics Rwanda Admin (unsafe)"**
7. Click **"Allow"** to grant permissions
8. You'll see "The authentication flow has completed"
9. Close the browser

10. Check if `youtube_token.pickle` was created:
```bash
ls backend/youtube_token.pickle
```

11. **Upload this token to Render**:
```bash
# You'll need to manually copy this file to Render's filesystem
# OR regenerate it on Render after first deployment
```

**Note**: On Render free tier, the token might not persist. You may need to re-authenticate periodically or upgrade to a paid plan.

---

## ✅ Testing

After deployment completes:

1. Go to: `https://api.apologeticsrwanda.org/admin/`
2. Navigate to: **MEDIA & STREAMING** → **Video library** → **Add video**
3. You'll see:
   - **Upload Video File** - Browse and select a video
   - **YouTube Settings** - Customize title, description, tags
   - **Privacy Status** - Public/Unlisted/Private
4. Click **"SAVE"**
5. The video uploads to YouTube! ✨

---

## 🎬 How to Use

### Upload a Video

1. **Basic Info**:
   - Title: `Introduction to Christian Apologetics`
   - Description: `Learn the basics of defending your faith`
   - Category: Select ministry
   - Slug: (auto-filled)

2. **Upload Video**:
   - Click "Choose File"
   - Select your video (MP4, AVI, MOV, etc.)
   - File uploads to server

3. **YouTube Settings** (optional):
   - YouTube Title: (Leave blank to use title above)
   - YouTube Description: (Leave blank to use description above)
   - Tags: `apologetics, christian, rwanda, faith`
   - Category: `Education` or `Nonprofits & Activism`
   - Privacy: `Public`

4. **Custom Thumbnail** (optional):
   - Upload a custom thumbnail image
   - Or leave blank - YouTube generates one

5. Click **"SAVE"**

6. **What happens**:
   - ✅ Video uploads to your YouTube channel
   - ✅ YouTube Video ID saved automatically
   - ✅ Thumbnail URL saved
   - ✅ Video appears on your website
   - ✅ Success message shown

---

## 📊 YouTube Categories

Choose the appropriate category for your videos:

- **22**: People & Blogs (default)
- **27**: Education (recommended for teaching)
- **29**: Nonprofits & Activism (recommended for ministry)
- **24**: Entertainment
- **1**: Film & Animation
- **10**: Music
- **28**: Science & Technology

---

## ⚙️ Environment Variables Summary

Add these to Render:

```bash
YOUTUBE_CLIENT_ID=your-client-id.apps.googleusercontent.com
YOUTUBE_CLIENT_SECRET=GOCSPX-your-secret-key
```

---

## 🔒 Security Notes

1. **Never commit credentials** to Git
2. **Use environment variables** for all secrets
3. **Token file** (`youtube_token.pickle`) contains OAuth tokens - keep it secure
4. **Regenerate credentials** if compromised

---

## 🐛 Troubleshooting

### "Authentication required"
- Run the authentication flow (Step 5)
- Make sure credentials are correct in Render

### "Quota exceeded"
- YouTube API has daily quotas
- Free tier: 10,000 units/day
- 1 video upload = ~1,600 units
- You can upload ~6 videos/day

### "Invalid credentials"
- Check Client ID and Secret are correct
- Make sure you copied them completely
- Regenerate if needed

### "Token expired"
- Re-run authentication (Step 5)
- Or delete `youtube_token.pickle` and re-authenticate

### Video uploads but doesn't appear
- Check YouTube Studio: https://studio.youtube.com
- Video might be processing
- Check privacy status (Public/Unlisted/Private)

---

## 📈 Features

✅ **Direct upload** from admin panel  
✅ **Automatic YouTube publishing**  
✅ **Custom metadata** (title, description, tags)  
✅ **Privacy control** (public/unlisted/private)  
✅ **Category selection**  
✅ **Custom thumbnails**  
✅ **Progress indication**  
✅ **Error handling**  
✅ **No manual YouTube ID entry**  

---

## 🎉 Success!

Once set up, uploading videos is as simple as:
1. Click "Add video"
2. Upload file
3. Click "Save"
4. Done! Video is on YouTube and your website!

No more manual YouTube uploads and ID copying! 🚀

---

## 📞 Need Help?

If you encounter issues:
1. Check Render logs for errors
2. Verify credentials are correct
3. Ensure YouTube API is enabled
4. Check API quotas in Google Cloud Console


