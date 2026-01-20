# 🎥 YouTube Integration - Complete Guide

## 🎯 What This Does

Your system has **full YouTube integration** where:

1. **Admins upload videos** → Automatically published to your YouTube channel
2. **Users watch on your site** → Views count on YouTube
3. **Everything syncs** → Video IDs, thumbnails, metadata all automatic

---

## ✅ Setup Status

Based on your screenshot, you're at step **"OAuth configuration created!"** in Google Cloud Console.

### Completed ✅
- [x] Backend YouTube upload code
- [x] Frontend YouTube embed player
- [x] Database models for videos
- [x] Admin panel with upload form
- [x] Google Cloud project created
- [x] OAuth credentials created

### To Complete ⏳
- [ ] Download OAuth credentials (Client ID & Secret)
- [ ] Add credentials to environment
- [ ] Run first-time authentication
- [ ] Test upload

---

## 🚀 Complete Setup (3 Steps)

### Step 1: Get Your Credentials

You're currently in Google Cloud Console. Do this now:

1. Look for **"OAuth 2.0 Client IDs"** section on the page
2. Find your client (probably called "Apologetics Rwanda Desktop" or similar)
3. Click the **download icon (⬇️)** OR click the client name
4. Copy these two values:

```
Client ID: 123456789-abc123def456.apps.googleusercontent.com
Client Secret: GOCSPX-AbCdEfGhIjKl12345678
```

**⚠️ Save these somewhere safe! You'll need them.**

---

### Step 2: Add Credentials to Your Local Environment

Open your terminal and run:

```bash
cd /Users/eduin.muisha/Projects/Inkuge/backend
source venv/bin/activate

# Set environment variables (replace with YOUR actual values)
export YOUTUBE_CLIENT_ID="paste-your-client-id-here"
export YOUTUBE_CLIENT_SECRET="paste-your-client-secret-here"
```

**Make it permanent (optional but recommended):**

Add to your `~/.zshrc` or `~/.bashrc`:

```bash
echo 'export YOUTUBE_CLIENT_ID="your-client-id"' >> ~/.zshrc
echo 'export YOUTUBE_CLIENT_SECRET="your-client-secret"' >> ~/.zshrc
source ~/.zshrc
```

---

### Step 3: Authorize Your YouTube Channel (ONE TIME!)

Run the authentication helper script:

```bash
cd /Users/eduin.muisha/Projects/Inkuge/backend
source venv/bin/activate
python youtube_auth_helper.py
```

**What will happen:**

1. Script starts and explains the process
2. Press ENTER to continue
3. **Browser window opens** to Google sign-in
4. **Sign in with your YouTube channel Google account**
5. You'll see "This app isn't verified" warning - **this is normal!**
6. Click **"Advanced"**
7. Click **"Go to [App Name] (unsafe)"**
8. Click **"Allow"** to grant permissions
9. Browser shows "The authentication flow has completed"
10. Terminal shows: **"✅ SUCCESS! Authentication completed!"**
11. File created: `youtube_token.pickle`

Done! Your system is now connected to your YouTube channel! 🎉

---

## 🎬 How to Use (Upload Videos)

### Method 1: Django Admin Panel (Recommended)

1. Start your backend server:
```bash
cd /Users/eduin.muisha/Projects/Inkuge/backend
source venv/bin/activate
python manage.py runserver
```

2. Go to: http://localhost:8000/admin/

3. Navigate to: **MEDIA & STREAMING** → **Video library** → **Add video**

4. Fill in the form:
```
Title: "Introduction to Christian Apologetics"
Slug: (auto-filled as: introduction-to-christian-apologetics)
Description: "Learn the basics of defending your faith..."
Category: TEACHING
Ministry: Apologetics
```

5. **Upload Video File:**
   - Click "Choose File"
   - Select your video (MP4, MOV, AVI, etc.)
   - Upload happens to your server temporarily

6. **YouTube Settings (Optional):**
   - YouTube Title: (leave blank to use title above)
   - YouTube Description: (leave blank to use description above)
   - Tags: `apologetics, christian, rwanda, faith, teaching`
   - Category: `Education` (27) or `Nonprofits & Activism` (29)
   - Privacy: `Public`

7. Click **"SAVE"**

8. **What happens automatically:**
   - ✅ Video uploads to YouTube
   - ✅ YouTube Video ID saved (e.g., `dQw4w9WgXcQ`)
   - ✅ YouTube URL saved (e.g., `https://www.youtube.com/watch?v=dQw4w9WgXcQ`)
   - ✅ Thumbnail URL saved (e.g., `https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg`)
   - ✅ Success message displayed
   - ✅ Video appears on your website
   - ✅ Video visible in YouTube Studio

---

## 📺 How Views Count on YouTube

### The Magic: YouTube Embeds

Your frontend uses YouTube's iframe player, which means **every view on your website counts as a YouTube view!**

Here's how it works:

### 1. Admin Uploads Video
```
Admin → Django Admin → Upload video.mp4
    ↓
Video uploads to YouTube
    ↓
YouTube returns: video_id = "dQw4w9WgXcQ"
    ↓
Saved in database
```

### 2. Frontend Displays Video
```typescript
// Your frontend fetches video data
const video = await fetch('/api/media/videos/1/')

// Returns:
{
  id: 1,
  title: "Introduction to Apologetics",
  youtube_video_id: "dQw4w9WgXcQ",
  youtube_url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  thumbnail_url: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg"
}
```

### 3. Video Embedded (Views Count!)
```tsx
// YouTube player component embeds the video
<iframe
  src={`https://www.youtube.com/embed/${video.youtube_video_id}`}
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
/>

// When user watches this → YouTube counts the view!
```

### 4. Result
- ✅ User watches video on apologeticsrwanda.org
- ✅ YouTube counts it as a view
- ✅ View appears in YouTube Analytics
- ✅ View appears in YouTube Studio
- ✅ Video can get recommended by YouTube
- ✅ Viewers can like, comment, share on YouTube

---

## 🎨 Using the New YouTube Player Component

I've created a reusable component for you at:
`frontend/src/components/ui/YouTubePlayer.tsx`

### Example 1: Video Thumbnail with Click-to-Play

```tsx
import YouTubePlayer from '@/components/ui/YouTubePlayer'

// In your component
<YouTubePlayer
  videoId="dQw4w9WgXcQ"
  title="Introduction to Apologetics"
  description="Learn the basics of defending your faith"
  durationSeconds={600}
  viewsCount={1234}
  publishedDate="2024-01-15"
/>
```

### Example 2: Auto-playing Inline Player

```tsx
<YouTubePlayer
  videoId="dQw4w9WgXcQ"
  title="Featured Video"
  autoplay
  className="mb-8"
/>
```

### Example 3: Modal Player

```tsx
import { YouTubeModal } from '@/components/ui/YouTubePlayer'

const [isOpen, setIsOpen] = useState(false)
const [selectedVideo, setSelectedVideo] = useState(null)

// Button to open modal
<button onClick={() => {
  setSelectedVideo(video)
  setIsOpen(true)
}}>
  Watch Video
</button>

// Modal
<YouTubeModal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  videoId={selectedVideo?.youtube_video_id}
  title={selectedVideo?.title}
  description={selectedVideo?.description}
  durationSeconds={selectedVideo?.duration_seconds}
  viewsCount={selectedVideo?.views_count}
  publishedDate={selectedVideo?.published_date}
/>
```

### Example 4: Video Grid

```tsx
const videos = await fetchVideos()

<div className="grid md:grid-cols-3 gap-6">
  {videos.map(video => (
    <YouTubePlayer
      key={video.id}
      videoId={video.youtube_video_id}
      title={video.title}
      thumbnailUrl={video.thumbnail_url}
      durationSeconds={video.duration_seconds}
      viewsCount={video.views_count}
      publishedDate={video.published_date}
    />
  ))}
</div>
```

---

## 📊 Tracking Views

### On YouTube (Automatic)

Views are automatically tracked by YouTube. Check:

1. **YouTube Studio**: https://studio.youtube.com
2. **Analytics** tab
3. See:
   - Total views
   - Watch time
   - Viewer demographics
   - Traffic sources (your website will appear!)
   - Revenue (if monetized)

### On Your Website (Optional)

You can also track views locally:

```python
# In your API view
from apps.media.models import VideoLibrary

video = VideoLibrary.objects.get(id=video_id)
video.increment_views()  # Increments views_count field
```

---

## 🌐 Deploying to Production

### Add Environment Variables to Render

1. Go to: https://dashboard.render.com
2. Click your **backend service**
3. Click **"Environment"** in the left sidebar
4. Click **"Add Environment Variable"**
5. Add:

```
Key: YOUTUBE_CLIENT_ID
Value: [paste your client ID]

Key: YOUTUBE_CLIENT_SECRET
Value: [paste your client secret]
```

6. Click **"Save Changes"**
7. Service will redeploy automatically

### Important: Authentication Token

⚠️ **The `youtube_token.pickle` file must be on production!**

**Problem:** Render free tier doesn't have persistent storage, so the token file gets deleted on redeploy.

**Solutions:**

**Option A: Re-authenticate after each deployment (Quick Fix)**
1. After each Render deployment, the token is lost
2. You'll need to manually re-authenticate
3. This works but is annoying

**Option B: Store token in database (Recommended)**
- Modify `youtube_upload.py` to store token in database instead of file
- Token persists across deployments
- Requires code changes

**Option C: Use environment variable for token (Advanced)**
- Base64 encode the pickle file
- Store as environment variable
- Decode at runtime
- More complex but works

**Option D: Upgrade Render plan**
- Paid plans have persistent disk storage
- Token file persists
- Most reliable solution

For now, **Option A** (re-authenticate after deploys) is simplest. Later, implement **Option B**.

---

## ✨ Features You Get

✅ **Admin uploads videos** - Simple file upload in admin panel  
✅ **Auto YouTube publishing** - Videos appear on your channel instantly  
✅ **YouTube view counting** - All views on your site count on YouTube  
✅ **YouTube analytics** - Full analytics in YouTube Studio  
✅ **SEO benefits** - Videos indexed by YouTube search  
✅ **Social sharing** - Easy to share YouTube links  
✅ **Comments & likes** - YouTube features work  
✅ **Mobile optimized** - YouTube player works everywhere  
✅ **No storage costs** - Videos hosted on YouTube  
✅ **CDN delivery** - Fast streaming worldwide  
✅ **Automatic thumbnails** - YouTube generates them  
✅ **Custom metadata** - Control titles, descriptions, tags  
✅ **Privacy control** - Public, unlisted, or private  
✅ **Playlists** - Organize videos by ministry/topic  

---

## 🎓 Best Practices

### 1. Optimize Video Titles

**Good:**
- "Introduction to Christian Apologetics | Ratio Christi Rwanda"
- "How to Defend Your Faith - Apologetics Training"
- "Street Kids Ministry Update - December 2024"

**Bad:**
- "Video 1"
- "Training"
- "untitled"

### 2. Write Detailed Descriptions

Include:
- Summary of content (2-3 paragraphs)
- Key topics covered
- Links to your website
- Ministry information
- Social media links
- Call to action
- Timestamps for longer videos

Example:
```
Join us for an introduction to Christian Apologetics where we explore 
how to defend your faith with reason and evidence.

In this session, we cover:
• What is apologetics?
• Why is it important for believers?
• Common questions and objections
• Resources for further study

🌐 Website: https://apologeticsrwanda.org
📧 Contact: info@apologeticsrwanda.org
📱 Follow us on social media

Ratio Christi Rwanda is a Christian apologetics ministry training 
believers to defend their faith on university campuses across Rwanda.

#Apologetics #ChristianApologetics #Rwanda #Faith #RatioChristi
```

### 3. Use Consistent Tags

Create a standard set of tags:

```python
# Base tags for all videos
base_tags = ["ratio christi", "rwanda", "christian", "apologetics", "faith"]

# Add ministry-specific tags
apologetics_tags = base_tags + ["apologetics training", "defend faith", "christian evidence"]
evangelism_tags = base_tags + ["evangelism", "gospel", "testimony", "outreach"]
leadership_tags = base_tags + ["leadership", "discipleship", "training", "mentorship"]
street_kids_tags = base_tags + ["street kids", "ministry", "compassion", "service"]
```

### 4. Choose the Right Category

- **Education (27)**: For teaching, training, courses
- **Nonprofits & Activism (29)**: For ministry, testimonies, mission work
- **People & Blogs (22)**: For general content, vlogs
- **Entertainment (24)**: For events, conferences

### 5. Set Appropriate Privacy

- **Public**: Most videos - discoverable on YouTube
- **Unlisted**: Internal training - only accessible via link
- **Private**: Draft videos - only you can see

### 6. Create Playlists

Organize videos by:
- Ministry (Apologetics, Evangelism, Leadership, Street Kids)
- Series (Apologetics 101, Leadership Training 2024)
- Event (Annual Conference 2024)
- Topic (Faith Q&A, Testimonies, Training Sessions)

### 7. Upload Schedule

- Consistent schedule (e.g., every Tuesday and Thursday)
- Batch upload but schedule releases
- YouTube rewards consistency with better recommendations

---

## 🐛 Troubleshooting

### "Authentication required" or "Token not found"

**Solution:** Run authentication again:
```bash
cd /Users/eduin.muisha/Projects/Inkuge/backend
source venv/bin/activate
python youtube_auth_helper.py
```

---

### "Invalid credentials" or "Client ID not found"

**Solution:** Check environment variables:
```bash
echo $YOUTUBE_CLIENT_ID
echo $YOUTUBE_CLIENT_SECRET
```

If empty, set them:
```bash
export YOUTUBE_CLIENT_ID="your-client-id"
export YOUTUBE_CLIENT_SECRET="your-client-secret"
```

---

### "Quota exceeded"

**Problem:** YouTube API has daily quotas (10,000 units/day for free tier)

**Costs:**
- 1 video upload = ~1,600 units
- You can upload ~6 videos per day

**Solutions:**
- Wait until next day (quota resets at midnight Pacific Time)
- Request quota increase in Google Cloud Console
- Upgrade to YouTube Partner Program

---

### Video uploads but doesn't appear on website

**Check:**
1. Is `is_published` set to `True`?
2. Is the video assigned to the correct ministry?
3. Does the frontend filter match the video category?

**Debug:**
```bash
# Check in Django shell
python manage.py shell

from apps.media.models import VideoLibrary
video = VideoLibrary.objects.latest('created_at')
print(f"ID: {video.id}")
print(f"Title: {video.title}")
print(f"YouTube ID: {video.youtube_video_id}")
print(f"Published: {video.is_published}")
print(f"Ministry: {video.ministry}")
```

---

### Video shows on website but not on YouTube

**Check:**
1. Go to YouTube Studio: https://studio.youtube.com
2. Look in "Videos" section
3. Video might be processing (takes 1-5 minutes)
4. Check privacy status (private videos won't show publicly)

---

### "Upload failed" error in admin

**Check logs:**
```bash
# If running locally
# Check terminal where you ran `python manage.py runserver`

# On Render
# Dashboard → Your service → Logs
```

**Common causes:**
- Token expired (re-authenticate)
- Credentials incorrect (check env vars)
- File too large (YouTube limit: 256 GB or 12 hours)
- Network issues (retry)

---

## 📈 YouTube API Limits

### Daily Quota (Free Tier)
- **10,000 units per day**
- Resets at midnight Pacific Time

### Unit Costs
- Upload video: **1,600 units**
- Update video: **50 units**
- List videos: **1 unit**
- Get video: **1 unit**

### Practical Limits
- ~6 video uploads per day
- ~200 video updates per day
- 10,000 list/get requests per day

### Requesting More Quota
1. Go to Google Cloud Console
2. APIs & Services → YouTube Data API v3
3. Quotas
4. Request quota increase
5. Fill out form explaining usage
6. Usually approved within 1-2 days

---

## 🎉 You're All Set!

Once you complete the 3 setup steps, you'll have a fully functional YouTube integration:

1. ✅ Admins upload videos through your admin panel
2. ✅ Videos automatically publish to YouTube
3. ✅ Users watch on your website
4. ✅ Views count on YouTube
5. ✅ Full analytics in YouTube Studio

---

## 📚 Quick Reference

### Key Files

**Backend:**
- `backend/apps/media/youtube_upload.py` - Upload service
- `backend/apps/media/admin.py` - Admin forms
- `backend/apps/media/models.py` - Video models
- `backend/youtube_auth_helper.py` - Authentication script
- `backend/youtube_token.pickle` - OAuth token (generated)

**Frontend:**
- `frontend/src/components/ui/YouTubePlayer.tsx` - Player component
- `frontend/src/types/index.ts` - Video types
- `frontend/src/app/ministries/*/videos/page.tsx` - Video pages

### Important URLs

- **Django Admin**: http://localhost:8000/admin/
- **YouTube Studio**: https://studio.youtube.com
- **Google Cloud Console**: https://console.cloud.google.com
- **Render Dashboard**: https://dashboard.render.com

### Environment Variables

```bash
YOUTUBE_CLIENT_ID=your-client-id.apps.googleusercontent.com
YOUTUBE_CLIENT_SECRET=GOCSPX-your-secret-key
```

### Useful Commands

```bash
# Start backend
cd /Users/eduin.muisha/Projects/Inkuge/backend
source venv/bin/activate
python manage.py runserver

# Authenticate YouTube
python youtube_auth_helper.py

# Check videos in database
python manage.py shell
>>> from apps.media.models import VideoLibrary
>>> VideoLibrary.objects.all()

# Start frontend
cd /Users/eduin.muisha/Projects/Inkuge/frontend
npm run dev
```

---

**Need more help?** Check:
- `YOUTUBE_SETUP_QUICK.md` - Quick setup guide
- `YOUTUBE_UPLOAD_SETUP.md` - Detailed setup guide
- YouTube API Docs: https://developers.google.com/youtube/v3

**Happy uploading!** 🚀📹🎉

