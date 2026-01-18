import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Apologetics Rwanda</h3>
            <p className="text-sm mb-4">
              Empowering the next generation for Christ through evangelism, apologetics, and discipleship.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary-400 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-primary-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary-400 transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-primary-400 transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/courses" className="hover:text-primary-400 transition-colors">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/certificate-program" className="hover:text-primary-400 transition-colors">
                  Certificate Program
                </Link>
              </li>
            </ul>
          </div>

          {/* Ministries */}
          <div>
            <h4 className="text-white font-semibold mb-4">Ministries</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/ministries/evangelism" className="hover:text-primary-400 transition-colors">
                  Campus Evangelism
                </Link>
              </li>
              <li>
                <Link href="/ministries/apologetics" className="hover:text-primary-400 transition-colors">
                  Christian Apologetics
                </Link>
              </li>
              <li>
                <Link href="/ministries/leadership" className="hover:text-primary-400 transition-colors">
                  Pastors Training
                </Link>
              </li>
              <li>
                <Link href="/ministries/street-kids" className="hover:text-primary-400 transition-colors">
                  Street Kids Ministry
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-primary-400 flex-shrink-0 mt-0.5" />
                <span>Kigali, Rwanda</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-primary-400 flex-shrink-0" />
                <span>+250 788834920</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-primary-400 flex-shrink-0" />
                <span>info@apologeticsrwanda.org</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Partners Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <h4 className="text-white font-semibold mb-6 text-center">Our Partners</h4>
          <div className="flex flex-wrap justify-center items-center gap-10 mb-8">
            {/* Ratio Christi */}
            <a
              href="https://ratiochristi.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 hover:scale-110 filter brightness-90 hover:brightness-100"
              title="Ratio Christi"
            >
              <Image
                src="/partners/Ratio Christ.png"
                alt="Ratio Christi"
                width={160}
                height={60}
                className="h-14 w-auto object-contain"
              />
            </a>

            {/* Apologetics on Mission */}
            <a
              href="https://www.apologeticsonmission.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 hover:scale-110 filter brightness-90 hover:brightness-100"
              title="Apologetics on Mission"
            >
              <Image
                src="/partners/Apologetics.png"
                alt="Apologetics on Mission"
                width={160}
                height={60}
                className="h-14 w-auto object-contain"
              />
            </a>

            {/* Come and See Rwanda */}
            <a
              href="https://comeandseerwanda.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 hover:scale-110 filter brightness-90 hover:brightness-100"
              title="Come and See Rwanda"
            >
              <Image
                src="/partners/come and see Rwanda.png"
                alt="Come and See Rwanda"
                width={160}
                height={60}
                className="h-14 w-auto object-contain"
              />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>© 2025 Apologetics Rwanda. All rights reserved.</p>
          <p className="mt-2">
            <Link href="/privacy" className="hover:text-primary-400 transition-colors">
              Privacy Policy
            </Link>
            {' | '}
            <Link href="/terms" className="hover:text-primary-400 transition-colors">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}

