import Link from 'next/link'
import { Heart, ArrowLeft } from 'lucide-react'

export default function LeadershipTestimoniesPage() {
  return (
    <div>
      <section className="bg-gradient-to-br from-green-600 to-green-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="h-10 w-10" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Leadership Testimonies</h1>
            <p className="text-xl text-green-100">
              Stories of pastors and leaders transformed through training
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Heart className="h-24 w-24 text-green-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Testimonies Coming Soon</h2>
            <p className="text-lg text-gray-600 mb-8">
              Hear from pastors and church leaders whose ministries have been transformed. Check back soon!
            </p>
            <Link
              href="/ministries/leadership"
              className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back to Leadership Training
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

