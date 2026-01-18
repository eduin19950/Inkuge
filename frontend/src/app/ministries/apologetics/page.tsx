'use client'

import Link from 'next/link'
import { BookOpen, Video, Users, Download, ArrowRight, ChevronDown, ChevronUp, Camera, Heart, CalendarDays, DollarSign } from 'lucide-react'
import { useState } from 'react'

export default function ApologeticsPage() {
  const [expandedTopic, setExpandedTopic] = useState<number | null>(null)

  const toggleTopic = (index: number) => {
    setExpandedTopic(expandedTopic === index ? null : index)
  }

  const topics = [
    {
      title: '1. Existence of God',
      color: 'secondary-600',
      items: [
        'Cosmological Argument (First Cause)',
        'Teleological Argument (Design/Fine-Tuning)',
        'Moral Argument',
        'Ontological Argument',
        'Argument from Consciousness',
        'Why something rather than nothing?'
      ]
    },
    {
      title: '2. Reliability of the Bible',
      color: 'blue-600',
      items: [
        'Manuscript evidence & textual transmission',
        'Archaeological support',
        'Internal consistency',
        'Fulfilled prophecy',
        'Canon formation',
        'Alleged contradictions explained'
      ]
    },
    {
      title: '3. Jesus Christ',
      color: 'green-600',
      items: [
        'Historical evidence for Jesus',
        'The Resurrection (minimal facts approach)',
        'Jesus\' claims to deity',
        'Trilemma: Lord, Liar, or Lunatic',
        'Why Jesus over other religious founders?'
      ]
    },
    {
      title: '4. Science & Faith',
      color: 'purple-600',
      items: [
        'Big Bang and creation',
        'Evolution vs. creation (various models)',
        'Fine-tuning of the universe',
        'Miracles and natural laws',
        'Are science and faith compatible?'
      ]
    },
    {
      title: '5. Philosophy & Worldviews',
      color: 'orange-600',
      items: [
        'Naturalism vs. Theism',
        'Objective vs. subjective morality',
        'Meaning, purpose, and value',
        'Problem of evil and suffering',
        'Free will and determinism'
      ]
    },
    {
      title: '6. Problem of Evil & Suffering',
      color: 'red-600',
      items: [
        'Logical vs. evidential problem of evil',
        'Why a good God allows suffering',
        'Moral evil vs. natural evil',
        'Hiddenness of God',
        'Emotional vs. intellectual suffering'
      ]
    },
    {
      title: '7. Competing Religions & Cults',
      color: 'pink-600',
      items: [
        'Christianity vs. Islam',
        'Christianity vs. Judaism',
        'Christianity vs. Hinduism/Buddhism',
        'Mormonism, Jehovah\'s Witnesses',
        'Religious pluralism ("all religions lead to God")'
      ]
    },
    {
      title: '8. Ethics & Culture',
      color: 'teal-600',
      items: [
        'Objective moral values',
        'Abortion',
        'Euthanasia',
        'Sexual ethics',
        'Human dignity and the image of God'
      ]
    },
    {
      title: '9. Salvation & Theology',
      color: 'indigo-600',
      items: [
        'Faith vs. works',
        'Exclusivity of Christ',
        'Hell and justice',
        'Grace and atonement theories',
        'Trinity explained and defended'
      ]
    },
    {
      title: '10. Common Objections to Christianity',
      color: 'yellow-600',
      items: [
        '"The Bible was written by men"',
        '"Christianity causes violence"',
        '"Christians are hypocrites"',
        '"God is a crutch"',
        '"Miracles are impossible"'
      ]
    },
    {
      title: '11. Practical Apologetics',
      color: 'cyan-600',
      items: [
        'Conversational apologetics',
        'Answering skeptics respectfully',
        'Apologetics for youth',
        'Online apologetics',
        'Testimony vs. evidence'
      ]
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary-600 to-secondary-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <BookOpen className="h-10 w-10" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Christian Apologetics Hub</h1>
            <p className="text-xl text-secondary-100">
              Defending the Christian faith through reason, evidence, and biblical truth
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Apologetics?</h2>
            <p className="text-lg text-gray-600 mb-6">
              In an increasingly skeptical world, Christians need to be equipped to give reasons for 
              the hope they have (1 Peter 3:15). Our Apologetics Hub provides training, resources, 
              and community for believers who want to defend their faith with gentleness and respect.
            </p>
            <p className="text-lg text-gray-600">
              We tackle tough questions about God's existence, the reliability of the Bible, the 
              resurrection of Jesus, suffering and evil, and more—all while maintaining a commitment 
              to both truth and love.
            </p>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            What We Offer
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="w-14 h-14 bg-secondary-100 rounded-lg flex items-center justify-center mb-4">
                <Video className="h-7 w-7 text-secondary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Online Courses</h3>
              <p className="text-gray-600">
                Comprehensive video courses covering topics like: Existence of God, Problem of Evil, 
                Historical Jesus, Bible Reliability, and more.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="w-14 h-14 bg-secondary-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-7 w-7 text-secondary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Live Seminars</h3>
              <p className="text-gray-600">
                Interactive webinars and conferences featuring expert apologists addressing 
                contemporary challenges to Christianity.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="w-14 h-14 bg-secondary-100 rounded-lg flex items-center justify-center mb-4">
                <Download className="h-7 w-7 text-secondary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Resource Library</h3>
              <p className="text-gray-600">
                Access to books, articles, videos, and study guides on apologetics topics—all 
                available for download.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="w-14 h-14 bg-secondary-100 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="h-7 w-7 text-secondary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Q&A Sessions</h3>
              <p className="text-gray-600">
                Regular interactive sessions where you can ask your toughest questions and get 
                thoughtful biblical answers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Topics We Cover */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Topics We Cover
          </h2>
          <p className="text-center text-gray-600 mb-12">Click on any topic to see detailed subtopics</p>
          
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
                          <span className="text-secondary-600 mr-2">•</span>
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

      {/* Explore Our Ministry */}
      <section className="py-16 md:py-20 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Explore Our Ministry
          </h2>
          <p className="text-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto">
            Discover more about our apologetics ministry through videos, photos, testimonies, and more
          </p>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            <Link 
              href="/ministries/apologetics/videos"
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all text-center group border border-gray-200"
            >
              <div className="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-red-600 transition-colors">
                <Video className="h-7 w-7 text-red-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Videos</h3>
              <p className="text-sm text-gray-600">Watch our ministry in action</p>
            </Link>

            <Link 
              href="/ministries/apologetics/gallery"
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all text-center group border border-gray-200"
            >
              <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-600 transition-colors">
                <Camera className="h-7 w-7 text-purple-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Gallery</h3>
              <p className="text-sm text-gray-600">Browse event photos</p>
            </Link>

            <Link 
              href="/ministries/apologetics/testimonies"
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all text-center group border border-gray-200"
            >
              <div className="w-14 h-14 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-teal-600 transition-colors">
                <Heart className="h-7 w-7 text-teal-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Testimonies</h3>
              <p className="text-sm text-gray-600">Read life stories</p>
            </Link>

            <Link 
              href="/ministries/apologetics/activities"
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all text-center group border border-gray-200"
            >
              <div className="w-14 h-14 bg-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-indigo-600 transition-colors">
                <CalendarDays className="h-7 w-7 text-indigo-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Activities</h3>
              <p className="text-sm text-gray-600">See our schedule</p>
            </Link>

            <Link 
              href="/ministries/apologetics/donate"
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
      <section className="py-16 md:py-20 bg-secondary-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Start Your Apologetics Journey
            </h2>
            <p className="text-xl mb-8 text-secondary-100">
              Equip yourself to defend your faith with confidence and grace
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/courses"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-secondary-700 rounded-lg font-semibold hover:bg-secondary-50 transition-colors"
              >
                Browse Courses
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white rounded-lg font-semibold hover:bg-white/10 transition-colors border-2 border-white"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

