# Deployment Guide

This guide covers deploying the Ratio Christi Rwanda platform to Render.

## Prerequisites

1. GitHub account with the repository
2. Render account (free tier available)
3. Supabase account (for database and storage)

## Supabase Setup (Database & Storage)

### 1. Create Supabase Project

1. Go to [supabase.com](https://supabase.com)
2. Create a new project
3. Choose a strong database password
4. Wait for provisioning to complete

### 2. Configure Storage

1. Navigate to Storage in the dashboard
2. Create a bucket named `inkuge-media`
3. Set bucket to public or configure RLS policies

### 3. Get Credentials

1. Go to Project Settings → API
2. Copy:
   - Project URL
   - anon/public key
   - service_role key (for backend only, keep secret)
3. Go to Project Settings → Database
4. Copy the PostgreSQL connection string

## Backend Deployment (Render)

### 1. Prepare Repository

Ensure these files are in your repository:
- `backend/requirements.txt`
- `backend/render.yaml`
- All backend code

### 2. Create Web Service on Render

1. Go to [render.com](https://render.com) and sign in
2. Click "New +" → "Web Service"
3. Connect your GitHub repository
4. Configure:
   - **Name**: `inkuge-backend`
   - **Region**: Choose closest to your users
   - **Branch**: `main` (or your default branch)
   - **Root Directory**: `backend`
   - **Environment**: `Python 3`
   - **Build Command**: 
     ```bash
     pip install -r requirements.txt && python manage.py collectstatic --no-input && python manage.py migrate --no-input
     ```
   - **Start Command**: 
     ```bash
     gunicorn config.wsgi:application
     ```

### 3. Add Environment Variables

In Render dashboard, add these environment variables:

```env
DJANGO_SECRET_KEY=<generate-strong-key>
DEBUG=False
ALLOWED_HOSTS=inkuge-backend.onrender.com,yourdomain.com
DATABASE_URL=<your-supabase-postgresql-connection-string>
SUPABASE_URL=<your-supabase-project-url>
SUPABASE_KEY=<your-supabase-service-role-key>
SUPABASE_BUCKET=inkuge-media
YOUTUBE_API_KEY=<your-youtube-api-key>
YOUTUBE_CHANNEL_ID=<your-channel-id>
JITSI_APP_ID=<your-jitsi-app-id>
JITSI_DOMAIN=meet.jit.si
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USE_TLS=True
EMAIL_HOST_USER=<your-email>
EMAIL_HOST_PASSWORD=<your-email-password>
DEFAULT_FROM_EMAIL=noreply@ratiochristi.rw
CORS_ALLOWED_ORIGINS=https://yourdomain.com,https://inkuge-frontend.onrender.com
```

### 4. Deploy

1. Click "Create Web Service"
2. Wait for deployment to complete
3. Note your backend URL (e.g., `https://inkuge-backend.onrender.com`)

### 5. Create Superuser

After deployment, use Render Shell:

1. Go to your service dashboard
2. Click "Shell" tab
3. Run:
   ```bash
   python manage.py createsuperuser
   ```

## Frontend Deployment (Render)

### 1. Create Web Service

1. Click "New +" → "Web Service"
2. Connect your GitHub repository
3. Configure:
   - **Name**: `inkuge-frontend`
   - **Region**: Same as backend
   - **Branch**: `main`
   - **Root Directory**: `frontend`
   - **Environment**: `Node`
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm run start`

### 2. Add Environment Variables

```env
NEXT_PUBLIC_API_URL=https://inkuge-backend.onrender.com/api
NEXT_PUBLIC_SUPABASE_URL=<your-supabase-project-url>
NEXT_PUBLIC_SUPABASE_ANON_KEY=<your-supabase-anon-key>
NEXT_PUBLIC_JITSI_DOMAIN=meet.jit.si
```

### 3. Deploy

1. Click "Create Web Service"
2. Wait for deployment
3. Access your site at the provided URL

## Custom Domain Setup

### For Backend

1. In Render dashboard, go to your backend service
2. Click "Settings" → "Custom Domains"
3. Add your domain (e.g., `api.ratiochristi.rw`)
4. Configure DNS:
   - Add CNAME record: `api` → `inkuge-backend.onrender.com`

### For Frontend

1. In Render dashboard, go to your frontend service
2. Click "Settings" → "Custom Domains"
3. Add your domain (e.g., `ratiochristi.rw`)
4. Configure DNS:
   - Add CNAME record: `www` → `inkuge-frontend.onrender.com`
   - Add A record: `@` → Render's IP (provided in dashboard)

## Post-Deployment Steps

### 1. Update CORS Settings

Update backend environment variable:
```env
CORS_ALLOWED_ORIGINS=https://ratiochristi.rw,https://www.ratiochristi.rw
```

### 2. Update Allowed Hosts

```env
ALLOWED_HOSTS=api.ratiochristi.rw,ratiochristi.rw
```

### 3. Test the Application

1. Visit your frontend URL
2. Test user registration
3. Test API endpoints
4. Upload a test image to verify Supabase storage
5. Create test events and courses

### 4. Load Initial Data

1. Access Django admin: `https://api.ratiochristi.rw/admin`
2. Create the four ministries
3. Add initial content

## Monitoring and Maintenance

### Render

- Check logs in the Render dashboard
- Monitor resource usage
- Set up auto-deploy on GitHub push

### Supabase

- Monitor database size
- Check storage usage
- Review API usage

### Backups

Render provides automatic backups, but also:

1. Backup Supabase database regularly
2. Export important data periodically
3. Keep a copy of media files

## Troubleshooting

### Build Failures

1. Check logs in Render dashboard
2. Verify all dependencies are in requirements.txt
3. Ensure environment variables are set

### Database Connection Issues

1. Verify DATABASE_URL is correct
2. Check Supabase PostgreSQL is accessible
3. Review connection pooling settings

### CORS Errors

1. Update CORS_ALLOWED_ORIGINS
2. Restart backend service
3. Clear browser cache

### Static Files Not Loading

1. Run `python manage.py collectstatic` during build
2. Check WhiteNoise configuration
3. Verify STATIC_ROOT setting

## Scaling

### Free Tier Limitations

- Backend: Auto-sleeps after inactivity
- Database: Limited to Supabase free tier
- Storage: Limited storage space

### Upgrading

Consider upgrading when:
- Traffic increases significantly
- Need faster response times
- Require more storage
- Want to remove sleep on inactivity

## Security Checklist

- [ ] DEBUG=False in production
- [ ] Strong DJANGO_SECRET_KEY
- [ ] Secure database password
- [ ] HTTPS enabled (automatic on Render)
- [ ] Environment variables secured
- [ ] Regular security updates
- [ ] Backup strategy in place

## Support

For deployment issues:
- Check Render documentation
- Review Supabase docs
- Check application logs
- Contact support if needed

---

**Note**: Keep your credentials secure and never commit them to version control!



