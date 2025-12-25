import { Camera, Image as ImageIcon, Calendar } from 'lucide-react'

export default function GalleryPage() {
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
            <button className="px-4 py-2 bg-purple-600 text-white rounded-lg font-semibold">
              All Photos
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200">
              Conferences
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200">
              Campus Events
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200">
              Street Ministry
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200">
              Training
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200">
              Worship
            </button>
          </div>
        </div>
      </section>

      {/* Gallery Albums */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Recent Albums</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { 
                title: 'Apologetics Conference 2024',
                photos: 145,
                date: 'December 15, 2024',
                color: 'from-blue-500 to-blue-700'
              },
              { 
                title: 'Youth Evangelism Summit',
                photos: 98,
                date: 'November 20, 2024',
                color: 'from-green-500 to-green-700'
              },
              { 
                title: 'Campus Fellowship - UR',
                photos: 67,
                date: 'November 10, 2024',
                color: 'from-purple-500 to-purple-700'
              },
              { 
                title: 'Street Kids Outreach',
                photos: 85,
                date: 'October 28, 2024',
                color: 'from-orange-500 to-orange-700'
              },
              { 
                title: 'Leadership Training Workshop',
                photos: 56,
                date: 'October 15, 2024',
                color: 'from-red-500 to-red-700'
              },
              { 
                title: 'Sunday Worship Service',
                photos: 42,
                date: 'October 8, 2024',
                color: 'from-teal-500 to-teal-700'
              }
            ].map((album, index) => (
              <div key={index} className="group cursor-pointer">
                <div className={`relative aspect-[4/3] bg-gradient-to-br ${album.color} rounded-xl overflow-hidden mb-4`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Camera className="h-16 w-16 text-white opacity-50 group-hover:opacity-70 transition-opacity" />
                  </div>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                  <div className="absolute top-4 right-4 bg-white/90 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                    {album.photos} photos
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-purple-600 transition-colors">
                  {album.title}
                </h3>
                <div className="flex items-center text-gray-600 text-sm">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{album.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Photos Grid */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Latest Photos</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {Array.from({ length: 12 }, (_, i) => i + 1).map((item) => (
              <div key={item} className="group cursor-pointer">
                <div className="relative aspect-square bg-gray-200 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-300 to-gray-400">
                    <ImageIcon className="h-12 w-12 text-gray-500" />
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors" />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors">
              Load More Photos
            </button>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">2,500+</div>
              <div className="text-gray-600">Total Photos</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">50+</div>
              <div className="text-gray-600">Albums</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">100+</div>
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

