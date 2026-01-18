import Link from 'next/link'
import { Video, ArrowLeft } from 'lucide-react'

export default function StreetKidsVideosPage() {
  return (
    <div>
      <section className="bg-gradient-to-br from-orange-600 to-orange-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Video className="h-10 w-10" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Street Kids Ministry Videos</h1>
            <p className="text-xl text-orange-100">
              Watch our outreach programs and see transformation in action
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Video className="h-24 w-24 text-orange-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Videos Coming Soon</h2>
            <p className="text-lg text-gray-600 mb-8">
              We're building our video library documenting our work with street children. Check back soon!
            </p>
            <Link
              href="/ministries/street-kids"
              className="inline-flex items-center px-6 py-3 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700 transition-colors"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back to Street Kids Ministry
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

