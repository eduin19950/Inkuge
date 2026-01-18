import Link from 'next/link'
import { DollarSign, Heart, ArrowLeft, Check } from 'lucide-react'

export default function StreetKidsDonatePage() {
  return (
    <div>
      <section className="bg-gradient-to-br from-orange-600 to-orange-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="h-10 w-10" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Support Street Kids Ministry</h1>
            <p className="text-xl text-orange-100">
              Help us bring hope and transformation to vulnerable children on Rwanda's streets
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">Your Impact</h2>
            <p className="text-lg text-gray-600 mb-12 text-center">
              Your donation provides vital support for children living on the streets
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Check className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Basic Needs</h3>
                <p className="text-gray-600">
                  Provide food, clothing, shelter, and medical care for street children
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Check className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Education & Skills</h3>
                <p className="text-gray-600">
                  Fund literacy classes, school enrollment, and vocational training
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Check className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Rehabilitation</h3>
                <p className="text-gray-600">
                  Support family reunification and reintegration programs
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Check className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Spiritual Care</h3>
                <p className="text-gray-600">
                  Share the love of Christ and provide discipleship for children
                </p>
              </div>
            </div>

            <div className="bg-orange-50 rounded-xl p-8 text-center">
              <DollarSign className="h-16 w-16 text-orange-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Give?</h3>
              <p className="text-gray-600 mb-6">
                Contact us for donation information and payment methods.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700 transition-colors"
                >
                  Contact Us to Donate
                </Link>
                <Link
                  href="/ministries/street-kids"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 rounded-lg font-semibold hover:bg-gray-50 transition-colors border-2 border-orange-600"
                >
                  <ArrowLeft className="mr-2 h-5 w-5" />
                  Back to Street Kids Ministry
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

