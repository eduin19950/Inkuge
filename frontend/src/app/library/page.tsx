import Link from 'next/link'
import { BookOpen, Download, Video, FileText, Headphones, Search } from 'lucide-react'

export default function LibraryPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-teal-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <BookOpen className="h-10 w-10" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Resource Library</h1>
            <p className="text-xl text-green-100">
              Access a wealth of Christian resources including books, articles, videos, and audio teachings
            </p>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search resources by title, author, or topic..."
                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="text-sm text-gray-600">Popular topics:</span>
              {['Apologetics', 'Evangelism', 'Theology', 'Ministry', 'Discipleship'].map((topic) => (
                <button
                  key={topic}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors"
                >
                  {topic}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Browse by Category
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="w-14 h-14 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Books</h3>
              <p className="text-gray-600 mb-3">Digital books and e-books on theology, apologetics, and ministry</p>
              <p className="text-2xl font-bold text-blue-600">125+</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="w-14 h-14 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                <Video className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Video Teachings</h3>
              <p className="text-gray-600 mb-3">Recorded sermons, lectures, and teaching series</p>
              <p className="text-2xl font-bold text-purple-600">200+</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="w-14 h-14 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                <FileText className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Articles</h3>
              <p className="text-gray-600 mb-3">In-depth articles on Christian doctrine and apologetics</p>
              <p className="text-2xl font-bold text-green-600">350+</p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="w-14 h-14 bg-orange-600 rounded-lg flex items-center justify-center mb-4">
                <Headphones className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Audio</h3>
              <p className="text-gray-600 mb-3">Podcasts, audiobooks, and sermon recordings</p>
              <p className="text-2xl font-bold text-orange-600">180+</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Featured Resources
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-40 bg-gradient-to-r from-primary-600 to-primary-700 flex items-center justify-center">
                <BookOpen className="h-16 w-16 text-white" />
              </div>
              <div className="p-6">
                <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold mb-3">
                  BOOK
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Reasonable Faith: Christian Truth and Apologetics
                </h3>
                <p className="text-gray-600 mb-4">
                  By William Lane Craig - A comprehensive guide to defending the Christian faith
                </p>
                <button className="flex items-center text-primary-600 font-semibold hover:text-primary-700">
                  <Download className="h-4 w-4 mr-2" />
                  Download PDF
                </button>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-40 bg-gradient-to-r from-purple-600 to-purple-700 flex items-center justify-center">
                <Video className="h-16 w-16 text-white" />
              </div>
              <div className="p-6">
                <div className="inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-semibold mb-3">
                  VIDEO SERIES
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Evidence for the Resurrection
                </h3>
                <p className="text-gray-600 mb-4">
                  12-part video series examining historical evidence for Christ's resurrection
                </p>
                <button className="flex items-center text-purple-600 font-semibold hover:text-purple-700">
                  <Video className="h-4 w-4 mr-2" />
                  Watch Series
                </button>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-40 bg-gradient-to-r from-green-600 to-green-700 flex items-center justify-center">
                <Headphones className="h-16 w-16 text-white" />
              </div>
              <div className="p-6">
                <div className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold mb-3">
                  PODCAST
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Apologetics on the Go
                </h3>
                <p className="text-gray-600 mb-4">
                  Weekly podcast answering common objections to Christianity
                </p>
                <button className="flex items-center text-green-600 font-semibold hover:text-green-700">
                  <Headphones className="h-4 w-4 mr-2" />
                  Listen Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Study Guides */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Study Guides & Curriculum
          </h2>
          <p className="text-lg text-gray-600 mb-12 text-center">
            Structured resources for small groups and personal study
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Introduction to Apologetics</h3>
              <p className="text-gray-600 mb-4">
                8-week study guide covering foundational apologetics topics
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">8 Lessons • Study Guide</span>
                <button className="text-primary-600 font-semibold hover:text-primary-700">
                  Download
                </button>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Campus Evangelism Training</h3>
              <p className="text-gray-600 mb-4">
                Complete curriculum for training student evangelists
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">12 Lessons • Curriculum</span>
                <button className="text-primary-600 font-semibold hover:text-primary-700">
                  Download
                </button>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Discipleship Fundamentals</h3>
              <p className="text-gray-600 mb-4">
                Essential guide for making disciples and spiritual growth
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">10 Lessons • Study Guide</span>
                <button className="text-primary-600 font-semibold hover:text-primary-700">
                  Download
                </button>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Leadership Development</h3>
              <p className="text-gray-600 mb-4">
                Training materials for developing ministry leaders
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">15 Lessons • Curriculum</span>
                <button className="text-primary-600 font-semibold hover:text-primary-700">
                  Download
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-green-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Contribute to Our Library
            </h2>
            <p className="text-xl mb-8 text-green-100">
              Have a resource to share? Help us grow our library for the benefit of others
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-green-700 rounded-lg font-semibold hover:bg-green-50 transition-colors"
            >
              Submit a Resource
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}



