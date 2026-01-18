'use client'

import { Camera, Image as ImageIcon, Calendar } from 'lucide-react'
import { useEffect, useState } from 'react'
import Image from 'next/image'

interface PhotoGallery {
  id: number
  title: string
  description: string
  cover_photo: string | null
  photos_count: number
  created_at: string
  ministry_name: string
}

interface Photo {
  id: number
  title: string
  photo_url: string
  thumbnail_url: string | null
}

const CATEGORY_COLORS = [
  'from-blue-500 to-blue-700',
  'from-green-500 to-green-700',
  'from-purple-500 to-purple-700',
  'from-orange-500 to-orange-700',
  'from-red-500 to-red-700',
  'from-teal-500 to-teal-700',
]

export default function GalleryPage() {
  const [galleries, setGalleries] = useState<PhotoGallery[]>([])
  const [photos, setPhotos] = useState<Photo[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState('all')

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch galleries
        const galleriesResponse = await fetch('https://api.apologeticsrwanda.org/api/testimonies/galleries/')
        const galleriesData = await galleriesResponse.json()
        setGalleries(Array.isArray(galleriesData) ? galleriesData : (galleriesData.results || []))

        // Fetch photos
        const photosResponse = await fetch('https://api.apologeticsrwanda.org/api/testimonies/photos/')
        const photosData = await photosResponse.json()
        setPhotos(Array.isArray(photosData) ? photosData : (photosData.results || []))
      } catch (error) {
        console.error('Error fetching gallery data:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  const ministries = ['all', ...Array.from(new Set(galleries.filter(g => g.ministry_name).map(g => g.ministry_name)))]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Camera className="h-10 w-10" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Photo Gallery</h1>
            <p className="text-xl text-purple-100">
              Capturing moments from our ministry events, conferences, and community outreach
            </p>
          </div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 items-center justify-center">
            {ministries.map((ministry) => (
              <button
                key={ministry}
                onClick={() => setSelectedCategory(ministry)}
                className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                  selectedCategory === ministry
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {ministry === 'all' ? 'All Photos' : ministry}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Albums */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Recent Albums</h2>
          
          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
              <p className="mt-4 text-gray-600">Loading galleries...</p>
            </div>
          ) : galleries.length === 0 ? (
            <div className="text-center py-12">
              <Camera className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">No galleries available yet. Check back soon!</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {galleries
                .filter(g => selectedCategory === 'all' || g.ministry_name === selectedCategory)
                .map((gallery, index) => (
                <div key={gallery.id} className="group cursor-pointer">
                  <div className={`relative aspect-[4/3] bg-gradient-to-br ${CATEGORY_COLORS[index % CATEGORY_COLORS.length]} rounded-xl overflow-hidden mb-4`}>
                    {gallery.cover_photo ? (
                      <Image
                        src={gallery.cover_photo}
                        alt={gallery.title}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Camera className="h-16 w-16 text-white opacity-50 group-hover:opacity-70 transition-opacity" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                    <div className="absolute top-4 right-4 bg-white/90 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                      {gallery.photos_count} photos
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-purple-600 transition-colors">
                    {gallery.title}
                  </h3>
                  {gallery.description && (
                    <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                      {gallery.description}
                    </p>
                  )}
                  <div className="flex items-center text-gray-600 text-sm">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{new Date(gallery.created_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Latest Photos Grid */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Latest Photos</h2>
          
          {photos.length === 0 && !loading ? (
            <div className="text-center py-12">
              <ImageIcon className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">No photos available yet. Upload photos from the admin panel!</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
              {photos.slice(0, 12).map((photo) => (
                <div key={photo.id} className="group cursor-pointer">
                  <div className="relative aspect-square bg-gray-200 rounded-lg overflow-hidden">
                    {photo.thumbnail_url || photo.photo_url ? (
                      <Image
                        src={photo.thumbnail_url || photo.photo_url}
                        alt={photo.title}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-300 to-gray-400">
                        <ImageIcon className="h-12 w-12 text-gray-500" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors" />
                  </div>
                </div>
              ))}
            </div>
          )}

          {photos.length > 12 && (
            <div className="text-center mt-12">
              <button className="px-8 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                Load More Photos
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">{photos.length}</div>
              <div className="text-gray-600">Total Photos</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">{galleries.length}</div>
              <div className="text-gray-600">Albums</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">{galleries.length}</div>
              <div className="text-gray-600">Events Covered</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">3</div>
              <div className="text-gray-600">Years of Ministry</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Share Your Photos
            </h2>
            <p className="text-xl mb-8 text-purple-100">
              Were you at one of our events? Share your photos with us!
            </p>
            <button className="px-8 py-4 bg-white text-purple-700 rounded-lg font-semibold hover:bg-purple-50 transition-colors">
              Submit Photos
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

