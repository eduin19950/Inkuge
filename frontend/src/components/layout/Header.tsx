'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">RC</span>
            </div>
            <div className="hidden md:block">
              <div className="text-xl font-bold text-gray-900">Inkuge</div>
              <div className="text-xs text-gray-600">Digital Ministry Platform</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              About
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Services
            </Link>
            <Link href="/events" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Events
            </Link>
            <Link href="/courses" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Courses
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Contact
            </Link>
            <Link
              href="/book-appointment"
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
            >
              Book Appointment
            </Link>
            <Link
              href="/certificate-program"
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
            >
              Certificate Program
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            <Link
              href="/"
              className="block text-gray-700 hover:text-primary-600 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block text-gray-700 hover:text-primary-600 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/services"
              className="block text-gray-700 hover:text-primary-600 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/events"
              className="block text-gray-700 hover:text-primary-600 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Events
            </Link>
            <Link
              href="/courses"
              className="block text-gray-700 hover:text-primary-600 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Courses
            </Link>
            <Link
              href="/contact"
              className="block text-gray-700 hover:text-primary-600 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/book-appointment"
              className="block text-gray-700 hover:text-primary-600 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Book Appointment
            </Link>
            <Link
              href="/certificate-program"
              className="block text-gray-700 hover:text-primary-600 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Certificate Program
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}

