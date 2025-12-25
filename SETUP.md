# Ratio Christi Rwanda - Setup Guide

This guide will help you set up the Digital Ministry Platform locally for development.

## Prerequisites

- Python 3.11 or higher
- Node.js 18 or higher
- PostgreSQL (or Supabase account)
- Git

## Backend Setup

### 1. Navigate to backend directory

```bash
cd backend
```

### 2. Create and activate virtual environment

```bash
python -m venv venv

# On macOS/Linux:
source venv/bin/activate

# On Windows:
venv\Scripts\activate
```

### 3. Install dependencies

```bash
pip install -r requirements.txt
```

### 4. Create environment file

Create a `.env` file in the `backend` directory with the following content:

```env
# Django Settings
DJANGO_SECRET_KEY=your-secret-key-here
DEBUG=True
ALLOWED_HOSTS=localhost,127.0.0.1

# Database (use Supabase PostgreSQL or local)
DATABASE_URL=postgresql://user:password@host:5432/database

# Supabase Configuration
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_KEY=your-supabase-anon-key
SUPABASE_BUCKET=inkuge-media

# YouTube API
YOUTUBE_API_KEY=your-youtube-api-key
YOUTUBE_CHANNEL_ID=your-channel-id

# Jitsi Configuration
JITSI_APP_ID=your-jitsi-app-id
JITSI_DOMAIN=meet.jit.si

# Email Configuration
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USE_TLS=True
EMAIL_HOST_USER=your-email@gmail.com
EMAIL_HOST_PASSWORD=your-email-password
DEFAULT_FROM_EMAIL=noreply@ratiochristi.rw

# CORS Settings
CORS_ALLOWED_ORIGINS=http://localhost:3000,http://127.0.0.1:3000
```

### 5. Run migrations

```bash
python manage.py migrate
```

### 6. Create superuser

```bash
python manage.py createsuperuser
```

Follow the prompts to create an admin account.

### 7. Start development server

```bash
python manage.py runserver
```

The API will be available at `http://localhost:8000`

## Frontend Setup

### 1. Navigate to frontend directory

```bash
cd frontend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create environment file

Create a `.env.local` file in the `frontend` directory:

```env
NEXT_PUBLIC_API_URL=http://localhost:8000/api
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
NEXT_PUBLIC_JITSI_DOMAIN=meet.jit.si
```

### 4. Start development server

```bash
npm run dev
```

The frontend will be available at `http://localhost:3000`

## Supabase Setup

### 1. Create a Supabase project

1. Go to [supabase.com](https://supabase.com)
2. Create a new project
3. Wait for the database to be provisioned

### 2. Get your credentials

1. Go to Project Settings → API
2. Copy your Project URL (SUPABASE_URL)
3. Copy your anon/public key (SUPABASE_KEY)

### 3. Create storage bucket

1. Go to Storage in the Supabase dashboard
2. Create a new bucket named `inkuge-media`
3. Set it to public (or configure policies as needed)

### 4. Connect Django to Supabase PostgreSQL

1. Go to Project Settings → Database
2. Copy the connection string
3. Use it as your `DATABASE_URL` in the backend `.env` file

## Initial Data Setup

### 1. Create ministries

Log in to the Django admin at `http://localhost:8000/admin` and create the four main ministries:

- Campus & High School Evangelism (EVANGELISM)
- Christian Apologetics Hub (APOLOGETICS)
- Pastors Leadership Training (LEADERSHIP)
- Street Kids Ministry (STREET_KIDS)

### 2. Add sample content

Through the admin panel, you can add:

- Events (upcoming conferences, webinars)
- Courses (online classes)
- Certificate Programs
- Testimonies
- News articles
- Resources (PDFs, videos)

## API Documentation

Once the backend is running, you can access:

- Admin Panel: `http://localhost:8000/admin`
- API Root: `http://localhost:8000/api/`
- Available endpoints:
  - `/api/auth/` - Authentication
  - `/api/users/` - User management
  - `/api/ministries/` - Ministry content
  - `/api/events/` - Events and conferences
  - `/api/courses/` - Online courses
  - `/api/certificate-program/` - Certificate program
  - `/api/testimonies/` - Testimonies and stories
  - `/api/media/` - Video library

## Common Issues

### Database Connection Error

If you get a database connection error:
1. Ensure PostgreSQL is running (or Supabase credentials are correct)
2. Check your `DATABASE_URL` in `.env`
3. Run migrations again: `python manage.py migrate`

### CORS Errors

If the frontend can't connect to the API:
1. Check `CORS_ALLOWED_ORIGINS` in backend `.env`
2. Ensure it includes your frontend URL

### Module Not Found

If you get import errors:
1. Ensure virtual environment is activated (backend)
2. Reinstall dependencies: `pip install -r requirements.txt` or `npm install`

## Next Steps

1. **Configure YouTube**: Set up YouTube API credentials for video integration
2. **Configure Email**: Set up SMTP for notifications
3. **Add Content**: Populate the platform with courses, events, and resources
4. **Customize**: Modify colors, logos, and branding in the frontend
5. **Deploy**: Follow deployment instructions in README.md

## Getting Help

- Check the main README.md for project overview
- Review Django and Next.js documentation
- Check GitHub issues for common problems

## Development Tips

- Use Django Debug Toolbar for backend debugging (already configured)
- Use React DevTools for frontend debugging
- Check browser console for frontend errors
- Check terminal output for backend errors
- Use `python manage.py shell` for Django interactive shell
- Use `python manage.py dbshell` for direct database access

Happy coding! 🚀



