# Ratio Christi Rwanda - Frontend

Modern, responsive Next.js application for the Ratio Christi Rwanda Digital Ministry Platform.

## Features

- ⚡️ Next.js 14 with App Router
- 🎨 Tailwind CSS for styling
- 📘 TypeScript for type safety
- 🔐 JWT Authentication
- 📱 Fully responsive design
- 🎥 YouTube & Jitsi integration
- 📦 Supabase storage integration

## Getting Started

### Install dependencies

```bash
npm install
```

### Set up environment variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_API_URL=http://localhost:8000/api
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-key
NEXT_PUBLIC_JITSI_DOMAIN=meet.jit.si
```

### Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

## Project Structure

```
src/
├── app/              # Next.js app router pages
├── components/       # React components
│   └── ui/          # Reusable UI components
├── lib/             # Utility functions
│   ├── api.ts       # API client
│   ├── supabase.ts  # Supabase client
│   └── utils.ts     # Helper functions
├── types/           # TypeScript types
└── hooks/           # Custom React hooks
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Key Technologies

- **Next.js 14**: React framework with App Router
- **TypeScript**: Static type checking
- **Tailwind CSS**: Utility-first CSS framework
- **Axios**: HTTP client for API requests
- **React Query**: Data fetching and caching
- **Zustand**: State management
- **React Hook Form**: Form handling
- **Zod**: Schema validation

## Deployment

### Build for production

```bash
npm run build
```

### Deploy to Vercel

The easiest way to deploy is using Vercel:

```bash
vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.

### Deploy to Render

1. Create a new Web Service on Render
2. Connect your repository
3. Set build command: `npm run build`
4. Set start command: `npm run start`
5. Add environment variables

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [TypeScript](https://www.typescriptlang.org)



