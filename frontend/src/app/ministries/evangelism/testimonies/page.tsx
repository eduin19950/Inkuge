import { Heart, Quote, Star, Video } from 'lucide-react'

export default function TestimoniesPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-600 to-cyan-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="h-10 w-10" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Testimonies</h1>
            <p className="text-xl text-teal-100">
              Real stories of lives transformed by the Gospel through our ministry
            </p>
          </div>
        </div>
      </section>

      {/* Featured Testimony */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-8 md:p-12 shadow-xl">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0 text-white text-2xl font-bold">
                  JM
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">Jean Marie</h3>
                  <p className="text-gray-600">University of Rwanda Student</p>
                </div>
              </div>
              <Quote className="h-10 w-10 text-teal-600 mb-4" />
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                "I was struggling with doubts about Christianity when I attended the Apologetics Conference. 
                The evidence presented for the resurrection of Jesus completely changed my perspective. Now I'm 
                not only confident in my faith, but I'm also equipped to share it with others. I've led three of 
                my friends to Christ since then!"
              </p>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonies Grid */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            More Stories of Hope
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: 'Sarah K.',
                role: 'High School Student',
                category: 'Campus Evangelism',
                story: 'Through the campus fellowship, I found a community of believers who supported me. I learned how to share my faith boldly, and now I lead a Bible study group at my school.',
                initials: 'SK'
              },
              {
                name: 'Pastor David',
                role: 'Church Leader',
                category: 'Leadership Training',
                story: 'The leadership training equipped me with practical skills for ministry. My church has grown by 40% in the past year, and we\'ve started three new outreach programs.',
                initials: 'PD'
              },
              {
                name: 'Emmanuel R.',
                role: 'Former Street Kid',
                category: 'Street Kids Ministry',
                story: 'I was living on the streets when the team found me. They showed me Jesus\' love through food, education, and prayer. Now I\'m back in school and have a relationship with God.',
                initials: 'ER'
              },
              {
                name: 'Grace M.',
                role: 'University Graduate',
                category: 'Discipleship',
                story: 'The 6-month certificate program deepened my understanding of apologetics. I\'m now serving as a youth leader and helping young people defend their faith.',
                initials: 'GM'
              },
              {
                name: 'Patrick N.',
                role: 'Business Owner',
                category: 'Donor',
                story: 'Supporting this ministry has been one of the best decisions I\'ve made. Seeing the impact on young people\'s lives is incredibly rewarding. I encourage others to give.',
                initials: 'PN'
              },
              {
                name: 'Alice T.',
                role: 'Teacher',
                category: 'Volunteer',
                story: 'Volunteering with the street kids ministry opened my eyes to God\'s heart for the vulnerable. Every Saturday spent with these children is a blessing.',
                initials: 'AT'
              }
            ].map((testimony, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">
                    {testimony.initials}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{testimony.name}</h3>
                    <p className="text-sm text-gray-600">{testimony.role}</p>
                  </div>
                </div>
                <div className="inline-block px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-xs font-semibold mb-3">
                  {testimony.category}
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">{testimony.story}</p>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonies */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Video Testimonies
          </h2>
          <p className="text-lg text-gray-600 mb-12 text-center">
            Watch powerful testimony videos from our community
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { title: 'From Doubt to Faith', duration: '5:30', views: '2.3K' },
              { title: 'Street to Success', duration: '8:15', views: '4.1K' },
              { title: 'Campus Revival Story', duration: '6:45', views: '3.8K' }
            ].map((video, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <div className="relative aspect-video bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center cursor-pointer group">
                  <Video className="h-12 w-12 text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                  <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-xs font-semibold">
                    {video.duration}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-900 mb-2">{video.title}</h3>
                  <p className="text-sm text-gray-600">{video.views} views</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-16 md:py-20 bg-teal-600 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Impact</h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto text-center">
            <div>
              <div className="text-5xl font-bold mb-2">500+</div>
              <div className="text-teal-100">Lives Transformed</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">50+</div>
              <div className="text-teal-100">Churches Planted</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">200+</div>
              <div className="text-teal-100">Leaders Trained</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">1000+</div>
              <div className="text-teal-100">Students Reached</div>
            </div>
          </div>
        </div>
      </section>

      {/* Submit Testimony CTA */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Share Your Story
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Has God worked in your life through this ministry? We'd love to hear your testimony!
            </p>
            <button className="px-8 py-4 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 transition-colors">
              Submit Your Testimony
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

