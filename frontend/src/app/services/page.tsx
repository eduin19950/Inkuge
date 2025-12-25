import Link from 'next/link'
import { Users, BookOpen, GraduationCap, Heart, Video, Calendar, Award, Download, ArrowRight } from 'lucide-react'

export default function ServicesPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-primary-100">
              Comprehensive digital ministry services designed to empower and equip believers
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Campus Evangelism */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-primary-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Campus & High School Evangelism</h2>
              <p className="text-gray-600 mb-6">
                Reaching students in universities and high schools across Rwanda with the Gospel message 
                through engaging events, conferences, and interactive sessions.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span className="text-gray-600">Weekly campus fellowships</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span className="text-gray-600">Large-scale evangelistic conferences</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span className="text-gray-600">One-on-one discipleship programs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span className="text-gray-600">Student leadership development</span>
                </li>
              </ul>
              <Link
                href="/ministries/evangelism"
                className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700"
              >
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            {/* Christian Apologetics */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-secondary-100 rounded-lg flex items-center justify-center mb-6">
                <BookOpen className="h-8 w-8 text-secondary-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Christian Apologetics Hub</h2>
              <p className="text-gray-600 mb-6">
                Training believers to defend their faith through reason, evidence, and biblical truth 
                in an increasingly skeptical world.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-secondary-600 mr-2">•</span>
                  <span className="text-gray-600">Apologetics conferences and seminars</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-600 mr-2">•</span>
                  <span className="text-gray-600">Online courses on defending the faith</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-600 mr-2">•</span>
                  <span className="text-gray-600">Resource library (books, videos, articles)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-600 mr-2">•</span>
                  <span className="text-gray-600">Interactive Q&A sessions</span>
                </li>
              </ul>
              <Link
                href="/ministries/apologetics"
                className="inline-flex items-center text-secondary-600 font-semibold hover:text-secondary-700"
              >
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            {/* Pastors Training */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <GraduationCap className="h-8 w-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Pastors Leadership Training</h2>
              <p className="text-gray-600 mb-6">
                Equipping pastors and church leaders with the skills, knowledge, and resources needed 
                for effective ministry in the 21st century.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span className="text-gray-600">Leadership development courses</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span className="text-gray-600">Theological education programs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span className="text-gray-600">Ministry strategy workshops</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span className="text-gray-600">Mentorship and coaching</span>
                </li>
              </ul>
              <Link
                href="/ministries/leadership"
                className="inline-flex items-center text-green-600 font-semibold hover:text-green-700"
              >
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            {/* Street Kids Ministry */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <Heart className="h-8 w-8 text-orange-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Street Kids Ministry</h2>
              <p className="text-gray-600 mb-6">
                Bringing hope, transformation, and the love of Christ to vulnerable children on the 
                streets of Rwanda through practical support and spiritual care.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">•</span>
                  <span className="text-gray-600">Regular street outreach programs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">•</span>
                  <span className="text-gray-600">Food and clothing distribution</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">•</span>
                  <span className="text-gray-600">Education and skills training</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">•</span>
                  <span className="text-gray-600">Rehabilitation and reintegration support</span>
                </li>
              </ul>
              <Link
                href="/ministries/street-kids"
                className="inline-flex items-center text-orange-600 font-semibold hover:text-orange-700"
              >
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Platform Features */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Digital Platform Features
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Modern technology powering effective ministry
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Video className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Live Streaming</h3>
              <p className="text-gray-600">
                YouTube Live and Jitsi integration for interactive conferences and webinars
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Event Management</h3>
              <p className="text-gray-600">
                Easy registration, scheduling, and management of all ministry events
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Certification System</h3>
              <p className="text-gray-600">
                Track progress and earn certificates through our structured programs
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Online Courses</h3>
              <p className="text-gray-600">
                Self-paced learning with video lessons, quizzes, and downloadable materials
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Download className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Resource Library</h3>
              <p className="text-gray-600">
                Extensive collection of PDFs, videos, and teaching materials
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Community</h3>
              <p className="text-gray-600">
                Interactive forums, discussions, and Q&A sessions with experts
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get Involved Today
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Whether you're a student, pastor, or supporter, there's a place for you in our ministry
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-700 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
            >
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/certificate-program"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white rounded-lg font-semibold hover:bg-white/10 transition-colors border-2 border-white"
            >
              View Certificate Program
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}



