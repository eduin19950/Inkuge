import Link from 'next/link'
import { Video, Play, Clock, Eye, Filter } from 'lucide-react'

export default function VideosPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-600 to-pink-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Video className="h-10 w-10" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Video Library</h1>
            <p className="text-xl text-red-100">
              Watch sermons, teachings, conferences, and testimonies from our ministry
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 items-center justify-center">
            <button className="px-4 py-2 bg-primary-600 text-white rounded-lg font-semibold">
              All Videos
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200">
              Sermons
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200">
              Conferences
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200">
              Teachings
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200">
              Testimonies
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200">
              Events
            </button>
          </div>
        </div>
      </section>

      {/* Featured Video */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Featured Video</h2>
          <div className="max-w-5xl mx-auto">
            <div className="bg-gray-900 rounded-xl overflow-hidden shadow-2xl">
              <div className="relative aspect-video bg-gray-800 flex items-center justify-center">
                <Play className="h-20 w-20 text-white opacity-80 hover:opacity-100 cursor-pointer transition-opacity" />
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Apologetics Conference 2024 - Full Session
                </h3>
                <p className="text-gray-600 mb-4">
                  Watch the complete recording of our annual apologetics conference featuring expert speakers 
                  on defending the Christian faith in modern times.
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>2h 45min</span>
                  </div>
                  <div className="flex items-center">
                    <Eye className="h-4 w-4 mr-1" />
                    <span>1,234 views</span>
                  </div>
                  <span>Dec 15, 2024</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Videos Grid */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Recent Videos</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { 
                title: 'Evidence for God\'s Existence', 
                category: 'Apologetics', 
                duration: '45:30', 
                views: '856',
                date: 'Jan 10, 2025'
              },
              { 
                title: 'Campus Evangelism Training', 
                category: 'Training', 
                duration: '1:12:20', 
                views: '642',
                date: 'Jan 8, 2025'
              },
              { 
                title: 'Youth Ministry Impact Stories', 
                category: 'Testimonies', 
                duration: '28:15', 
                views: '1,105',
                date: 'Jan 5, 2025'
              },
              { 
                title: 'The Problem of Evil & Suffering', 
                category: 'Apologetics', 
                duration: '52:40', 
                views: '723',
                date: 'Jan 3, 2025'
              },
              { 
                title: 'Leadership Summit 2024 Highlights', 
                category: 'Events', 
                duration: '35:50', 
                views: '934',
                date: 'Dec 28, 2024'
              },
              { 
                title: 'Street Kids Ministry Update', 
                category: 'Ministry', 
                duration: '22:18', 
                views: '567',
                date: 'Dec 25, 2024'
              },
              { 
                title: 'Historical Jesus: The Evidence', 
                category: 'Apologetics', 
                duration: '58:45', 
                views: '1,423',
                date: 'Dec 20, 2024'
              },
              { 
                title: 'Sunday Service: Faith in Action', 
                category: 'Sermons', 
                duration: '42:30', 
                views: '892',
                date: 'Dec 17, 2024'
              },
              { 
                title: 'Student Testimonies Compilation', 
                category: 'Testimonies', 
                duration: '31:25', 
                views: '1,234',
                date: 'Dec 15, 2024'
              }
            ].map((video, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <div className="relative aspect-video bg-gray-800 flex items-center justify-center cursor-pointer group">
                  <Play className="h-12 w-12 text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                  <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-xs font-semibold">
                    {video.duration}
                  </div>
                </div>
                <div className="p-4">
                  <div className="inline-block px-2 py-1 bg-primary-100 text-primary-700 rounded text-xs font-semibold mb-2">
                    {video.category}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{video.title}</h3>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center">
                      <Eye className="h-3 w-3 mr-1" />
                      <span>{video.views} views</span>
                    </div>
                    <span>{video.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors">
              Load More Videos
            </button>
          </div>
        </div>
      </section>

      {/* Video Series */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Popular Series</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Video className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Apologetics 101</h3>
                  <p className="text-gray-600 mb-3">
                    12-part series covering foundational apologetics topics
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">12 videos • 8h 30min</span>
                    <button className="text-primary-600 font-semibold hover:text-primary-700">
                      Watch Series →
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Video className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Evangelism Training</h3>
                  <p className="text-gray-600 mb-3">
                    Complete training series for campus evangelism
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">8 videos • 5h 45min</span>
                    <button className="text-green-600 font-semibold hover:text-green-700">
                      Watch Series →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-red-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Subscribe for New Videos
            </h2>
            <p className="text-xl mb-8 text-red-100">
              Get notified when we upload new sermons, teachings, and conference recordings
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900"
              />
              <button className="px-8 py-3 bg-white text-red-700 rounded-lg font-semibold hover:bg-red-50 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

