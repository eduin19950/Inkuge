// User types
export interface User {
  id: number
  email: string
  first_name: string
  last_name: string
  full_name: string
  role: 'ADMIN' | 'STAFF' | 'STUDENT' | 'PASTOR' | 'PUBLIC'
  phone_number?: string
  profile_picture?: string
  bio?: string
  church_affiliation?: string
  created_at: string
  updated_at: string
}

// Ministry types
export interface Ministry {
  id: number
  name: string
  ministry_type: 'EVANGELISM' | 'APOLOGETICS' | 'LEADERSHIP' | 'STREET_KIDS'
  description: string
  banner_image?: string
  icon?: string
  is_active: boolean
  contact_email?: string
  contact_phone?: string
  facebook_url?: string
  twitter_url?: string
  instagram_url?: string
  youtube_url?: string
  created_at: string
  updated_at: string
}

export interface MinistryNews {
  id: number
  ministry: number
  ministry_name: string
  title: string
  slug: string
  excerpt: string
  content: string
  featured_image?: string
  author_name?: string
  is_featured: boolean
  is_published: boolean
  published_date?: string
  views_count: number
  created_at: string
}

// Event types
export interface Event {
  id: number
  title: string
  slug: string
  description: string
  event_type: 'CONFERENCE' | 'WEBINAR' | 'WORKSHOP' | 'QA_SESSION' | 'TRAINING'
  ministry: number
  ministry_name: string
  start_datetime: string
  end_datetime: string
  speaker_name?: string
  speaker_bio?: string
  speaker_photo?: string
  banner_image?: string
  thumbnail_image?: string
  youtube_live_url?: string
  jitsi_room_name?: string
  enable_jitsi: boolean
  enable_youtube: boolean
  recording_url?: string
  status: 'UPCOMING' | 'LIVE' | 'ENDED' | 'CANCELLED'
  is_featured: boolean
  views_count: number
  is_live: boolean
  is_upcoming: boolean
  has_ended: boolean
  registration_count: number
}

// Course types
export interface Course {
  id: number
  title: string
  slug: string
  description: string
  short_description: string
  ministry: number
  ministry_name: string
  instructor_name?: string
  level: 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED'
  duration_hours: number
  thumbnail_image?: string
  is_published: boolean
  is_featured: boolean
  enrolled_count: number
  views_count: number
  lessons_count: number
  is_enrolled?: boolean
}

export interface Lesson {
  id: number
  course: number
  title: string
  slug: string
  description: string
  lesson_type: 'VIDEO' | 'READING' | 'QUIZ' | 'ASSIGNMENT'
  order: number
  content?: string
  video_url?: string
  video_duration?: number
  resource_url?: string
  is_free: boolean
  is_published: boolean
}

export interface Enrollment {
  id: number
  user: number
  course: number
  course_title: string
  course_slug: string
  course_thumbnail?: string
  enrolled_at: string
  is_active: boolean
  completed: boolean
  completed_at?: string
  progress_percentage: number
}

// Certificate Program types
export interface CertificateProgram {
  id: number
  title: string
  description: string
  start_date: string
  end_date: string
  status: 'UPCOMING' | 'ACTIVE' | 'COMPLETED'
  enrollment_open: boolean
  enrollment_deadline?: string
  max_students?: number
  modules_count: number
  enrolled_count: number
  is_enrolled?: boolean
}

export interface ProgramEnrollment {
  id: number
  program: number
  program_title: string
  student: number
  student_name: string
  status: 'PENDING' | 'APPROVED' | 'REJECTED' | 'ACTIVE' | 'COMPLETED' | 'DROPPED'
  overall_progress: number
  attendance_percentage: number
  certificate_issued: boolean
  certificate_url?: string
  enrolled_at: string
}

// Testimony types
export interface Testimony {
  id: number
  title: string
  slug: string
  category: 'SALVATION' | 'HEALING' | 'TRANSFORMATION' | 'STREET_KIDS' | 'STUDENT' | 'PASTOR' | 'OTHER'
  person_name?: string
  person_photo?: string
  person_location?: string
  excerpt: string
  story: string
  featured_image?: string
  video_url?: string
  ministry_name?: string
  is_featured: boolean
  published_date?: string
  views_count: number
}

// Media types
export interface Video {
  id: number
  title: string
  slug: string
  description: string
  youtube_video_id: string
  youtube_url: string
  thumbnail_url?: string
  category: 'SERMON' | 'TEACHING' | 'TESTIMONY' | 'CONFERENCE' | 'TRAINING' | 'OTHER'
  ministry_name?: string
  duration_seconds: number
  published_date?: string
  views_count: number
  is_featured: boolean
}

export interface Playlist {
  id: number
  title: string
  slug: string
  description: string
  ministry_name: string
  cover_image?: string
  videos_count: number
}

// API Response types
export interface PaginatedResponse<T> {
  count: number
  next: string | null
  previous: string | null
  results: T[]
}



