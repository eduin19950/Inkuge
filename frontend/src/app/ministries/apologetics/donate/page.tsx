import Link from 'next/link'
import { DollarSign, Heart, ArrowLeft, Check } from 'lucide-react'

export default function ApologeticsDonatePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary-600 to-secondary-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="h-10 w-10" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Support Apologetics Ministry</h1>
            <p className="text-xl text-secondary-100">
              Help us equip believers to defend their faith with confidence and grace
            </p>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">Your Impact</h2>
            <p className="text-lg text-gray-600 mb-12 text-center">
              Your donation helps us train believers to confidently defend their faith in an increasingly skeptical world
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center mb-4">
                  <Check className="h-6 w-6 text-secondary-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Training & Resources</h3>
                <p className="text-gray-600">
                  Fund apologetics courses, seminars, and resource materials for believers across Rwanda
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center mb-4">
                  <Check className="h-6 w-6 text-secondary-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Conferences & Events</h3>
                <p className="text-gray-600">
                  Support apologetics conferences and training events that reach hundreds of students
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center mb-4">
                  <Check className="h-6 w-6 text-secondary-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Online Platform</h3>
                <p className="text-gray-600">
                  Maintain and expand our digital apologetics platform with courses and resources
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center mb-4">
                  <Check className="h-6 w-6 text-secondary-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Leadership Training</h3>
                <p className="text-gray-600">
                  Train church leaders and pastors in apologetics to equip their congregations
                </p>
              </div>
            </div>

            <div className="bg-secondary-50 rounded-xl p-8 text-center">
              <DollarSign className="h-16 w-16 text-secondary-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Give?</h3>
              <p className="text-gray-600 mb-6">
                For donation information and payment methods, please contact us directly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-secondary-600 text-white rounded-lg font-semibold hover:bg-secondary-700 transition-colors"
                >
                  Contact Us to Donate
                </Link>
                <Link
                  href="/ministries/apologetics"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-secondary-600 rounded-lg font-semibold hover:bg-gray-50 transition-colors border-2 border-secondary-600"
                >
                  <ArrowLeft className="mr-2 h-5 w-5" />
                  Back to Apologetics Hub
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

