'use client'

import { useState } from 'react'
import { Calendar, Clock, User, Mail, Phone, MessageSquare, CheckCircle, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function BookAppointmentPage() {
  const [step, setStep] = useState(1)
  const [selectedService, setSelectedService] = useState('')
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')
  const [bookingComplete, setBookingComplete] = useState(false)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const services = [
    { id: 'counseling', name: 'Spiritual Counseling', duration: '60 min', icon: '🙏' },
    { id: 'partnership', name: 'Ministry Partnership', duration: '45 min', icon: '🤝' },
    { id: 'volunteer', name: 'Volunteer Orientation', duration: '30 min', icon: '👋' },
    { id: 'course', name: 'Course Consultation', duration: '20 min', icon: '📚' },
    { id: 'prayer', name: 'Prayer Session', duration: '30 min', icon: '✝️' },
    { id: 'general', name: 'General Inquiry', duration: '30 min', icon: '💬' }
  ]

  const availableDates = [
    '2025-01-20',
    '2025-01-21',
    '2025-01-22',
    '2025-01-23',
    '2025-01-24',
    '2025-01-27',
    '2025-01-28',
    '2025-01-29',
    '2025-01-30',
    '2025-01-31'
  ]

  const timeSlots = [
    '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM',
    '11:00 AM', '11:30 AM', '02:00 PM', '02:30 PM',
    '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM'
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setBookingComplete(true)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  if (bookingComplete) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Booking Confirmed!</h1>
            <p className="text-lg text-gray-600 mb-6">
              Your appointment has been successfully booked. We've sent a confirmation email to{' '}
              <span className="font-semibold text-primary-600">{formData.email}</span>
            </p>
            
            <div className="bg-gray-50 rounded-lg p-6 mb-8 text-left">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Appointment Details</h2>
              <div className="space-y-3">
                <div className="flex items-center">
                  <User className="h-5 w-5 text-gray-400 mr-3" />
                  <span className="text-gray-600">
                    Service: <span className="font-semibold text-gray-900">
                      {services.find(s => s.id === selectedService)?.name}
                    </span>
                  </span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-gray-400 mr-3" />
                  <span className="text-gray-600">
                    Date: <span className="font-semibold text-gray-900">
                      {new Date(selectedDate).toLocaleDateString('en-US', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </span>
                  </span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-gray-400 mr-3" />
                  <span className="text-gray-600">
                    Time: <span className="font-semibold text-gray-900">{selectedTime} EAT</span>
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors"
              >
                Back to Home
              </Link>
              <button
                onClick={() => {
                  setBookingComplete(false)
                  setStep(1)
                  setSelectedService('')
                  setSelectedDate('')
                  setSelectedTime('')
                  setFormData({ name: '', email: '', phone: '', message: '' })
                }}
                className="inline-flex items-center justify-center px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
              >
                Book Another
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-8">
          <Link
            href="/schedule"
            className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Schedule
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Book an Appointment</h1>
          <p className="text-lg text-gray-600">
            Schedule a meeting with our ministry team in just a few steps
          </p>
        </div>

        {/* Progress Steps */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="flex items-center justify-between">
            {[
              { num: 1, label: 'Service' },
              { num: 2, label: 'Date & Time' },
              { num: 3, label: 'Your Info' }
            ].map((s, index) => (
              <div key={s.num} className="flex items-center flex-1">
                <div className="flex flex-col items-center flex-1">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                      step >= s.num
                        ? 'bg-primary-600 text-white'
                        : 'bg-gray-200 text-gray-500'
                    }`}
                  >
                    {s.num}
                  </div>
                  <span className="text-xs mt-2 text-gray-600 hidden sm:block">{s.label}</span>
                </div>
                {index < 2 && (
                  <div
                    className={`h-1 flex-1 mx-2 ${
                      step > s.num ? 'bg-primary-600' : 'bg-gray-200'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Booking Form */}
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
          {/* Step 1: Select Service */}
          {step === 1 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Select a Service</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {services.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => setSelectedService(service.id)}
                    className={`p-6 rounded-lg border-2 text-left transition-all ${
                      selectedService === service.id
                        ? 'border-primary-600 bg-primary-50'
                        : 'border-gray-200 hover:border-primary-300'
                    }`}
                  >
                    <div className="text-4xl mb-3">{service.icon}</div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{service.name}</h3>
                    <p className="text-sm text-gray-600">{service.duration}</p>
                  </button>
                ))}
              </div>
              <div className="mt-8 flex justify-end">
                <button
                  onClick={() => setStep(2)}
                  disabled={!selectedService}
                  className={`px-8 py-3 rounded-lg font-semibold transition-colors ${
                    selectedService
                      ? 'bg-primary-600 text-white hover:bg-primary-700'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  Next: Choose Date & Time
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Select Date & Time */}
          {step === 2 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Choose Date & Time</h2>
              
              {/* Date Selection */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Select a Date</h3>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                  {availableDates.map((date) => {
                    const dateObj = new Date(date)
                    return (
                      <button
                        key={date}
                        onClick={() => setSelectedDate(date)}
                        className={`p-4 rounded-lg border-2 text-center transition-all ${
                          selectedDate === date
                            ? 'border-primary-600 bg-primary-50'
                            : 'border-gray-200 hover:border-primary-300'
                        }`}
                      >
                        <div className="text-sm text-gray-600 font-medium">
                          {dateObj.toLocaleDateString('en-US', { weekday: 'short' })}
                        </div>
                        <div className="text-2xl font-bold text-gray-900">
                          {dateObj.getDate()}
                        </div>
                        <div className="text-xs text-gray-500">
                          {dateObj.toLocaleDateString('en-US', { month: 'short' })}
                        </div>
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Time Selection */}
              {selectedDate && (
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Select a Time</h3>
                  <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`p-3 rounded-lg border-2 text-center transition-all ${
                          selectedTime === time
                            ? 'border-primary-600 bg-primary-50 text-primary-700 font-semibold'
                            : 'border-gray-200 hover:border-primary-300'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-8 flex justify-between">
                <button
                  onClick={() => setStep(1)}
                  className="px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                >
                  Back
                </button>
                <button
                  onClick={() => setStep(3)}
                  disabled={!selectedDate || !selectedTime}
                  className={`px-8 py-3 rounded-lg font-semibold transition-colors ${
                    selectedDate && selectedTime
                      ? 'bg-primary-600 text-white hover:bg-primary-700'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  Next: Your Information
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Personal Information */}
          {step === 3 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Information</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="+250 XXX XXX XXX"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Information
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Tell us briefly what you'd like to discuss..."
                    />
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-900 mb-2">Appointment Summary</h4>
                  <div className="text-sm text-blue-800 space-y-1">
                    <p><strong>Service:</strong> {services.find(s => s.id === selectedService)?.name}</p>
                    <p><strong>Date:</strong> {new Date(selectedDate).toLocaleDateString('en-US', { 
                      weekday: 'long', 
                      month: 'long', 
                      day: 'numeric',
                      year: 'numeric'
                    })}</p>
                    <p><strong>Time:</strong> {selectedTime} EAT</p>
                  </div>
                </div>

                <div className="flex justify-between pt-4">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="px-8 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors"
                  >
                    Confirm Booking
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}



