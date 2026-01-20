'use client'

import { useState } from 'react'
import { Play, X, Clock, Eye, Calendar } from 'lucide-react'

interface YouTubePlayerProps {
  videoId: string
  title: string
  description?: string
  thumbnailUrl?: string
  durationSeconds?: number
  viewsCount?: number
  publishedDate?: string | null
  autoplay?: boolean
  className?: string
}

/**
 * YouTube Player Component
 * 
 * Embeds YouTube videos so views count on YouTube.
 * Can be used as a thumbnail with modal or inline player.
 * 
 * @example
 * // Modal player (click thumbnail to play)
 * <YouTubePlayer
 *   videoId="dQw4w9WgXcQ"
 *   title="Video Title"
 *   description="Video description"
 *   thumbnailUrl="https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg"
 * />
 * 
 * @example
 * // Inline player (auto-show player)
 * <YouTubePlayer
 *   videoId="dQw4w9WgXcQ"
 *   title="Video Title"
 *   autoplay
 * />
 */
export default function YouTubePlayer({
  videoId,
  title,
  description,
  thumbnailUrl,
  durationSeconds,
  viewsCount,
  publishedDate,
  autoplay = false,
  className = ''
}: YouTubePlayerProps) {
  const [isPlaying, setIsPlaying] = useState(autoplay)

  const formatDuration = (seconds: number) => {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const secs = seconds % 60

    if (hours > 0) {
      return `${hours}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
    }
    return `${minutes}:${secs.toString().padStart(2, '0')}`
  }

  const formatDate = (dateString: string | null | undefined) => {
    if (!dateString) return 'N/A'
    const date = new Date(dateString)
    return new Intl.DateTimeFormat('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    }).format(date)
  }

  // Get thumbnail URL from YouTube if not provided
  const thumb = thumbnailUrl || `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`

  // If autoplay is true, show player immediately
  if (autoplay || isPlaying) {
    return (
      <div className={`relative ${className}`}>
        <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=${autoplay ? 1 : 0}&rel=0&modestbranding=1&controls=1&showinfo=0&fs=1&iv_load_policy=3&disablekb=0&cc_load_policy=0`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full border-0"
            style={{ border: 'none' }}
          />
        </div>
        
        {/* Video Info */}
        {description && (
          <div className="mt-4">
            <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
            <p className="text-gray-600 mb-3">{description}</p>
            
            <div className="flex items-center gap-4 text-sm text-gray-500">
              {durationSeconds && (
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{formatDuration(durationSeconds)}</span>
                </div>
              )}
              {viewsCount !== undefined && (
                <div className="flex items-center">
                  <Eye className="h-4 w-4 mr-1" />
                  <span>{viewsCount.toLocaleString()} views</span>
                </div>
              )}
              {publishedDate && (
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{formatDate(publishedDate)}</span>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    )
  }

  // Show thumbnail with play button
  return (
    <div 
      className={`relative cursor-pointer group ${className}`}
      onClick={() => setIsPlaying(true)}
    >
      {/* Thumbnail */}
      <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-900">
        <img
          src={thumb}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            // Fallback to standard quality if maxresdefault fails
            const target = e.target as HTMLImageElement
            target.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
          }}
        />
        
        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
          <div className="bg-red-600 rounded-full p-4 group-hover:scale-110 group-hover:bg-red-700 transition-all shadow-2xl">
            <Play className="h-8 w-8 text-white fill-white" />
          </div>
        </div>

        {/* Duration Badge */}
        {durationSeconds && (
          <div className="absolute bottom-3 right-3 bg-black/80 text-white px-2 py-1 rounded text-xs font-semibold">
            {formatDuration(durationSeconds)}
          </div>
        )}
      </div>

      {/* Video Info Below Thumbnail */}
      <div className="mt-3">
        <h3 className="font-semibold text-gray-900 group-hover:text-teal-600 transition-colors line-clamp-2">
          {title}
        </h3>
        
        {(viewsCount !== undefined || publishedDate) && (
          <div className="flex items-center gap-3 mt-1 text-sm text-gray-500">
            {viewsCount !== undefined && (
              <span>{viewsCount.toLocaleString()} views</span>
            )}
            {publishedDate && (
              <span>{formatDate(publishedDate)}</span>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

/**
 * YouTube Player Modal Component
 * Opens video in a fullscreen modal overlay
 */
interface YouTubeModalProps extends YouTubePlayerProps {
  isOpen: boolean
  onClose: () => void
}

export function YouTubeModal({
  isOpen,
  onClose,
  videoId,
  title,
  description,
  durationSeconds,
  viewsCount,
  publishedDate
}: YouTubeModalProps) {
  if (!isOpen) return null

  const formatDuration = (seconds: number) => {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const secs = seconds % 60

    if (hours > 0) {
      return `${hours}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
    }
    return `${minutes}:${secs.toString().padStart(2, '0')}`
  }

  const formatDate = (dateString: string | null | undefined) => {
    if (!dateString) return 'N/A'
    const date = new Date(dateString)
    return new Intl.DateTimeFormat('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    }).format(date)
  }

  return (
    <div 
      className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="bg-black rounded-xl max-w-6xl w-full overflow-hidden shadow-2xl animate-in slide-in-from-bottom-4 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
          aria-label="Close video"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Video Player */}
        <div className="relative aspect-video">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&controls=1&showinfo=0&fs=1&iv_load_policy=3&disablekb=0&cc_load_policy=0`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full border-0"
            style={{ border: 'none' }}
          />
        </div>

        {/* Video Info */}
        <div className="p-6 bg-gray-900 text-white">
          <h3 className="text-2xl font-bold mb-2">{title}</h3>
          {description && (
            <p className="text-gray-300 mb-4">{description}</p>
          )}
          
          <div className="flex items-center gap-4 text-sm text-gray-400">
            {durationSeconds && (
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                <span>{formatDuration(durationSeconds)}</span>
              </div>
            )}
            {viewsCount !== undefined && (
              <div className="flex items-center">
                <Eye className="h-4 w-4 mr-1" />
                <span>{viewsCount.toLocaleString()} views</span>
              </div>
            )}
            {publishedDate && (
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{formatDate(publishedDate)}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

