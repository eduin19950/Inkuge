'use client'

import Link from 'next/link'
import { GraduationCap, Users, BookOpen, Award, ArrowRight, ChevronDown, ChevronUp, Video, Camera, Heart, CalendarDays, DollarSign } from 'lucide-react'
import { useState } from 'react'

export default function LeadershipPage() {
  const [expandedTopic, setExpandedTopic] = useState<number | null>(null)

  const toggleTopic = (index: number) => {
    setExpandedTopic(expandedTopic === index ? null : index)
  }

  const topics = [
    {
      title: '1. Biblical Theology & Doctrine',
      color: 'green-600',
      items: [
        'Systematic Theology',
        'Old Testament Survey',
        'New Testament Survey',
        'Biblical Hermeneutics',
        'Church History',
        'Apologetics for Leaders'
      ]
    },
    {
      title: '2. Pastoral Ministry Skills',
      color: 'blue-600',
      items: [
        'Expository Preaching',
        'Teaching Methods',
        'Pastoral Counseling',
        'Shepherding the Flock',
        'Church Discipline',
        'Crisis Management'
      ]
    },
    {
      title: '3. Leadership Development',
      color: 'purple-600',
      items: [
        'Vision Casting & Strategic Planning',
        'Team Building & Delegation',
        'Conflict Resolution',
        'Decision Making',
        'Change Management',
        'Developing Future Leaders'
      ]
    },
    {
      title: '4. Church Administration',
      color: 'indigo-600',
      items: [
        'Church Governance',
        'Financial Stewardship',
        'Legal & Ethical Issues',
        'Staff Management',
        'Volunteer Coordination',
        'Building & Facilities'
      ]
    },
    {
      title: '5. Evangelism & Outreach',
      color: 'red-600',
      items: [
        'Gospel Presentation',
        'Community Engagement',
        'Cross-Cultural Ministry',
        'Church Planting',
        'Discipleship Strategies',
        'Mission Mobilization'
      ]
    },
    {
      title: '6. Spiritual Formation',
      color: 'orange-600',
      items: [
        'Personal Devotional Life',
        'Prayer & Fasting',
        'Spiritual Disciplines',
        'Character Development',
        'Avoiding Burnout',
        'Work-Life Balance'
      ]
    },
    {
      title: '7. Family & Marriage',
      color: 'pink-600',
      items: [
        'Marriage Enrichment',
        'Parenting as a Leader',
        'Family Worship',
        'Protecting Your Family',
        'Leading at Home',
        'Work-Life Integration'
      ]
    },
    {
      title: '8. Contemporary Issues',
      color: 'teal-600',
      items: [
        'Technology in Ministry',
        'Social Media Ethics',
        'Cultural Engagement',
        'Political Involvement',
        'Addressing Poverty',
        'Gender & Sexuality Issues'
      ]
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-green-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <GraduationCap className="h-10 w-10" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Pastors Leadership Training</h1>
            <p className="text-xl text-green-100">
              Equipping pastors and church leaders for effective 21st-century ministry
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Empowering Church Leaders</h2>
            <p className="text-lg text-gray-600 mb-6">
              Strong churches need strong leaders. Our Pastors Leadership Training program is designed 
              to equip pastors, elders, and church leaders with the theological knowledge, practical 
              skills, and spiritual formation needed to lead God's people effectively.
            </p>
            <p className="text-lg text-gray-600">
              Through online courses, in-person workshops, and ongoing mentorship, we provide 
              comprehensive training that addresses the unique challenges facing church leaders in 
              Rwanda today.
            </p>
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Training Programs
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="h-7 w-7 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Theological Education</h3>
              <p className="text-gray-600 mb-4">
                Bible study methods, systematic theology, hermeneutics, and biblical counseling.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Old & New Testament surveys</li>
                <li>• Doctrine and theology</li>
                <li>• Biblical interpretation</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-7 w-7 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Leadership Development</h3>
              <p className="text-gray-600 mb-4">
                Practical skills for leading a church and developing other leaders.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Vision casting and strategy</li>
                <li>• Team building and delegation</li>
                <li>• Conflict resolution</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <GraduationCap className="h-7 w-7 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Ministry Skills</h3>
              <p className="text-gray-600 mb-4">
                Practical training for various aspects of pastoral ministry.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Preaching and teaching</li>
                <li>• Pastoral counseling</li>
                <li>• Evangelism and outreach</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Award className="h-7 w-7 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Mentorship Program</h3>
              <p className="text-gray-600 mb-4">
                One-on-one coaching with experienced ministry leaders.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Personal spiritual growth</li>
                <li>• Ministry problem-solving</li>
                <li>• Leadership accountability</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Topics We Cover */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Curriculum & Topics
          </h2>
          <p className="text-center text-gray-600 mb-12">Click on any topic to see the detailed curriculum</p>
          
          <div className="max-w-6xl mx-auto space-y-4">
            {topics.map((topic, index) => (
              <div 
                key={index}
                className={`bg-white rounded-xl shadow-md border-l-4 border-${topic.color} overflow-hidden transition-all`}
              >
                <button
                  onClick={() => toggleTopic(index)}
                  className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-xl font-bold text-gray-900">{topic.title}</h3>
                  {expandedTopic === index ? (
                    <ChevronUp className="h-6 w-6 text-gray-600" />
                  ) : (
                    <ChevronDown className="h-6 w-6 text-gray-600" />
                  )}
                </button>
                
                {expandedTopic === index && (
                  <div className="px-6 pb-6 pt-0 animate-fadeIn">
                    <ul className="grid md:grid-cols-2 gap-3 text-gray-600">
                      {topic.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <span className="text-green-600 mr-2">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Format */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              How It Works
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">1</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Online Learning</h3>
                <p className="text-gray-600 text-sm">
                  Access video courses and materials at your own pace
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">2</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Live Sessions</h3>
                <p className="text-gray-600 text-sm">
                  Attend interactive webinars and workshops
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">3</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Mentorship</h3>
                <p className="text-gray-600 text-sm">
                  Connect with a mentor for ongoing support
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Our Ministry */}
      <section className="py-16 md:py-20 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Explore Our Ministry
          </h2>
          <p className="text-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto">
            Discover more about our leadership training ministry through videos, photos, testimonies, and more
          </p>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            <Link 
              href="/ministries/leadership/videos"
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all text-center group border border-gray-200"
            >
              <div className="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-red-600 transition-colors">
                <Video className="h-7 w-7 text-red-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Videos</h3>
              <p className="text-sm text-gray-600">Watch our ministry in action</p>
            </Link>

            <Link 
              href="/ministries/leadership/gallery"
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all text-center group border border-gray-200"
            >
              <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-600 transition-colors">
                <Camera className="h-7 w-7 text-purple-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Gallery</h3>
              <p className="text-sm text-gray-600">Browse event photos</p>
            </Link>

            <Link 
              href="/ministries/leadership/testimonies"
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all text-center group border border-gray-200"
            >
              <div className="w-14 h-14 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-teal-600 transition-colors">
                <Heart className="h-7 w-7 text-teal-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Testimonies</h3>
              <p className="text-sm text-gray-600">Read life stories</p>
            </Link>

            <Link 
              href="/ministries/leadership/activities"
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all text-center group border border-gray-200"
            >
              <div className="w-14 h-14 bg-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-indigo-600 transition-colors">
                <CalendarDays className="h-7 w-7 text-indigo-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Activities</h3>
              <p className="text-sm text-gray-600">See our schedule</p>
            </Link>

            <Link 
              href="/ministries/leadership/donate"
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

      {/* CTA */}
      <section className="py-16 md:py-20 bg-green-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Invest in Your Ministry
            </h2>
            <p className="text-xl mb-8 text-green-100">
              Join hundreds of pastors who are strengthening their leadership
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/courses"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-green-700 rounded-lg font-semibold hover:bg-green-50 transition-colors"
              >
                View Training Programs
                <ArrowRight className="ml-2 h-5 w-5" />
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

