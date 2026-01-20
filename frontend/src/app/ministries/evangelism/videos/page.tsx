'use client'

import { Video, Play, Clock, Eye, Calendar } from 'lucide-react'
import { useEffect, useState } from 'react'

interface VideoData {
  id: number
  title: string
  slug: string
  description: string
  youtube_video_id: string
  youtube_url: string
  thumbnail_url: string | null
  category: string
  ministry_name: string
  duration_seconds: number
  published_date: string | null
  views_count: number
  is_featured: boolean
}

const CATEGORIES = [
  { value: 'all', label: 'All Videos' },
  { value: 'SERMON', label: 'Sermons' },
  { value: 'CONFERENCE', label: 'Conferences' },
  { value: 'TEACHING', label: 'Teachings' },
  { value: 'TESTIMONY', label: 'Testimonies' },
  { value: 'TRAINING', label: 'Training' },
  { value: 'OTHER', label: 'Other' },
]

export default function EvangelismVideosPage() {
  const [videos, setVideos] = useState<VideoData[]>([])
  const [filteredVideos, setFilteredVideos] = useState<VideoData[]>([])
  const [featuredVideo, setFeaturedVideo] = useState<VideoData | null>(null)
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [loading, setLoading] = useState(true)
  const [selectedVideo, setSelectedVideo] = useState<VideoData | null>(null)

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api'
        const response = await fetch(`${apiUrl}/media/videos/`)
        const data = await response.json()
        const allVideos = Array.isArray(data) ? data : (data.results || [])
        
        // Filter for Evangelism ministry
        const evangelismVideos = allVideos.filter((v: VideoData) => 
          v.ministry_name && v.ministry_name.toLowerCase().includes('evangelism')
        )
        
        setVideos(evangelismVideos)
        setFilteredVideos(evangelismVideos)
        
        // Find featured video
        const featured = evangelismVideos.find((v: VideoData) => v.is_featured)
        setFeaturedVideo(featured || evangelismVideos[0] || null)
      } catch (error) {
        console.error('Error fetching videos:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchVideos()
  }, [])

  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredVideos(videos)
    } else {
      setFilteredVideos(videos.filter(v => v.category === selectedCategory))
    }
  }, [selectedCategory, videos])

  const formatDuration = (seconds: number) => {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const secs = seconds % 60
    
    if (hours > 0) {
      return `${hours}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
    }
    return `${minutes}:${secs.toString().padStart(2, '0')}`
  }

  const getYouTubeThumbnail = (videoId: string) => {
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
  }

  const formatDate = (dateString: string | null) => {
    if (!dateString) return 'Recently'
    return new Date(dateString).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Video className="h-10 w-10" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Evangelism Video Library</h1>
            <p className="text-xl text-primary-100">
              Watch sermons, teachings, conferences, and testimonies from our evangelism ministry
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 items-center justify-center">
            {CATEGORIES.map((category) => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                  selectedCategory === category.value
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {loading ? (
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mb-4"></div>
            <p className="text-gray-600">Loading videos...</p>
          </div>
        </section>
      ) : videos.length === 0 ? (
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 text-center">
            <Video className="h-24 w-24 text-gray-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">No Videos Yet</h2>
            <p className="text-gray-600">
              Evangelism videos will appear here. Upload videos from the admin panel!
            </p>
          </div>
        </section>
      ) : (
        <>
          {/* Featured Video */}
          {featuredVideo && (
            <section className="py-16 md:py-20">
              <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Featured Video</h2>
                <div className="max-w-5xl mx-auto">
                  <div className="bg-gray-900 rounded-xl overflow-hidden shadow-2xl">
                    <div 
                      className="relative aspect-video bg-gray-800 flex items-center justify-center cursor-pointer group"
                      onClick={() => setSelectedVideo(featuredVideo)}
                    >
                      <img
                        src={featuredVideo.thumbnail_url || getYouTubeThumbnail(featuredVideo.youtube_video_id)}
                        alt={featuredVideo.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                      <Play className="relative h-20 w-20 text-white opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                    </div>
                    <div className="p-6 bg-white">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {featuredVideo.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {featuredVideo.description}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>{formatDuration(featuredVideo.duration_seconds)}</span>
                        </div>
                        <div className="flex items-center">
                          <Eye className="h-4 w-4 mr-1" />
                          <span>{featuredVideo.views_count.toLocaleString()} views</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>{formatDate(featuredVideo.published_date)}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Recent Videos Grid */}
          <section className="py-16 md:py-20 bg-gray-50">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
                {selectedCategory === 'all' ? 'All Videos' : `${CATEGORIES.find(c => c.value === selectedCategory)?.label}`}
              </h2>
              
              {filteredVideos.length === 0 ? (
                <div className="text-center py-12">
                  <Video className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">No videos found in this category</p>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                  {filteredVideos.map((video) => (
                    <div 
                      key={video.id} 
                      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer"
                      onClick={() => setSelectedVideo(video)}
                    >
                      <div className="relative aspect-video bg-gray-800 flex items-center justify-center group">
                        <img
                          src={video.thumbnail_url || getYouTubeThumbnail(video.youtube_video_id)}
                          alt={video.title}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                        <Play className="relative h-12 w-12 text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                        <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-xs font-semibold">
                          {formatDuration(video.duration_seconds)}
                        </div>
                      </div>
                      <div className="p-4">
                        <div className="inline-block px-2 py-1 bg-primary-100 text-primary-700 rounded text-xs font-semibold mb-2">
                          {video.category}
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">{video.title}</h3>
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <div className="flex items-center">
                            <Eye className="h-3 w-3 mr-1" />
                            <span>{video.views_count.toLocaleString()} views</span>
                          </div>
                          <span>{formatDate(video.published_date)}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
        </>
      )}

      {/* Video Player Modal */}
      {selectedVideo && (
        <div 
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <div 
            className="bg-black rounded-xl max-w-6xl w-full overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-video">
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo.youtube_video_id}?autoplay=1&rel=0&modestbranding=1&controls=1&showinfo=0&fs=1&iv_load_policy=3`}
                title={selectedVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
                style={{ border: 'none' }}
              />
            </div>
            <div className="p-6 bg-gray-900 text-white">
              <h3 className="text-2xl font-bold mb-2">{selectedVideo.title}</h3>
              <p className="text-gray-300 mb-4">{selectedVideo.description}</p>
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{formatDuration(selectedVideo.duration_seconds)}</span>
                </div>
                <div className="flex items-center">
                  <Eye className="h-4 w-4 mr-1" />
                  <span>{selectedVideo.views_count.toLocaleString()} views</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{formatDate(selectedVideo.published_date)}</span>
                </div>
              </div>
              <button 
                onClick={() => setSelectedVideo(null)}
                className="mt-4 px-6 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
