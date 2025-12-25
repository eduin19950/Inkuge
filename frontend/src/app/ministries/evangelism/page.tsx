import Link from 'next/link'
import { Users, Calendar, Video, BookOpen, ArrowRight, Camera, Heart, CalendarDays, DollarSign } from 'lucide-react'

export default function EvangelismPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="h-10 w-10" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Campus & High School Evangelism</h1>
            <p className="text-xl text-primary-100">
              Reaching students in universities and high schools across Rwanda with the Gospel message
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-6">
              We are passionate about bringing the good news of Jesus Christ to students in campuses and 
              high schools throughout Rwanda. Through engaging events, conferences, and one-on-one 
              discipleship, we create opportunities for young people to encounter Christ and grow in 
              their faith.
            </p>
            <p className="text-lg text-gray-600">
              Our approach combines large-scale evangelistic events with intimate fellowship groups, 
              ensuring that every student has the chance to hear the Gospel and be discipled in a 
              community of believers.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            What We Do
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-7 w-7 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Campus Fellowships</h3>
              <p className="text-gray-600">
                Weekly fellowship meetings on university campuses where students gather for worship, 
                Bible study, and community building.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <Calendar className="h-7 w-7 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Evangelistic Conferences</h3>
              <p className="text-gray-600">
                Large-scale events featuring dynamic speakers, worship, and opportunities for students 
                to respond to the Gospel.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <Video className="h-7 w-7 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Online Sessions</h3>
              <p className="text-gray-600">
                Live-streamed Bible studies, Q&A sessions, and virtual conferences accessible to 
                students anywhere in Rwanda.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="h-7 w-7 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Discipleship Programs</h3>
              <p className="text-gray-600">
                One-on-one and small group discipleship to help new believers grow strong in their 
                faith and become disciple-makers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ministry Resources */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Explore Our Ministry
          </h2>
          <p className="text-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto">
            Discover more about our campus evangelism ministry through videos, photos, testimonies, and more
          </p>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            <Link 
              href="/ministries/evangelism/videos"
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all text-center group border border-gray-200"
            >
              <div className="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-red-600 transition-colors">
                <Video className="h-7 w-7 text-red-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Videos</h3>
              <p className="text-sm text-gray-600">Watch our ministry in action</p>
            </Link>

            <Link 
              href="/ministries/evangelism/gallery"
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all text-center group border border-gray-200"
            >
              <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-600 transition-colors">
                <Camera className="h-7 w-7 text-purple-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Gallery</h3>
              <p className="text-sm text-gray-600">Browse event photos</p>
            </Link>

            <Link 
              href="/ministries/evangelism/testimonies"
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all text-center group border border-gray-200"
            >
              <div className="w-14 h-14 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-teal-600 transition-colors">
                <Heart className="h-7 w-7 text-teal-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Testimonies</h3>
              <p className="text-sm text-gray-600">Read life stories</p>
            </Link>

            <Link 
              href="/ministries/evangelism/activities"
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all text-center group border border-gray-200"
            >
              <div className="w-14 h-14 bg-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-indigo-600 transition-colors">
                <CalendarDays className="h-7 w-7 text-indigo-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Activities</h3>
              <p className="text-sm text-gray-600">See our schedule</p>
            </Link>

            <Link 
              href="/ministries/evangelism/donate"
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all text-center group border border-gray-200"
            >
              <div className="w-14 h-14 bg-rose-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-rose-600 transition-colors">
                <DollarSign className="h-7 w-7 text-rose-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Donate</h3>
              <p className="text-sm text-gray-600">Support our work</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 md:py-20 bg-primary-600 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Impact</h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto text-center">
            <div>
              <div className="text-5xl font-bold mb-2">15+</div>
              <div className="text-primary-100">Campuses Reached</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">500+</div>
              <div className="text-primary-100">Students Engaged</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">50+</div>
              <div className="text-primary-100">Events Organized</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">100+</div>
              <div className="text-primary-100">Disciples Made</div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get Involved
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Whether you're a student looking to join a fellowship, a volunteer wanting to serve, 
              or a partner interested in supporting this ministry, we'd love to connect with you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/events"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors"
              >
                View Upcoming Events
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-gray-100 text-gray-900 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
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

