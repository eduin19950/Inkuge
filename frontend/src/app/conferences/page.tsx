import Link from 'next/link'
import { Video, Calendar, Users, Play, Clock, Globe } from 'lucide-react'

export default function ConferencesPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-purple-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Video className="h-10 w-10" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Conferences & Webinars</h1>
            <p className="text-xl text-primary-100">
              Join live and recorded sessions with expert speakers, interactive Q&A, and spiritual growth opportunities
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Conferences */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Upcoming Conferences</h2>
            <p className="text-lg text-gray-600">Register now for our upcoming live events</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Conference 1 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-r from-primary-600 to-primary-700 h-32 flex items-center justify-center">
                <Video className="h-16 w-16 text-white" />
              </div>
              <div className="p-6">
                <div className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-3">
                  Live Event
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Apologetics Conference 2025</h3>
                <p className="text-gray-600 mb-4">
                  Join renowned apologists for a 3-day conference covering God's existence, the resurrection, 
                  and defending your faith in modern times.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-700">
                    <Calendar className="h-5 w-5 mr-2 text-primary-600" />
                    <span>March 15-17, 2025</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Clock className="h-5 w-5 mr-2 text-primary-600" />
                    <span>9:00 AM - 5:00 PM EAT</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Globe className="h-5 w-5 mr-2 text-primary-600" />
                    <span>Online & Kigali Venue</span>
                  </div>
                </div>
                <Link
                  href="/schedule"
                  className="block w-full text-center bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
                >
                  Register Now
                </Link>
              </div>
            </div>

            {/* Conference 2 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-r from-purple-600 to-purple-700 h-32 flex items-center justify-center">
                <Users className="h-16 w-16 text-white" />
              </div>
              <div className="p-6">
                <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-3">
                  Hybrid Event
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Youth Evangelism Summit</h3>
                <p className="text-gray-600 mb-4">
                  A dynamic gathering for youth leaders and students passionate about sharing the Gospel 
                  on campuses and communities.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-700">
                    <Calendar className="h-5 w-5 mr-2 text-purple-600" />
                    <span>April 5-6, 2025</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Clock className="h-5 w-5 mr-2 text-purple-600" />
                    <span>10:00 AM - 6:00 PM EAT</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Globe className="h-5 w-5 mr-2 text-purple-600" />
                    <span>Online & Multiple Cities</span>
                  </div>
                </div>
                <Link
                  href="/schedule"
                  className="block w-full text-center bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                >
                  Register Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Weekly Webinars */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Weekly Webinars</h2>
            <p className="text-lg text-gray-600">Join our regular online sessions every week</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <Video className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Tuesday Q&A Sessions</h3>
              <p className="text-gray-600 mb-3">
                Ask your toughest questions about faith, theology, and apologetics
              </p>
              <p className="text-sm text-gray-500">Every Tuesday, 7:00 PM EAT</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Thursday Bible Study</h3>
              <p className="text-gray-600 mb-3">
                Deep dive into Scripture with interactive discussion and teaching
              </p>
              <p className="text-sm text-gray-500">Every Thursday, 6:00 PM EAT</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Globe className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Sunday Worship Online</h3>
              <p className="text-gray-600 mb-3">
                Join our online worship service with teaching and fellowship
              </p>
              <p className="text-sm text-gray-500">Every Sunday, 9:00 AM EAT</p>
            </div>
          </div>
        </div>
      </section>

      {/* Past Recordings */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Past Conference Recordings</h2>
            <p className="text-lg text-gray-600">Watch recordings of our previous events</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { title: 'Apologetics Conference 2024', duration: '12 hours', sessions: 15 },
              { title: 'Leadership Summit 2024', duration: '8 hours', sessions: 10 },
              { title: 'Evangelism Training 2024', duration: '10 hours', sessions: 12 },
              { title: 'Youth Ministry Conference', duration: '6 hours', sessions: 8 },
              { title: 'Street Kids Outreach Summit', duration: '5 hours', sessions: 6 },
              { title: 'Pastoral Training Workshop', duration: '14 hours', sessions: 18 }
            ].map((event, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-center w-full h-32 bg-gray-200 rounded-lg mb-4">
                  <Play className="h-12 w-12 text-gray-400" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{event.title}</h3>
                <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                  <span>{event.sessions} Sessions</span>
                  <span>{event.duration}</span>
                </div>
                <Link
                  href="/courses"
                  className="block w-full text-center bg-gray-200 text-gray-700 py-2 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
                >
                  Watch Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-primary-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Never Miss an Event
            </h2>
            <p className="text-xl mb-8 text-primary-100">
              Register for upcoming conferences and get notified about new webinars
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/schedule"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-700 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
              >
                View Schedule
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



