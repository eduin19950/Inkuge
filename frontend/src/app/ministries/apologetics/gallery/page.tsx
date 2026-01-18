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
  gallery_ministry_name?: string
}

const CATEGORY_COLORS = [
  'from-blue-500 to-blue-700',
  'from-green-500 to-green-700',
  'from-purple-500 to-purple-700',
  'from-orange-500 to-orange-700',
  'from-red-500 to-red-700',
  'from-teal-500 to-teal-700',
]

export default function ApologeticsGalleryPage() {
  const [galleries, setGalleries] = useState<PhotoGallery[]>([])
  const [photos, setPhotos] = useState<Photo[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedGallery, setSelectedGallery] = useState<PhotoGallery | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch galleries filtered by Apologetics ministry
        const galleriesResponse = await fetch('https://api.apologeticsrwanda.org/api/testimonies/galleries/')
        const galleriesData = await galleriesResponse.json()
        const allGalleries = Array.isArray(galleriesData) ? galleriesData : (galleriesData.results || [])
        
        // Filter for Apologetics ministry
        const apologeticsGalleries = allGalleries.filter((g: PhotoGallery) => 
          g.ministry_name && g.ministry_name.toLowerCase().includes('apologetics')
        )
        setGalleries(apologeticsGalleries)

        // Fetch photos filtered by Apologetics
        const photosResponse = await fetch('https://api.apologeticsrwanda.org/api/testimonies/photos/')
        const photosData = await photosResponse.json()
        const allPhotos = Array.isArray(photosData) ? photosData : (photosData.results || [])
        
        const apologeticsPhotos = allPhotos.filter((p: Photo) =>
          p.gallery_ministry_name && p.gallery_ministry_name.toLowerCase().includes('apologetics')
        )
        setPhotos(apologeticsPhotos)

      } catch (error) {
        console.error('Error fetching gallery data:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary-600 to-secondary-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Camera className="h-10 w-10" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Apologetics Photo Gallery</h1>
            <p className="text-xl text-secondary-100">
              Capturing moments from our apologetics conferences, seminars, and training events
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Albums */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Recent Albums</h2>
          
          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-secondary-600"></div>
              <p className="mt-4 text-gray-600">Loading galleries...</p>
            </div>
          ) : galleries.length === 0 ? (
            <div className="text-center py-12">
              <Camera className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">No apologetics galleries available yet. Check back soon!</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {galleries.map((gallery, index) => (
                <div 
                  key={gallery.id} 
                  className="group cursor-pointer"
                  onClick={() => setSelectedGallery(gallery)}
                >
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
                  <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-secondary-600 transition-colors">
                    {gallery.title}
                  </h3>
                  {gallery.description && (
                    <>
                      <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                        {gallery.description}
                      </p>
                      {gallery.description.length > 100 && (
                        <span className="text-secondary-600 text-sm font-medium hover:underline">
                          Read more →
                        </span>
                      )}
                    </>
                  )}
                  <div className="flex items-center text-gray-600 text-sm mt-2">
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
              <p className="text-gray-600">No apologetics photos available yet. Upload photos from the admin panel!</p>
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
        </div>
      </section>

      {/* Gallery Details Modal */}
      {selectedGallery && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedGallery(null)}
        >
          <div 
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b px-6 py-4 flex items-center justify-between">
              <h3 className="text-2xl font-bold text-gray-900">{selectedGallery.title}</h3>
              <button 
                onClick={() => setSelectedGallery(null)}
                className="text-gray-500 hover:text-gray-700 text-2xl font-bold w-8 h-8 flex items-center justify-center"
              >
                ×
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {/* Cover Image */}
              {selectedGallery.cover_photo && (
                <div className="relative aspect-video rounded-lg overflow-hidden mb-6">
                  <Image
                    src={selectedGallery.cover_photo}
                    alt={selectedGallery.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}

              {/* Gallery Info */}
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(selectedGallery.created_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                  {selectedGallery.ministry_name && (
                    <div className="px-3 py-1 bg-secondary-100 text-secondary-700 rounded-full text-sm font-semibold">
                      {selectedGallery.ministry_name}
                    </div>
                  )}
                  <div className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-semibold">
                    {selectedGallery.photos_count} photos
                  </div>
                </div>

                {/* Full Description */}
                {selectedGallery.description && (
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                      {selectedGallery.description}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="sticky bottom-0 bg-gray-50 px-6 py-4 border-t">
              <button 
                onClick={() => setSelectedGallery(null)}
                className="w-full px-6 py-3 bg-secondary-600 text-white rounded-lg font-semibold hover:bg-secondary-700 transition-colors"
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

