# 🚀 YouTube Setup - DO THIS NOW!

You're currently on the Google Cloud Console with OAuth credentials created. Here's exactly what to do next:

---

## ✅ Step 1: Get Your Credentials (IN GOOGLE CLOUD RIGHT NOW)

You should see a screen with **"OAuth 2.0 Client IDs"** section.

### Do this:

1. Look for your OAuth client (probably named something like "Apologetics Rwanda Desktop")
2. On the right side, click the **download icon (⬇️)** 
   OR click the client name to view details
3. You'll see two values - **COPY BOTH:**

```
Client ID: Something like → 123456789-abc123def456.apps.googleusercontent.com
Client Secret: Something like → GOCSPX-AbCdEfGhIjKlMnOp
```

📝 **Paste them in a note/file temporarily - you'll need them in the next step!**

---

## ✅ Step 2: Add to Your Computer (IN YOUR TERMINAL)

Open Terminal and run these commands:

```bash
# Navigate to project
cd /Users/eduin.muisha/Projects/Inkuge/backend

# Activate virtual environment
source venv/bin/activate

# Set environment variables (REPLACE WITH YOUR ACTUAL VALUES!)
export YOUTUBE_CLIENT_ID="paste-your-actual-client-id-here"
export YOUTUBE_CLIENT_SECRET="paste-your-actual-secret-here"
```

**Example** (with fake values - use YOUR real ones):
```bash
export YOUTUBE_CLIENT_ID="123456789-abc123.apps.googleusercontent.com"
export YOUTUBE_CLIENT_SECRET="GOCSPX-AbCdEfGhIjKl12345"
```

---

## ✅ Step 3: Connect Your YouTube Channel (ONE TIME ONLY)

Still in the terminal, run:

```bash
python youtube_auth_helper.py
```

### What happens:

1. **Press ENTER** when prompted
2. **Browser opens** to Google sign-in
3. **Sign in** with your YouTube channel Google account
4. **Warning appears**: "This app isn't verified" - **THIS IS NORMAL!**
5. Click **"Advanced"**
6. Click **"Go to [App Name] (unsafe)"** - **THIS IS SAFE, it's YOUR app!**
7. Click **"Allow"**
8. Browser says: "The authentication flow has completed"
9. Terminal says: **"✅ SUCCESS! Authentication completed!"**

**DONE!** Your system is now connected to YouTube! 🎉

---

## ✅ Step 4: Test It! (UPLOAD A VIDEO)

### Start your backend:

```bash
# In terminal (backend folder)
python manage.py runserver
```

### Open admin panel:

Go to: http://localhost:8000/admin/

**Login** (if you don't have admin account, create one):
```bash
# In another terminal
cd /Users/eduin.muisha/Projects/Inkuge/backend
source venv/bin/activate
python manage.py createsuperuser
```

### Upload a test video:

1. In admin: **MEDIA & STREAMING** → **Video library** → **Add video**
2. Fill in:
   - Title: `Test Video`
   - Slug: (auto-fills)
   - Category: Choose any
   - Ministry: Choose any
3. **Upload Video File**: Choose a small video file (even 10 seconds is fine for testing)
4. **YouTube Settings** (optional):
   - Tags: `test, rwanda`
   - Category: `Education`
   - Privacy: `Unlisted` (for testing - won't show publicly)
5. Click **"SAVE"**

### Check if it worked:

**In admin panel:**
- You should see the video
- Should have a YouTube Video ID filled in
- Should have YouTube URL filled in

**On YouTube:**
- Go to: https://studio.youtube.com
- Click **"Content"** in left menu
- Your test video should be there! 🎉

---

## 🎉 Success!

If you see your video in YouTube Studio, **you're all set!**

Now you can:
- Upload videos through the admin panel
- They automatically go to YouTube
- When users watch on your website, YouTube counts the views

---

## 📚 Next Steps (After Basic Setup Works)

1. **Deploy to Production:**
   - Add the same credentials to Render (environment variables)
   - See: `YOUTUBE_INTEGRATION_COMPLETE.md` for details

2. **Update Frontend:**
   - Use the new `YouTubePlayer` component
   - Location: `frontend/src/components/ui/YouTubePlayer.tsx`
   - See examples in: `YOUTUBE_INTEGRATION_COMPLETE.md`

3. **Optimize:**
   - Create playlists
   - Use consistent tags
   - Upload on a schedule
   - Add custom thumbnails

---

## ❓ Something Not Working?

### "Command not found: python"

Try:
```bash
python3 youtube_auth_helper.py
```

---

### "Module not found: google"

Install dependencies:
```bash
pip install -r requirements.txt
```

---

### "Cannot open browser"

Make sure you're running this on your local computer (not on a server).

---

### "Invalid client ID or secret"

Double-check you copied them correctly from Google Cloud Console. They should be:
- Client ID: ends with `.apps.googleusercontent.com`
- Client Secret: starts with `GOCSPX-`

---

### Need more help?

See these guides:
- **Quick Guide**: `YOUTUBE_SETUP_QUICK.md`
- **Complete Guide**: `YOUTUBE_INTEGRATION_COMPLETE.md`
- **Detailed Setup**: `YOUTUBE_UPLOAD_SETUP.md`

---

## 🎯 Your Current Task

**RIGHT NOW:** Go back to Google Cloud Console and get those credentials (Step 1)!

Then come back here and follow Steps 2, 3, and 4.

**You're almost done!** 🚀

