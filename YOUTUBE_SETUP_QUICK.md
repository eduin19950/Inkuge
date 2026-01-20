# 🎥 YouTube Integration - Quick Setup Guide

## ✅ What You Have

Your system is ready! When admins upload videos, they automatically go to YouTube, and when users watch videos on your website, YouTube counts the views.

## 🚀 Complete These 3 Steps

### Step 1: Get Your OAuth Credentials from Google Cloud

You're currently in the Google Cloud Console. Do this:

1. In the **"OAuth 2.0 Client IDs"** section, find your client
2. Click the **download icon (⬇️)** OR click the client name
3. **Copy these two values:**
   - **Client ID**: `123456789-abc123.apps.googleusercontent.com`
   - **Client Secret**: `GOCSPX-AbCdEfGhIjKl`

### Step 2: Add Credentials Locally

Open your terminal and run:

```bash
cd /Users/eduin.muisha/Projects/Inkuge/backend

# Set environment variables (replace with your actual values)
export YOUTUBE_CLIENT_ID="your-client-id.apps.googleusercontent.com"
export YOUTUBE_CLIENT_SECRET="GOCSPX-your-secret-key"
```

### Step 3: Authorize Your YouTube Channel (ONE TIME ONLY)

Run this command:

```bash
# Make sure virtual environment is activated
source venv/bin/activate

# Run the authentication helper
python youtube_auth_helper.py
```

**What will happen:**
1. A browser window will open
2. Sign in with your **YouTube channel Google account**
3. Click **"Continue"** (ignore "unverified app" warning)
4. Click **"Advanced"** → **"Go to [App Name] (unsafe)"**
5. Click **"Allow"**
6. You'll see "✅ SUCCESS! Authentication completed!"

That's it! Your system is now connected to YouTube! 🎉

---

## 🎬 How to Upload Videos (After Setup)

1. Go to your admin panel: `http://localhost:8000/admin/`
2. Navigate to: **MEDIA & STREAMING** → **Video library** → **Add video**
3. Fill in:
   - **Title**: "Introduction to Apologetics"
   - **Description**: Your video description
   - **Upload Video File**: Select your video (MP4, MOV, etc.)
4. **Optional YouTube Settings:**
   - Tags: `apologetics, christian, rwanda`
   - Category: `Education` or `Nonprofits & Activism`
   - Privacy: `Public`
5. Click **"SAVE"**

**What happens automatically:**
- ✅ Video uploads to your YouTube channel
- ✅ YouTube Video ID is saved
- ✅ Thumbnail URL is saved
- ✅ Video appears on your website

---

## 📺 How View Counting Works

### The Magic: YouTube Embeds

When users watch videos on your website, you **embed the YouTube video** using the video ID. This means:

1. **Admin uploads video** → Goes to YouTube → Gets video ID (e.g., `dQw4w9WgXcQ`)
2. **Website displays video** → Uses YouTube embed player
3. **User watches video** → Counts as a YouTube view ✅

### Frontend Implementation

Your frontend should embed videos like this:

```tsx
// In your video player component
export default function VideoPlayer({ videoId }: { videoId: string }) {
  return (
    <div className="video-container">
      <iframe
        width="100%"
        height="500"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
```

### Example Usage

```tsx
// Get video from API
const video = await fetch('/api/media/videos/1/');
// video.youtube_video_id = "dQw4w9WgXcQ"

// Display it
<VideoPlayer videoId={video.youtube_video_id} />
```

### Why This Matters

✅ **YouTube counts views** - Every view on your site counts on YouTube  
✅ **YouTube analytics** - See all views in YouTube Studio  
✅ **YouTube features** - Comments, likes, shares all work  
✅ **No storage costs** - Videos hosted on YouTube  
✅ **CDN delivery** - Fast video streaming worldwide  
✅ **Mobile optimized** - Works perfectly on all devices  

---

## 🎯 Testing Your Setup

### Test 1: Upload a Test Video

1. Go to admin panel
2. Upload a short test video (e.g., 10 seconds)
3. Check if:
   - ✅ Video appears in YouTube Studio
   - ✅ Video ID is saved in database
   - ✅ Thumbnail URL is populated

### Test 2: View the Video

1. Get the video ID from admin panel
2. Open this URL in browser:
   ```
   https://www.youtube.com/watch?v=[VIDEO_ID]
   ```
3. Confirm video plays on YouTube

### Test 3: Embed on Website

1. Use the video ID in your frontend
2. Embed using iframe (see example above)
3. Watch the video on your site
4. Check YouTube Studio - view count should increase!

---

## 📊 Monitoring Views

### Check Views in Your Admin Panel

Your database tracks views with the `views_count` field. You can increment this when users view videos on your site:

```python
# In your API view
video = VideoLibrary.objects.get(id=video_id)
video.increment_views()  # Increments local counter
```

### Check Views on YouTube

1. Go to **YouTube Studio**: https://studio.youtube.com
2. Click **"Analytics"**
3. See:
   - Total views
   - Watch time
   - Viewer demographics
   - Traffic sources (your website will show up!)

---

## 🔧 Deploying to Production (Render)

### Add Environment Variables to Render

1. Go to: https://dashboard.render.com
2. Click your **backend service**
3. Click **"Environment"**
4. Add:
   ```
   YOUTUBE_CLIENT_ID = your-client-id.apps.googleusercontent.com
   YOUTUBE_CLIENT_SECRET = GOCSPX-your-secret-key
   ```
5. Click **"Save Changes"**

### Important: Token File

⚠️ **The `youtube_token.pickle` file must be on the server!**

**Option A: Re-authenticate on server (if possible)**
- SSH into Render
- Run authentication script
- Token saves automatically

**Option B: Upload token manually**
- Generate token locally (Step 3 above)
- Upload `youtube_token.pickle` to Render's filesystem
- Place in project root directory

**Option C: Use persistent storage (Recommended)**
- Render free tier doesn't have persistent storage
- Consider upgrading to paid plan
- Or re-authenticate periodically

---

## 💡 Pro Tips

### 1. Optimize Titles for Search
```
Good: "Introduction to Christian Apologetics | Ratio Christi Rwanda"
Bad: "Video 1"
```

### 2. Use Consistent Tags
```python
tags = [
    "apologetics",
    "christian apologetics",
    "rwanda",
    "ratio christi",
    "faith defense",
    ministry_name.lower()
]
```

### 3. Create Playlists
Organize videos by ministry or topic:
- Apologetics Training Series
- Evangelism Testimonies
- Leadership Development
- Street Kids Ministry

### 4. Custom Thumbnails
- Use eye-catching images
- Add text overlay
- Include your logo
- Keep it simple and readable

### 5. Video Descriptions
Include:
- Brief summary
- Links to your website
- Ministry information
- Call to action
- Timestamps for longer videos

---

## 🐛 Common Issues

### "Authentication required"
**Solution:** Run `python youtube_auth_helper.py` again

### "Invalid credentials"
**Solution:** Double-check Client ID and Secret are correct

### "Quota exceeded"
**Solution:** YouTube API free tier = 10,000 units/day (~6 video uploads)

### "Video uploaded but doesn't appear"
**Solution:** Check YouTube Studio - video might be processing (takes a few minutes)

### "Views not counting"
**Solution:** Make sure you're embedding YouTube iframe, not hosting video files

---

## 🎉 Success Checklist

- [ ] OAuth credentials obtained from Google Cloud
- [ ] Credentials added to environment variables
- [ ] Ran `python youtube_auth_helper.py` successfully
- [ ] `youtube_token.pickle` file created
- [ ] Uploaded test video through admin panel
- [ ] Video appears in YouTube Studio
- [ ] Video ID saved in database
- [ ] Can embed video on website
- [ ] Views count on YouTube when watched on website

---

## 📞 Need Help?

Check these resources:
1. Main setup guide: `YOUTUBE_UPLOAD_SETUP.md`
2. Backend logs: Check console output
3. Render logs: Dashboard → Service → Logs
4. YouTube Studio: https://studio.youtube.com
5. Google Cloud Console: https://console.cloud.google.com

Happy uploading! 🚀📹

