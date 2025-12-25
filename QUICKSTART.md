# ⚡️ Quick Start Guide

Get the Ratio Christi Rwanda platform running in 10 minutes!

## Prerequisites Check

```bash
python --version  # Should be 3.11+
node --version    # Should be 18+
psql --version    # PostgreSQL (or use Supabase)
```

## 🚀 Fast Setup

### 1. Backend (Terminal 1)

```bash
# Navigate and setup
cd backend
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Create .env file (copy and edit this)
cat > .env << 'EOF'
DJANGO_SECRET_KEY=your-secret-key-change-this
DEBUG=True
ALLOWED_HOSTS=localhost,127.0.0.1
DATABASE_URL=postgresql://user:pass@localhost:5432/inkuge
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_KEY=your-key
SUPABASE_BUCKET=inkuge-media
CORS_ALLOWED_ORIGINS=http://localhost:3000
EOF

# Setup database
python manage.py migrate
python manage.py createsuperuser

# Run server
python manage.py runserver
```

✅ Backend running at: `http://localhost:8000`

### 2. Frontend (Terminal 2)

```bash
# Navigate and setup
cd frontend
npm install

# Create .env.local file
cat > .env.local << 'EOF'
NEXT_PUBLIC_API_URL=http://localhost:8000/api
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
NEXT_PUBLIC_JITSI_DOMAIN=meet.jit.si
EOF

# Run dev server
npm run dev
```

✅ Frontend running at: `http://localhost:3000`

## 🎯 First Steps

### 1. Access Admin Panel

Visit: `http://localhost:8000/admin`

Login with superuser credentials you created.

### 2. Create Ministries

In the admin panel, create these 4 ministries:

| Name | Type | Description |
|------|------|-------------|
| Campus & High School Evangelism | EVANGELISM | Reaching students with the Gospel |
| Christian Apologetics Hub | APOLOGETICS | Defending the faith through reason |
| Pastors Leadership Training | LEADERSHIP | Equipping church leaders |
| Street Kids Ministry | STREET_KIDS | Bringing hope to vulnerable children |

### 3. Add Sample Content

Add at least one of each:
- [ ] Event (with upcoming date)
- [ ] Course (with 2-3 lessons)
- [ ] Testimony
- [ ] News article

### 4. View Your Site

Visit: `http://localhost:3000`

You should see your homepage with the 4 ministries!

## 🔧 Common Issues

### Database Connection Error

```bash
# If using local PostgreSQL, create database:
psql -U postgres
CREATE DATABASE inkuge;
\q
```

### Port Already in Use

```bash
# Backend (port 8000)
lsof -ti:8000 | xargs kill -9

# Frontend (port 3000)
lsof -ti:3000 | xargs kill -9
```

### Module Not Found

```bash
# Reactivate venv and reinstall
source venv/bin/activate
pip install -r requirements.txt --force-reinstall
```

## 📚 Next Actions

1. ✅ Follow [SETUP.md](./SETUP.md) for detailed configuration
2. ✅ Read [DEPLOYMENT.md](./DEPLOYMENT.md) for production setup
3. ✅ Check [PROJECT_SUMMARY.md](./PROJECT_SUMMARY.md) for full features

## 🆘 Need Help?

- Check terminal output for errors
- Review `.env` file settings
- Ensure all services are running
- Check database connection

## ✨ You're Ready!

Your ministry platform is now running locally. Start adding content and customize it to your needs!

**Happy coding! 🚀**



