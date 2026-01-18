'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Calendar, Clock, MapPin, Users, Video } from 'lucide-react'

type EventCategory = 'all' | 'conferences' | 'webinars' | 'workshops' | 'community'

export default function EventsPage() {
  const [selectedCategory, setSelectedCategory] = useState<EventCategory>('all')

  const events = [
    {
      id: 1,
      title: 'Apologetics Conference 2025',
      description: 'Defending the Faith in the Modern World - A comprehensive conference featuring international speakers',
      date: 'March 15-17, 2025',
      dateNum: '15-17',
      dateMonth: 'March 2025',
      duration: '3-Day Conference',
      time: '9:00 AM - 5:00 PM EAT',
      location: 'Kigali Convention Center & Online',
      attendees: '500+ Expected Attendees',
      category: ['conferences'],
      color: 'primary',
      gradient: 'from-primary-500 to-primary-700'
    },
    {
      id: 2,
      title: 'Youth Evangelism Summit',
      description: 'Empowering the next generation to share the Gospel effectively on campus and beyond',
      date: 'April 5-6, 2025',
      dateNum: '05-06',
      dateMonth: 'April 2025',
      duration: '2-Day Summit',
      time: '10:00 AM - 6:00 PM EAT',
      location: 'Multiple Cities & Online',
      attendees: '300+ Expected Attendees',
      category: ['conferences', 'community'],
      color: 'purple',
      gradient: 'from-purple-500 to-purple-700'
    },
    {
      id: 3,
      title: 'Pastoral Training Webinar Series',
      description: 'Weekly online training sessions for church leaders covering theology, leadership, and practical ministry skills',
      date: 'Every Thursday',
      dateNum: 'Thu',
      dateMonth: 'Weekly',
      duration: 'Weekly Webinar',
      time: '6:00 PM - 8:00 PM EAT',
      location: 'Online via Zoom',
      attendees: 'Open to All Pastors & Leaders',
      category: ['webinars'],
      color: 'green',
      gradient: 'from-green-500 to-green-700'
    },
    {
      id: 4,
      title: 'Street Ministry Training Workshop',
      description: 'Practical training for effective outreach to vulnerable children and youth on the streets',
      date: 'May 20, 2025',
      dateNum: '20',
      dateMonth: 'May 2025',
      duration: '1-Day Workshop',
      time: '9:00 AM - 4:00 PM EAT',
      location: 'Apologetics Rwanda Ministry Center, Kigali',
      attendees: 'Limited to 50 Participants',
      category: ['workshops'],
      color: 'orange',
      gradient: 'from-orange-500 to-orange-700'
    }
  ]

  const filteredEvents = selectedCategory === 'all' 
    ? events 
    : events.filter(event => event.category.includes(selectedCategory))

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 to-indigo-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Calendar className="h-10 w-10" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Events</h1>
            <p className="text-xl text-purple-100">
              Join us for conferences, webinars, workshops, and community gatherings
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            <button 
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                selectedCategory === 'all'
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
              }`}
            >
              All Events
            </button>
            <button 
              onClick={() => setSelectedCategory('conferences')}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                selectedCategory === 'conferences'
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
              }`}
            >
              Conferences
            </button>
            <button 
              onClick={() => setSelectedCategory('webinars')}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                selectedCategory === 'webinars'
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
              }`}
            >
              Webinars
            </button>
            <button 
              onClick={() => setSelectedCategory('workshops')}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                selectedCategory === 'workshops'
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
              }`}
            >
              Workshops
            </button>
            <button 
              onClick={() => setSelectedCategory('community')}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                selectedCategory === 'community'
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
              }`}
            >
              Community
            </button>
          </div>
        </div>
      </section>

      {/* Events List */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            {selectedCategory === 'all' ? 'All Upcoming Events' : 
             selectedCategory === 'conferences' ? 'Conferences' :
             selectedCategory === 'webinars' ? 'Webinars' :
             selectedCategory === 'workshops' ? 'Workshops' :
             'Community Events'}
          </h2>
          <p className="text-center text-gray-600 mb-12">
            {filteredEvents.length} {filteredEvents.length === 1 ? 'event' : 'events'} found
          </p>

          {filteredEvents.length === 0 ? (
            <div className="max-w-2xl mx-auto text-center py-12">
              <Calendar className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">No events found</h3>
              <p className="text-gray-600 mb-6">
                There are no {selectedCategory} events scheduled at this time.
              </p>
              <button
                onClick={() => setSelectedCategory('all')}
                className="px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors"
              >
                View All Events
              </button>
            </div>
          ) : (
            <div className="max-w-5xl mx-auto space-y-6">
              {filteredEvents.map((event) => (
                <div key={event.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="md:flex">
                    <div className={`md:w-1/3 bg-gradient-to-br ${event.gradient} p-8 text-white flex flex-col justify-center items-center`}>
                      <div className="text-center">
                        <div className="text-5xl font-bold mb-2">{event.dateNum}</div>
                        <div className="text-xl">{event.dateMonth}</div>
                        <div className="mt-4 px-4 py-2 bg-white/20 rounded-full text-sm">
                          {event.duration}
                        </div>
                      </div>
                    </div>
                    <div className="md:w-2/3 p-8">
                      <div className="mb-4">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          {event.title}
                        </h3>
                        <p className="text-gray-600">
                          {event.description}
                        </p>
                      </div>
                      <div className="space-y-2 mb-6">
                        <div className="flex items-center text-gray-600">
                          <Clock className={`h-5 w-5 mr-3 text-${event.color}-600`} />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          {event.location.includes('Online') ? (
                            <Video className={`h-5 w-5 mr-3 text-${event.color}-600`} />
                          ) : (
                            <MapPin className={`h-5 w-5 mr-3 text-${event.color}-600`} />
                          )}
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Users className={`h-5 w-5 mr-3 text-${event.color}-600`} />
                          <span>{event.attendees}</span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-3">
                        <Link
                          href="/book-appointment"
                          className={`px-6 py-3 bg-${event.color}-600 text-white rounded-lg font-semibold hover:bg-${event.color}-700 transition-colors`}
                        >
                          {event.category.includes('webinars') ? 'Join Series' : 'Register Now'}
                        </Link>
                        <button className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                          {event.category.includes('webinars') ? 'View Schedule' : 'Learn More'}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Past Events */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Past Events
          </h2>

          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Christmas Outreach 2024
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  December 25, 2024
                </p>
                <p className="text-gray-600 mb-4">
                  Served 200+ street children with meals, gifts, and the Gospel message
                </p>
                <button className="text-primary-600 font-semibold hover:text-primary-700">
                  View Highlights →
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-purple-400 to-purple-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Leadership Summit 2024
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  November 10-12, 2024
                </p>
                <p className="text-gray-600 mb-4">
                  150 church leaders equipped with leadership and ministry skills
                </p>
                <button className="text-primary-600 font-semibold hover:text-primary-700">
                  View Highlights →
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-green-400 to-green-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Campus Revival Week
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  October 15-20, 2024
                </p>
                <p className="text-gray-600 mb-4">
                  500+ students reached across 10 universities with powerful revival meetings
                </p>
                <button className="text-primary-600 font-semibold hover:text-primary-700">
                  View Highlights →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-primary-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Stay Updated on Upcoming Events
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Subscribe to our newsletter to receive notifications about new events and opportunities
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="px-8 py-4 bg-white text-primary-700 rounded-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}






