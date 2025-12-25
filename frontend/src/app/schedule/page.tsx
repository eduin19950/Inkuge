import Link from 'next/link'
import { Calendar, Clock, MapPin, Users, Video, CheckCircle } from 'lucide-react'

export default function SchedulePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-600 to-red-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Calendar className="h-10 w-10" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Schedule & Booking</h1>
            <p className="text-xl text-orange-100">
              Book appointments, register for events, and schedule meetings with our team
            </p>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            What would you like to do?
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-7 w-7 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Register for Events</h3>
              <p className="text-gray-600 mb-4">
                Sign up for conferences, webinars, and ministry events
              </p>
              <button className="w-full bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
                View Events
              </button>
            </div>

            <Link href="/book-appointment" className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-shadow block">
              <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Video className="h-7 w-7 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Book a Meeting</h3>
              <p className="text-gray-600 mb-4">
                Schedule a one-on-one meeting with our ministry team
              </p>
              <button className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                Book Now
              </button>
            </Link>

            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Calendar className="h-7 w-7 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Request a Speaker</h3>
              <p className="text-gray-600 mb-4">
                Invite our team to speak at your church or event
              </p>
              <button className="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors">
                Request
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Calendar */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Upcoming Events
          </h2>

          <div className="max-w-4xl mx-auto space-y-4">
            {/* Event 1 */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Calendar className="h-6 w-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Apologetics Conference 2025</h3>
                      <p className="text-sm text-gray-600">3-Day Conference</p>
                    </div>
                  </div>
                  <div className="ml-15 space-y-1">
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-4 w-4 mr-2" />
                      <span className="text-sm">March 15-17, 2025 • 9:00 AM - 5:00 PM EAT</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span className="text-sm">Kigali Convention Center & Online</span>
                    </div>
                  </div>
                </div>
                <button className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors whitespace-nowrap">
                  Register Now
                </button>
              </div>
            </div>

            {/* Event 2 */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Users className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Youth Evangelism Summit</h3>
                      <p className="text-sm text-gray-600">2-Day Summit</p>
                    </div>
                  </div>
                  <div className="ml-15 space-y-1">
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-4 w-4 mr-2" />
                      <span className="text-sm">April 5-6, 2025 • 10:00 AM - 6:00 PM EAT</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span className="text-sm">Multiple Cities & Online</span>
                    </div>
                  </div>
                </div>
                <button className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors whitespace-nowrap">
                  Register Now
                </button>
              </div>
            </div>

            {/* Event 3 */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Video className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Pastoral Training Webinar</h3>
                      <p className="text-sm text-gray-600">Online Webinar</p>
                    </div>
                  </div>
                  <div className="ml-15 space-y-1">
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-4 w-4 mr-2" />
                      <span className="text-sm">Every Thursday • 6:00 PM - 8:00 PM EAT</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span className="text-sm">Online via Zoom</span>
                    </div>
                  </div>
                </div>
                <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors whitespace-nowrap">
                  Join Series
                </button>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link
              href="/events"
              className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700"
            >
              View All Events
              <Calendar className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Meeting Types */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Schedule a Meeting
          </h2>
          <p className="text-lg text-gray-600 mb-12 text-center">
            Choose the type of meeting that fits your needs
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="bg-gray-50 rounded-lg p-6 hover:bg-white hover:shadow-md transition-all cursor-pointer">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Spiritual Counseling</h3>
              <p className="text-sm text-gray-600 mb-3">
                One-on-one guidance and prayer
              </p>
              <p className="text-xs text-gray-500">30-60 minutes</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 hover:bg-white hover:shadow-md transition-all cursor-pointer">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Ministry Partnership</h3>
              <p className="text-sm text-gray-600 mb-3">
                Discuss collaboration opportunities
              </p>
              <p className="text-xs text-gray-500">30-45 minutes</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 hover:bg-white hover:shadow-md transition-all cursor-pointer">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Volunteer Orientation</h3>
              <p className="text-sm text-gray-600 mb-3">
                Learn how to get involved
              </p>
              <p className="text-xs text-gray-500">20-30 minutes</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 hover:bg-white hover:shadow-md transition-all cursor-pointer">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Course Consultation</h3>
              <p className="text-sm text-gray-600 mb-3">
                Get help with course enrollment
              </p>
              <p className="text-xs text-gray-500">15-20 minutes</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            How Booking Works
          </h2>

          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Choose Service</h3>
              <p className="text-sm text-gray-600">
                Select the event or meeting type you need
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Pick Date & Time</h3>
              <p className="text-sm text-gray-600">
                Choose a convenient date and time slot
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Provide Details</h3>
              <p className="text-sm text-gray-600">
                Fill in your information and any specific needs
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Get Confirmation</h3>
              <p className="text-sm text-gray-600">
                Receive email confirmation with details
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-orange-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Connect?
            </h2>
            <p className="text-xl mb-8 text-orange-100">
              We're here to support you in your spiritual journey and ministry calling
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book-appointment"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-700 rounded-lg font-semibold hover:bg-orange-50 transition-colors"
              >
                Schedule Now
                <Calendar className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white rounded-lg font-semibold hover:bg-white/10 transition-colors border-2 border-white"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

