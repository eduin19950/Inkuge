'use client'

import { Award, BookOpen, Calendar, CheckCircle, Clock, Users, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

interface Program {
  id: number
  title: string
  description: string
  start_date: string
  end_date: string
  status: string
  enrollment_open: boolean
  enrollment_deadline: string | null
  max_students: number | null
}

interface Module {
  id: number
  title: string
  description: string
  order: number
  duration_weeks: number
  learning_objectives: string
}

export default function CertificateProgramPage() {
  const [program, setProgram] = useState<Program | null>(null)
  const [modules, setModules] = useState<Module[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProgram = async () => {
      try {
        // Fetch the active or upcoming program
        const response = await fetch('https://api.apologeticsrwanda.org/api/certificate/programs/')
        const data = await response.json()
        const programs = Array.isArray(data) ? data : (data.results || [])
        
        // Get the first active or upcoming program
        const activeProgram = programs.find((p: Program) => 
          p.status === 'ACTIVE' || p.status === 'UPCOMING'
        ) || programs[0]
        
        if (activeProgram) {
          setProgram(activeProgram)
          
          // Fetch modules for this program
          const modulesResponse = await fetch(
            `https://api.apologeticsrwanda.org/api/certificate/programs/${activeProgram.id}/modules/`
          )
          const modulesData = await modulesResponse.json()
          setModules(Array.isArray(modulesData) ? modulesData : [])
        }
      } catch (error) {
        console.error('Error fetching program:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchProgram()
  }, [])

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Award className="h-10 w-10" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              6-Month Certificate Program
            </h1>
            <p className="text-xl text-purple-100 mb-8">
              In Christian Apologetics & Discipleship
            </p>
            {program && program.enrollment_open && (
              <Link
                href="#enroll"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-purple-600 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
              >
                Enroll Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* Program Overview */}
      {program && (
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                About the Program
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                {program.description}
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="bg-purple-50 rounded-xl p-6 text-center">
                  <Calendar className="h-10 w-10 text-purple-600 mx-auto mb-3" />
                  <div className="text-sm text-gray-600 mb-1">Duration</div>
                  <div className="text-xl font-bold text-gray-900">6 Months</div>
                </div>
                <div className="bg-purple-50 rounded-xl p-6 text-center">
                  <Users className="h-10 w-10 text-purple-600 mx-auto mb-3" />
                  <div className="text-sm text-gray-600 mb-1">Format</div>
                  <div className="text-xl font-bold text-gray-900">Hybrid</div>
                </div>
                <div className="bg-purple-50 rounded-xl p-6 text-center">
                  <Award className="h-10 w-10 text-purple-600 mx-auto mb-3" />
                  <div className="text-sm text-gray-600 mb-1">Certification</div>
                  <div className="text-xl font-bold text-gray-900">Official</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Program Modules */}
      {modules.length > 0 && (
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
                Program Curriculum
              </h2>
              
              <div className="space-y-6">
                {modules.map((module, index) => (
                  <div key={module.id} className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-purple-600 text-white rounded-lg flex items-center justify-center flex-shrink-0 font-bold text-lg">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-bold text-gray-900">{module.title}</h3>
                          <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">
                            {module.duration_weeks} {module.duration_weeks === 1 ? 'Week' : 'Weeks'}
                          </span>
                        </div>
                        <p className="text-gray-700 mb-4">{module.description}</p>
                        {module.learning_objectives && (
                          <div className="bg-purple-50 rounded-lg p-4">
                            <h4 className="font-semibold text-gray-900 mb-2">Learning Objectives:</h4>
                            <p className="text-sm text-gray-700">{module.learning_objectives}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* What You'll Learn */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              What You'll Learn
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: BookOpen,
                  title: 'Biblical Apologetics',
                  description: 'Learn to defend your faith using scripture, reason, and evidence'
                },
                {
                  icon: Users,
                  title: 'Discipleship Skills',
                  description: 'Develop practical skills for making and mentoring disciples'
                },
                {
                  icon: CheckCircle,
                  title: 'Leadership Development',
                  description: 'Grow as a Christian leader in your church and community'
                },
                {
                  icon: Clock,
                  title: 'Ministry Practice',
                  description: 'Gain hands-on experience through real ministry opportunities'
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-700">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Program Details */}
      {program && (
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
                Program Details
              </h2>
              
              <div className="bg-white rounded-xl p-8 shadow-md">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-bold text-gray-900 mb-4">Start Date</h3>
                    <p className="text-gray-700">{new Date(program.start_date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-4">End Date</h3>
                    <p className="text-gray-700">{new Date(program.end_date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                  </div>
                  {program.enrollment_deadline && (
                    <div>
                      <h3 className="font-bold text-gray-900 mb-4">Enrollment Deadline</h3>
                      <p className="text-gray-700">{new Date(program.enrollment_deadline).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                    </div>
                  )}
                  {program.max_students && (
                    <div>
                      <h3 className="font-bold text-gray-900 mb-4">Class Size</h3>
                      <p className="text-gray-700">Maximum {program.max_students} students</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Enrollment CTA */}
      {program && program.enrollment_open && (
        <section id="enroll" className="py-16 md:py-20 bg-purple-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Join?
              </h2>
              <p className="text-xl text-purple-100 mb-8">
                Transform your faith and equip yourself for ministry. Enrollment is now open!
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-purple-600 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
              >
                Apply Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <p className="mt-6 text-sm text-purple-200">
                Questions? Contact us at info@apologeticsrwanda.org
              </p>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}

