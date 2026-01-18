'use client'

import { Heart, Quote, Star, Video } from 'lucide-react'
import { useEffect, useState } from 'react'
import Image from 'next/image'

interface Testimony {
  id: number
  title: string
  person_name: string
  person_location: string
  person_photo: string | null
  story: string
  excerpt: string
  category: string
  is_featured: boolean
  featured_image: string | null
  video_url: string | null
}

export default function TestimoniesPage() {
  const [testimonies, setTestimonies] = useState<Testimony[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchTestimonies = async () => {
      try {
        const response = await fetch('https://api.apologeticsrwanda.org/api/testimonies/')
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json()
        // Handle both paginated and non-paginated responses
        const testimoniesData = Array.isArray(data) ? data : (data.results || [])
        setTestimonies(testimoniesData)
      } catch (error) {
        console.error('Error fetching testimonies:', error)
        setTestimonies([]) // Set to empty array on error
      } finally {
        setLoading(false)
      }
    }
    fetchTestimonies()
  }, [])

  // Safely access testimonies only if it's an array
  const featuredTestimony = Array.isArray(testimonies) && testimonies.length > 0
    ? testimonies.find(t => t.is_featured) || testimonies[0]
    : null

  const otherTestimonies = Array.isArray(testimonies)
    ? testimonies.filter(t => !t.is_featured)
    : []

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-600 to-cyan-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="h-10 w-10" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Testimonies</h1>
            <p className="text-xl text-teal-100">
              Real stories of lives transformed by the Gospel through our ministry
            </p>
          </div>
        </div>
      </section>

      {/* Featured Testimony */}
      {featuredTestimony && (
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-8 md:p-12 shadow-xl">
                <div className="flex items-start gap-4 mb-6">
                  {featuredTestimony.person_photo ? (
                    <div className="w-16 h-16 rounded-full flex-shrink-0 overflow-hidden relative">
                      <Image
                        src={featuredTestimony.person_photo}
                        alt={featuredTestimony.person_name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0 text-white text-2xl font-bold">
                      {getInitials(featuredTestimony.person_name)}
                    </div>
                  )}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">{featuredTestimony.person_name}</h3>
                    <p className="text-gray-600">{featuredTestimony.person_location}</p>
                  </div>
                </div>
                <Quote className="h-10 w-10 text-teal-600 mb-4" />
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  {featuredTestimony.story}
                </p>
                <div className="inline-block px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-xs font-semibold">
                  {featuredTestimony.category.replace('_', ' ')}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Testimonies Grid */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            More Stories of Hope
          </h2>
          
          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-teal-600"></div>
              <p className="mt-4 text-gray-600">Loading testimonies...</p>
            </div>
          ) : otherTestimonies.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600">No testimonies available yet. Check back soon!</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {otherTestimonies.map((testimony) => (
                <div key={testimony.id} className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-3 mb-4">
                    {testimony.person_photo ? (
                      <div className="w-12 h-12 rounded-full flex-shrink-0 overflow-hidden relative">
                        <Image
                          src={testimony.person_photo}
                          alt={testimony.person_name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ) : (
                      <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">
                        {getInitials(testimony.person_name)}
                      </div>
                    )}
                    <div>
                      <h3 className="font-bold text-gray-900">{testimony.person_name}</h3>
                      <p className="text-sm text-gray-600">{testimony.person_location || 'Rwanda'}</p>
                    </div>
                  </div>
                  <div className="inline-block px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-xs font-semibold mb-3">
                    {testimony.category.replace('_', ' ')}
                  </div>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {testimony.excerpt || (testimony.story.length > 200
                      ? `${testimony.story.substring(0, 200)}...`
                      : testimony.story)}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Video Testimonies */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Video Testimonies
          </h2>
          <p className="text-lg text-gray-600 mb-12 text-center">
            Watch powerful testimony videos from our community
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { title: 'From Doubt to Faith', duration: '5:30', views: '2.3K' },
              { title: 'Street to Success', duration: '8:15', views: '4.1K' },
              { title: 'Campus Revival Story', duration: '6:45', views: '3.8K' }
            ].map((video, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <div className="relative aspect-video bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center cursor-pointer group">
                  <Video className="h-12 w-12 text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                  <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-xs font-semibold">
                    {video.duration}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-900 mb-2">{video.title}</h3>
                  <p className="text-sm text-gray-600">{video.views} views</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-16 md:py-20 bg-teal-600 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Impact</h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto text-center">
            <div>
              <div className="text-5xl font-bold mb-2">500+</div>
              <div className="text-teal-100">Lives Transformed</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">50+</div>
              <div className="text-teal-100">Churches Planted</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">200+</div>
              <div className="text-teal-100">Leaders Trained</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">1000+</div>
              <div className="text-teal-100">Students Reached</div>
            </div>
          </div>
        </div>
      </section>

      {/* Submit Testimony CTA */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Share Your Story
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Has God worked in your life through this ministry? We'd love to hear your testimony!
            </p>
            <button className="px-8 py-4 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 transition-colors">
              Submit Your Testimony
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

