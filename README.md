# Ratio Christi Rwanda - Digital Ministry Platform

A comprehensive digital platform for evangelism, Christian apologetics, pastoral training, and youth outreach.

## 🌟 Features

- **Campus & High School Evangelism**: Live conferences, online classes, Q&A sessions
- **Christian Apologetics Hub**: Training resources, seminars, discussion forums
- **Pastors Leadership Training**: Development courses, mentorship sessions
- **Street Kids Ministry**: Testimonies, impact stories, donation management
- **6-Month Certificate Program**: Structured apologetics & discipleship training

## 🛠️ Tech Stack

### Backend
- Python 3.11+
- Django 5.0
- Django REST Framework
- Supabase (PostgreSQL + Storage)

### Frontend
- TypeScript
- Next.js 14
- React 18
- Tailwind CSS

### Integrations
- YouTube Live API
- Jitsi Meet
- Supabase Storage

### Hosting
- Render (Backend & Frontend)

## 📁 Project Structure

```
inkuge/
├── backend/          # Django REST API
│   ├── config/      # Django settings
│   ├── apps/        # Django applications
│   └── manage.py
├── frontend/         # Next.js TypeScript app
│   ├── src/
│   ├── public/
│   └── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Python 3.11+
- Node.js 18+
- PostgreSQL (or Supabase account)

### Backend Setup

```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

### Environment Variables

Create `.env` files in both backend and frontend directories:

**backend/.env**
```
DJANGO_SECRET_KEY=your-secret-key
DJANGO_DEBUG=True
SUPABASE_URL=your-supabase-url
SUPABASE_KEY=your-supabase-key
YOUTUBE_API_KEY=your-youtube-key
JITSI_APP_ID=your-jitsi-id
```

**frontend/.env.local**
```
NEXT_PUBLIC_API_URL=http://localhost:8000/api
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

## 👥 User Roles

- **Admin**: Full system access, content management
- **Staff/Trainers**: Course creation, event management
- **Students**: Course enrollment, certificate tracking
- **Pastors**: Leadership training access
- **Public**: View public content, testimonies

## 📚 Core Modules

1. **Authentication & Users**: Role-based access control
2. **Ministries**: Evangelism, Apologetics, Leadership, Street Kids
3. **Events**: Live streaming, conferences, webinars
4. **Courses**: Online learning system with video lessons
5. **Certificate Program**: 6-month structured training
6. **Media**: YouTube integration, Supabase storage
7. **Testimonies**: Stories and impact updates

## 🔐 Security

- JWT authentication
- Role-based permissions
- Secure file uploads
- CORS configuration
- Environment variable protection

## 📱 Future Enhancements

- Mobile apps (iOS & Android)
- Advanced analytics dashboard
- Multi-language support
- Offline mode
- Push notifications

## 📄 License

Copyright © 2025 Ratio Christi Rwanda. All rights reserved.

## 🤝 Contact

For questions or support, contact: info@ratiochristi.rw



