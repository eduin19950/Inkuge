'use client'

import { Camera, Image as ImageIcon } from 'lucide-react'
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

const CATEGORY_COLORS = [
  'from-orange-500 to-orange-700',
  'from-red-500 to-red-700',
  'from-yellow-500 to-yellow-700',
]

export default function StreetKidsGalleryPage() {
  const [galleries, setGalleries] = useState<PhotoGallery[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const galleriesResponse = await fetch('https://api.apologeticsrwanda.org/api/testimonies/galleries/')
        const galleriesData = await galleriesResponse.json()
        const allGalleries = Array.isArray(galleriesData) ? galleriesData : (galleriesData.results || [])
        
        const streetKidsGalleries = allGalleries.filter((g: PhotoGallery) => 
          g.ministry_name && g.ministry_name.toLowerCase().includes('street')
        )
        setGalleries(streetKidsGalleries)
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
      <section className="bg-gradient-to-br from-orange-600 to-orange-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Camera className="h-10 w-10" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Street Kids Ministry Gallery</h1>
            <p className="text-xl text-orange-100">
              Capturing moments of hope and transformation with street children
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Recent Albums</h2>
          
          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600"></div>
              <p className="mt-4 text-gray-600">Loading galleries...</p>
            </div>
          ) : galleries.length === 0 ? (
            <div className="text-center py-12">
              <Camera className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">No street kids ministry galleries available yet. Check back soon!</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {galleries.map((gallery, index) => (
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
                        <Camera className="h-16 w-16 text-white opacity-50" />
                      </div>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{gallery.title}</h3>
                  {gallery.description && <p className="text-gray-600 text-sm mb-2 line-clamp-2">{gallery.description}</p>}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

