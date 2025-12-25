'use client'

import Link from 'next/link'
import { Heart, Users, Utensils, GraduationCap, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'

export default function StreetKidsPage() {
  const [expandedTopic, setExpandedTopic] = useState<number | null>(null)

  const toggleTopic = (index: number) => {
    setExpandedTopic(expandedTopic === index ? null : index)
  }

  const topics = [
    {
      title: '1. Basic Needs Support',
      color: 'orange-600',
      items: [
        'Daily meal provision',
        'Clothing distribution',
        'Hygiene kits & personal care',
        'Medical care & first aid',
        'Shelter assistance',
        'Emergency relief'
      ]
    },
    {
      title: '2. Education & Literacy',
      color: 'blue-600',
      items: [
        'Basic literacy classes',
        'School enrollment support',
        'Tutoring & homework help',
        'School supplies provision',
        'Educational sponsorships',
        'Catch-up programs'
      ]
    },
    {
      title: '3. Vocational Training',
      color: 'purple-600',
      items: [
        'Skills training workshops',
        'Carpentry & construction',
        'Tailoring & sewing',
        'Agriculture & farming',
        'Small business training',
        'Job placement assistance'
      ]
    },
    {
      title: '4. Spiritual Development',
      color: 'green-600',
      items: [
        'Bible stories & teaching',
        'Worship & prayer sessions',
        'Discipleship programs',
        'Church integration',
        'Character formation',
        'Christian counseling'
      ]
    },
    {
      title: '5. Life Skills Training',
      color: 'indigo-600',
      items: [
        'Personal hygiene',
        'Money management',
        'Healthy relationships',
        'Conflict resolution',
        'Decision making',
        'Goal setting'
      ]
    },
    {
      title: '6. Rehabilitation & Reintegration',
      color: 'red-600',
      items: [
        'Family tracing & reunification',
        'Case management',
        'Trauma counseling',
        'Addiction recovery support',
        'Community reintegration',
        'Follow-up & monitoring'
      ]
    },
    {
      title: '7. Recreation & Sports',
      color: 'yellow-600',
      items: [
        'Sports activities',
        'Arts & crafts',
        'Music & drama',
        'Team building games',
        'Holiday camps',
        'Talent development'
      ]
    },
    {
      title: '8. Protection & Advocacy',
      color: 'pink-600',
      items: [
        'Child rights education',
        'Safety awareness',
        'Abuse prevention',
        'Legal support',
        'Advocacy campaigns',
        'Community sensitization'
      ]
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-600 to-orange-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="h-10 w-10" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Street Kids Ministry</h1>
            <p className="text-xl text-orange-100">
              Bringing hope, transformation, and the love of Christ to vulnerable children
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Heart for Street Kids</h2>
            <p className="text-lg text-gray-600 mb-6">
              Every child deserves to know they are loved, valued, and created for a purpose. Our Street 
              Kids Ministry reaches out to vulnerable children living on the streets of Rwanda with the 
              compassion of Christ, meeting their physical, emotional, and spiritual needs.
            </p>
            <p className="text-lg text-gray-600">
              Through regular outreach programs, we provide food, clothing, education, and most 
              importantly—the hope found in Jesus Christ. We walk alongside these precious children, 
              helping them discover their God-given potential and pathway to transformation.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            How We Serve
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Utensils className="h-7 w-7 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Food & Clothing</h3>
              <p className="text-gray-600">
                Regular distribution of nutritious meals and clothing to meet the basic needs of 
                children living on the streets.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <GraduationCap className="h-7 w-7 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Education & Skills</h3>
              <p className="text-gray-600">
                Literacy programs, vocational training, and life skills to empower children for a 
                better future.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Heart className="h-7 w-7 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Spiritual Care</h3>
              <p className="text-gray-600">
                Bible stories, worship, and discipleship to introduce children to Jesus and help 
                them grow in faith.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-7 w-7 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Rehabilitation</h3>
              <p className="text-gray-600">
                Support for reintegration into families and communities, including counseling and 
                case management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs & Services */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Our Programs & Services
          </h2>
          <p className="text-center text-gray-600 mb-12">Click on any program to see what we offer</p>
          
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
                          <span className="text-orange-600 mr-2">•</span>
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

      {/* Impact Stories */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Stories of Hope
          </h2>
          <p className="text-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto">
            See how God is transforming lives through this ministry
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="text-4xl font-bold text-orange-600 mb-2">200+</div>
              <div className="text-gray-900 font-semibold mb-1">Children Reached</div>
              <div className="text-sm text-gray-600">Through weekly outreach programs</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="text-4xl font-bold text-orange-600 mb-2">50+</div>
              <div className="text-gray-900 font-semibold mb-1">Lives Transformed</div>
              <div className="text-sm text-gray-600">Reintegrated into families or school</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="text-4xl font-bold text-orange-600 mb-2">1000+</div>
              <div className="text-gray-900 font-semibold mb-1">Meals Provided</div>
              <div className="text-sm text-gray-600">Nutritious meals served monthly</div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="py-16 md:py-20 bg-orange-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Join Us in Bringing Hope
            </h2>
            <p className="text-xl mb-8 text-orange-100">
              You can make a difference in the life of a vulnerable child
            </p>
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="bg-white/10 rounded-lg p-4">
                <h3 className="font-bold mb-2">Volunteer</h3>
                <p className="text-sm text-orange-100">Serve during outreach events</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <h3 className="font-bold mb-2">Donate</h3>
                <p className="text-sm text-orange-100">Support with food, clothes, or funds</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <h3 className="font-bold mb-2">Pray</h3>
                <p className="text-sm text-orange-100">Intercede for these precious children</p>
              </div>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-700 rounded-lg font-semibold hover:bg-orange-50 transition-colors"
            >
              Get Involved Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

