import { Calendar, Clock, MapPin, Users, Filter, ChevronRight } from 'lucide-react'

export default function ActivitiesPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-600 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Calendar className="h-10 w-10" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Activities Plan</h1>
            <p className="text-xl text-indigo-100">
              View our upcoming ministry activities, events, and programs
            </p>
          </div>
        </div>
      </section>

      {/* Month Selector */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 items-center justify-center">
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg font-semibold">
              This Month
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200">
              January 2025
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200">
              February 2025
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200">
              March 2025
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200">
              April 2025
            </button>
          </div>
        </div>
      </section>

      {/* This Week */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">This Week's Activities</h2>
          
          <div className="max-w-5xl mx-auto space-y-6">
            {/* Activity 1 */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-primary-600 hover:shadow-xl transition-shadow">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <Calendar className="h-6 w-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Tuesday Q&A Webinar</h3>
                      <p className="text-sm text-gray-600">Weekly Session</p>
                    </div>
                  </div>
                  <div className="ml-15 space-y-2">
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>Tuesday, Jan 21 • 7:00 PM - 8:30 PM EAT</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>Online via Zoom</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Users className="h-4 w-4 mr-2" />
                      <span>45 registered</span>
                    </div>
                  </div>
                </div>
                <button className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors whitespace-nowrap">
                  Join Session
                </button>
              </div>
            </div>

            {/* Activity 2 */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-600 hover:shadow-xl transition-shadow">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <Users className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Campus Fellowship - UR</h3>
                      <p className="text-sm text-gray-600">Campus Evangelism</p>
                    </div>
                  </div>
                  <div className="ml-15 space-y-2">
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>Wednesday, Jan 22 • 5:00 PM - 7:00 PM EAT</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>University of Rwanda, Kigali</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Users className="h-4 w-4 mr-2" />
                      <span>80 expected attendees</span>
                    </div>
                  </div>
                </div>
                <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors whitespace-nowrap">
                  Get Details
                </button>
              </div>
            </div>

            {/* Activity 3 */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-orange-600 hover:shadow-xl transition-shadow">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                      <Users className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Street Kids Outreach</h3>
                      <p className="text-sm text-gray-600">Community Service</p>
                    </div>
                  </div>
                  <div className="ml-15 space-y-2">
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>Saturday, Jan 25 • 9:00 AM - 1:00 PM EAT</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>Downtown Kigali</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Users className="h-4 w-4 mr-2" />
                      <span>15 volunteers needed</span>
                    </div>
                  </div>
                </div>
                <button className="bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors whitespace-nowrap">
                  Volunteer
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Upcoming Major Events</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <div className="bg-gradient-to-r from-primary-600 to-primary-700 px-6 py-8 text-white">
                <div className="text-center">
                  <div className="text-5xl font-bold mb-2">15-17</div>
                  <div className="text-xl">March 2025</div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Apologetics Conference 2025</h3>
                <p className="text-gray-600 mb-4">
                  3-day conference with renowned speakers covering God's existence, resurrection evidence, and more.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>Kigali Convention Center & Online</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="h-4 w-4 mr-2" />
                    <span>500+ expected attendees</span>
                  </div>
                </div>
                <button className="w-full bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
                  Register Now
                </button>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <div className="bg-gradient-to-r from-purple-600 to-purple-700 px-6 py-8 text-white">
                <div className="text-center">
                  <div className="text-5xl font-bold mb-2">5-6</div>
                  <div className="text-xl">April 2025</div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Youth Evangelism Summit</h3>
                <p className="text-gray-600 mb-4">
                  Empowering young leaders with tools and training for effective campus evangelism.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>Multiple Cities & Online</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="h-4 w-4 mr-2" />
                    <span>300+ expected attendees</span>
                  </div>
                </div>
                <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                  Register Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regular Programs */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Regular Programs</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
              <div className="text-center mb-4">
                <div className="text-2xl font-bold text-blue-600 mb-1">Every Tuesday</div>
                <div className="text-gray-600">7:00 PM EAT</div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">Q&A Sessions</h3>
              <p className="text-gray-600 text-center mb-4">
                Ask your toughest questions about faith and theology
              </p>
              <button className="w-full text-blue-600 font-semibold hover:text-blue-700">
                View Details →
              </button>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6">
              <div className="text-center mb-4">
                <div className="text-2xl font-bold text-green-600 mb-1">Every Thursday</div>
                <div className="text-gray-600">6:00 PM EAT</div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">Bible Study</h3>
              <p className="text-gray-600 text-center mb-4">
                Deep dive into Scripture with interactive discussion
              </p>
              <button className="w-full text-green-600 font-semibold hover:text-green-700">
                View Details →
              </button>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6">
              <div className="text-center mb-4">
                <div className="text-2xl font-bold text-orange-600 mb-1">Every Saturday</div>
                <div className="text-gray-600">9:00 AM EAT</div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">Street Outreach</h3>
              <p className="text-gray-600 text-center mb-4">
                Serving vulnerable children with food and the Gospel
              </p>
              <button className="w-full text-orange-600 font-semibold hover:text-orange-700">
                View Details →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-indigo-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Stay Updated
            </h2>
            <p className="text-xl mb-8 text-indigo-100">
              Subscribe to get notifications about new activities and events
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900"
              />
              <button className="px-8 py-3 bg-white text-indigo-700 rounded-lg font-semibold hover:bg-indigo-50 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

