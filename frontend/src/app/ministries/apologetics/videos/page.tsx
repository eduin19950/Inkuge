import Link from 'next/link'
import { Video, ArrowLeft } from 'lucide-react'

export default function ApologeticsVideosPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary-600 to-secondary-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Video className="h-10 w-10" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Apologetics Videos</h1>
            <p className="text-xl text-secondary-100">
              Watch our apologetics conferences, seminars, and training sessions
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Video className="h-24 w-24 text-secondary-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Videos Coming Soon</h2>
            <p className="text-lg text-gray-600 mb-8">
              We're currently building our video library. Check back soon for apologetics teaching videos, 
              conference recordings, and training materials.
            </p>
            <Link
              href="/ministries/apologetics"
              className="inline-flex items-center px-6 py-3 bg-secondary-600 text-white rounded-lg font-semibold hover:bg-secondary-700 transition-colors"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back to Apologetics Hub
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

