import Link from 'next/link'
import { BookOpen, Clock, Users, Award, CheckCircle, Star, Calendar, ArrowRight } from 'lucide-react'

export default function CoursesPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <BookOpen className="h-10 w-10" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Courses</h1>
            <p className="text-xl text-blue-100">
              Equip yourself with knowledge and skills for effective ministry through our comprehensive online courses
            </p>
          </div>
        </div>
      </section>

      {/* Course Categories */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Explore Our Courses
          </h2>
          <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Choose from our diverse range of courses designed for students, pastors, and ministry leaders
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Course 1 - Christian Apologetics */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">
                <BookOpen className="h-20 w-20 text-white" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-primary-100 text-primary-700 text-xs font-semibold rounded-full">
                    APOLOGETICS
                  </span>
                  <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                    BEGINNER
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Introduction to Christian Apologetics
                </h3>
                <p className="text-gray-600 mb-4">
                  Learn to defend your faith with reason, evidence, and compelling arguments
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>8 weeks • 3 hours/week</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="h-4 w-4 mr-2" />
                    <span>500+ students enrolled</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Award className="h-4 w-4 mr-2" />
                    <span>Certificate upon completion</span>
                  </div>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <span className="ml-2 text-sm text-gray-600">(4.9)</span>
                  </div>
                  <span className="text-2xl font-bold text-primary-600">Free</span>
                </div>
                <Link
                  href="/book-appointment"
                  className="block w-full text-center px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors"
                >
                  Enroll Now
                </Link>
              </div>
            </div>

            {/* Course 2 - Biblical Studies */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center">
                <BookOpen className="h-20 w-20 text-white" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-semibold rounded-full">
                    THEOLOGY
                  </span>
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-700 text-xs font-semibold rounded-full">
                    INTERMEDIATE
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Biblical Theology & Doctrine
                </h3>
                <p className="text-gray-600 mb-4">
                  Deep dive into systematic theology and essential Christian doctrines
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>12 weeks • 4 hours/week</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="h-4 w-4 mr-2" />
                    <span>350+ students enrolled</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Award className="h-4 w-4 mr-2" />
                    <span>Certificate upon completion</span>
                  </div>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <Star className="h-5 w-5 text-gray-300" />
                    <span className="ml-2 text-sm text-gray-600">(4.8)</span>
                  </div>
                  <span className="text-2xl font-bold text-purple-600">Free</span>
                </div>
                <Link
                  href="/book-appointment"
                  className="block w-full text-center px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                >
                  Enroll Now
                </Link>
              </div>
            </div>

            {/* Course 3 - Evangelism Training */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center">
                <BookOpen className="h-20 w-20 text-white" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                    EVANGELISM
                  </span>
                  <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                    BEGINNER
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Campus Evangelism Strategies
                </h3>
                <p className="text-gray-600 mb-4">
                  Practical methods for effective evangelism in university settings
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>6 weeks • 2 hours/week</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="h-4 w-4 mr-2" />
                    <span>600+ students enrolled</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Award className="h-4 w-4 mr-2" />
                    <span>Certificate upon completion</span>
                  </div>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <span className="ml-2 text-sm text-gray-600">(5.0)</span>
                  </div>
                  <span className="text-2xl font-bold text-green-600">Free</span>
                </div>
                <Link
                  href="/book-appointment"
                  className="block w-full text-center px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  Enroll Now
                </Link>
              </div>
            </div>

            {/* Course 4 - Leadership Development */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-orange-500 to-orange-700 flex items-center justify-center">
                <BookOpen className="h-20 w-20 text-white" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-orange-100 text-orange-700 text-xs font-semibold rounded-full">
                    LEADERSHIP
                  </span>
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-700 text-xs font-semibold rounded-full">
                    INTERMEDIATE
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Pastoral Leadership & Ministry
                </h3>
                <p className="text-gray-600 mb-4">
                  Develop essential leadership skills for church and ministry contexts
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>10 weeks • 3 hours/week</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="h-4 w-4 mr-2" />
                    <span>250+ students enrolled</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Award className="h-4 w-4 mr-2" />
                    <span>Certificate upon completion</span>
                  </div>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <span className="ml-2 text-sm text-gray-600">(4.9)</span>
                  </div>
                  <span className="text-2xl font-bold text-orange-600">Free</span>
                </div>
                <Link
                  href="/book-appointment"
                  className="block w-full text-center px-6 py-3 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700 transition-colors"
                >
                  Enroll Now
                </Link>
              </div>
            </div>

            {/* Course 5 - Church History */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-indigo-500 to-indigo-700 flex items-center justify-center">
                <BookOpen className="h-20 w-20 text-white" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-700 text-xs font-semibold rounded-full">
                    HISTORY
                  </span>
                  <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                    BEGINNER
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Church History & Reformation
                </h3>
                <p className="text-gray-600 mb-4">
                  Journey through 2000 years of Christian history and key theological movements
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>8 weeks • 3 hours/week</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="h-4 w-4 mr-2" />
                    <span>400+ students enrolled</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Award className="h-4 w-4 mr-2" />
                    <span>Certificate upon completion</span>
                  </div>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <Star className="h-5 w-5 text-gray-300" />
                    <span className="ml-2 text-sm text-gray-600">(4.7)</span>
                  </div>
                  <span className="text-2xl font-bold text-indigo-600">Free</span>
                </div>
                <Link
                  href="/book-appointment"
                  className="block w-full text-center px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
                >
                  Enroll Now
                </Link>
              </div>
            </div>

            {/* Course 6 - Outreach Ministry */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center">
                <BookOpen className="h-20 w-20 text-white" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-red-100 text-red-700 text-xs font-semibold rounded-full">
                    OUTREACH
                  </span>
                  <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                    BEGINNER
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Street Ministry & Community Outreach
                </h3>
                <p className="text-gray-600 mb-4">
                  Learn compassionate ministry to vulnerable populations and effective outreach
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>6 weeks • 2 hours/week</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="h-4 w-4 mr-2" />
                    <span>300+ students enrolled</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Award className="h-4 w-4 mr-2" />
                    <span>Certificate upon completion</span>
                  </div>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <span className="ml-2 text-sm text-gray-600">(4.9)</span>
                  </div>
                  <span className="text-2xl font-bold text-red-600">Free</span>
                </div>
                <Link
                  href="/book-appointment"
                  className="block w-full text-center px-6 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-colors"
                >
                  Enroll Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificate Program CTA */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary-600 to-purple-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-4">
                  <Award className="h-5 w-5" />
                  <span className="font-semibold">Featured Program</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  6-Month Certificate Program
                </h2>
                <p className="text-xl text-white/90 mb-6">
                  Complete comprehensive training in Christian apologetics, theology, and ministry leadership. Earn a recognized certificate and advance your ministry calling.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 mr-3 flex-shrink-0 mt-0.5" />
                    <span>24 comprehensive courses covering all ministry essentials</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 mr-3 flex-shrink-0 mt-0.5" />
                    <span>Live mentorship sessions with experienced ministry leaders</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 mr-3 flex-shrink-0 mt-0.5" />
                    <span>Practical ministry experience and field assignments</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 mr-3 flex-shrink-0 mt-0.5" />
                    <span>Recognized certificate upon successful completion</span>
                  </li>
                </ul>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/certificate-program"
                    className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-700 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                  <Link
                    href="/certificate-program"
                    className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white rounded-lg font-semibold hover:bg-white/10 transition-colors border-2 border-white"
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
              <div className="w-full md:w-auto">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="text-center mb-6">
                    <Award className="h-24 w-24 mx-auto mb-4" />
                    <div className="text-5xl font-bold mb-2">6</div>
                    <div className="text-xl">Months</div>
                  </div>
                  <div className="space-y-4 text-center">
                    <div className="border-t border-white/20 pt-4">
                      <div className="text-3xl font-bold">24</div>
                      <div className="text-sm text-white/80">Courses</div>
                    </div>
                    <div className="border-t border-white/20 pt-4">
                      <div className="text-3xl font-bold">100+</div>
                      <div className="text-sm text-white/80">Students</div>
                    </div>
                    <div className="border-t border-white/20 pt-4">
                      <div className="text-3xl font-bold">Free</div>
                      <div className="text-sm text-white/80">Tuition</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Features */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Why Learn With Us?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Expert Instructors</h3>
              <p className="text-gray-600">
                Learn from experienced pastors, theologians, and ministry leaders
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Flexible Learning</h3>
              <p className="text-gray-600">
                Study at your own pace with on-demand video lessons and resources
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Community Support</h3>
              <p className="text-gray-600">
                Join a vibrant community of learners and receive ongoing support
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Certified Training</h3>
              <p className="text-gray-600">
                Earn certificates recognized by churches and ministry organizations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to Start Learning?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of students growing in their faith and ministry calling
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book-appointment"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors"
              >
                Browse Courses
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
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



