import { Target, Eye, Heart, Users, Award, Globe } from 'lucide-react'

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About Us</h1>
            <p className="text-xl text-primary-100">
              Learn about our mission, vision, and the heart behind Inkuge
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-primary-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                To empower young people in Rwanda through evangelism, Christian apologetics, and discipleship. 
                We create a digital space where students, pastors, and communities can access quality Christian 
                education, engage in meaningful discussions, and grow in their faith while defending it through 
                reason and evidence.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mb-6">
                <Eye className="h-8 w-8 text-secondary-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed">
                To become the leading digital ministry platform in Rwanda and East Africa, 
                creating a generation of well-equipped Christians who can defend their faith, 
                lead with wisdom, and transform their communities with the love of Christ. 
                We envision a future where every student, pastor, and believer has access to 
                world-class Christian education.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">Our Story</h2>
            <div className="prose prose-lg mx-auto text-gray-600">
              <p className="mb-6">
                Inkuge was born out of a passion to see young people in Rwanda equipped 
                with the knowledge and confidence to defend their Christian faith. We recognized that 
                many students and young believers were facing tough questions about Christianity but 
                lacked the resources to find solid, biblical answers.
              </p>
              <p className="mb-6">
                What started as small campus gatherings has grown into a comprehensive digital ministry 
                platform that serves thousands across Rwanda. We've expanded our reach to include not 
                just campus evangelism, but also pastoral training, street kids outreach, and a 
                structured certificate program in Christian apologetics and discipleship.
              </p>
              <p>
                Today, we continue to innovate and expand our services, leveraging technology to bring 
                quality Christian education to every corner of Rwanda and beyond. Our journey is guided 
                by prayer, powered by dedication, and fueled by the transformative power of the Gospel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Love & Compassion</h3>
              <p className="text-gray-600">
                We approach every person with the love of Christ, showing compassion to all regardless 
                of their background or beliefs.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Excellence</h3>
              <p className="text-gray-600">
                We are committed to providing the highest quality education and resources to help 
                believers grow and mature in their faith.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Community</h3>
              <p className="text-gray-600">
                We believe in the power of community, creating spaces where believers can connect, 
                learn together, and support one another.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Global Impact</h3>
              <p className="text-gray-600">
                While rooted in Rwanda, we dream of making a global impact, sharing resources and 
                knowledge that transcend borders.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Biblical Truth</h3>
              <p className="text-gray-600">
                Everything we teach is grounded in Scripture, maintaining theological integrity 
                while addressing contemporary issues.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation</h3>
              <p className="text-gray-600">
                We embrace technology and creative methods to reach people where they are in 
                today's digital world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section (Placeholder) */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">Our Team</h2>
          <p className="text-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto">
            A dedicated team of pastors, educators, and ministry leaders committed to serving God's kingdom
          </p>
          <div className="text-center">
            <p className="text-gray-600 mb-8">Meet our leadership team coming soon...</p>
            {/* Add team member cards here when ready */}
          </div>
        </div>
      </section>
    </div>
  )
}

