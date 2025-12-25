import { Heart, CreditCard, Building, Smartphone, CheckCircle, Shield } from 'lucide-react'

export default function DonatePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-rose-600 to-pink-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="h-10 w-10" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Support Our Ministry</h1>
            <p className="text-xl text-rose-100">
              Your generosity helps us reach more students, train leaders, and transform lives through the Gospel
            </p>
          </div>
        </div>
      </section>

      {/* Impact Statement */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Your Impact</h2>
            <p className="text-lg text-gray-600">
              Every donation makes a real difference in the lives of young people, church leaders, 
              and vulnerable children across Rwanda. Together, we're building a generation of strong, 
              equipped believers who will impact their nation for Christ.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto text-center">
            <div>
              <div className="text-4xl font-bold text-rose-600 mb-2">$50</div>
              <div className="text-gray-600">Feeds 20 street kids for a day</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-rose-600 mb-2">$100</div>
              <div className="text-gray-600">Sponsors a campus fellowship event</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-rose-600 mb-2">$250</div>
              <div className="text-gray-600">Trains 10 pastors for a month</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-rose-600 mb-2">$500</div>
              <div className="text-gray-600">Funds a full conference</div>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Options */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Choose Your Gift Amount
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-transparent hover:border-rose-600 transition-colors cursor-pointer">
              <div className="text-center">
                <div className="text-5xl font-bold text-gray-900 mb-2">$25</div>
                <div className="text-gray-600 mb-6">One-Time Gift</div>
                <ul className="text-left space-y-2 mb-6 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Support ministry operations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Help reach students</span>
                  </li>
                </ul>
                <button className="w-full bg-rose-600 text-white py-3 rounded-lg font-semibold hover:bg-rose-700 transition-colors">
                  Give $25
                </button>
              </div>
            </div>

            <div className="bg-gradient-to-br from-rose-600 to-pink-700 rounded-xl p-8 shadow-2xl transform scale-105 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-bold">
                Most Popular
              </div>
              <div className="text-center text-white">
                <div className="text-5xl font-bold mb-2">$100</div>
                <div className="text-rose-100 mb-6">Monthly Partner</div>
                <ul className="text-left space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-white mr-2 flex-shrink-0 mt-0.5" />
                    <span>Sustained ministry impact</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-white mr-2 flex-shrink-0 mt-0.5" />
                    <span>Monthly updates & reports</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-white mr-2 flex-shrink-0 mt-0.5" />
                    <span>Partner recognition</span>
                  </li>
                </ul>
                <button className="w-full bg-white text-rose-700 py-3 rounded-lg font-semibold hover:bg-rose-50 transition-colors">
                  Give $100/mo
                </button>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-transparent hover:border-rose-600 transition-colors cursor-pointer">
              <div className="text-center">
                <div className="text-5xl font-bold text-gray-900 mb-2">$500</div>
                <div className="text-gray-600 mb-6">Impact Partner</div>
                <ul className="text-left space-y-2 mb-6 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Major ministry initiatives</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Detailed impact reports</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Personal ministry updates</span>
                  </li>
                </ul>
                <button className="w-full bg-rose-600 text-white py-3 rounded-lg font-semibold hover:bg-rose-700 transition-colors">
                  Give $500
                </button>
              </div>
            </div>
          </div>

          {/* Custom Amount */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Custom Amount</h3>
              <div className="flex gap-4 mb-4">
                <div className="flex-1 relative">
                  <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl">$</span>
                  <input
                    type="number"
                    placeholder="Enter amount"
                    className="w-full pl-10 pr-4 py-4 border border-gray-300 rounded-lg text-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                  />
                </div>
                <button className="px-8 py-4 bg-rose-600 text-white rounded-lg font-semibold hover:bg-rose-700 transition-colors">
                  Donate
                </button>
              </div>
              <label className="flex items-center justify-center gap-2 text-gray-600">
                <input type="checkbox" className="w-4 h-4 text-rose-600 rounded" />
                <span>Make this a monthly donation</span>
              </label>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Payment Methods
          </h2>
          <p className="text-lg text-gray-600 mb-12 text-center">
            We accept multiple secure payment options
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <CreditCard className="h-7 w-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Credit/Debit Card</h3>
              <p className="text-gray-600">Visa, Mastercard, Amex</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Smartphone className="h-7 w-7 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Mobile Money</h3>
              <p className="text-gray-600">MTN, Airtel Money</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Building className="h-7 w-7 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Bank Transfer</h3>
              <p className="text-gray-600">Direct bank deposit</p>
            </div>
          </div>

          <div className="max-w-2xl mx-auto mt-12 p-6 bg-blue-50 rounded-xl flex items-start gap-4">
            <Shield className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-bold text-gray-900 mb-1">Secure & Transparent</h4>
              <p className="text-gray-600">
                Your donation is processed securely. We provide regular updates on how your 
                contributions are making an impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Other Ways to Give */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Other Ways to Support
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Volunteer Your Time</h3>
              <p className="text-gray-600 mb-4">
                Join our team and make a hands-on impact in ministry activities.
              </p>
              <button className="text-rose-600 font-semibold hover:text-rose-700">
                Learn More →
              </button>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Sponsor a Student</h3>
              <p className="text-gray-600 mb-4">
                Directly support a student's education and spiritual growth journey.
              </p>
              <button className="text-rose-600 font-semibold hover:text-rose-700">
                Learn More →
              </button>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Corporate Partnership</h3>
              <p className="text-gray-600 mb-4">
                Partner with us as a business or organization for greater impact.
              </p>
              <button className="text-rose-600 font-semibold hover:text-rose-700">
                Learn More →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-rose-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Questions About Giving?
            </h2>
            <p className="text-xl mb-8 text-rose-100">
              We're here to help! Contact us to learn more about how your donation makes a difference.
            </p>
            <button className="px-8 py-4 bg-white text-rose-700 rounded-lg font-semibold hover:bg-rose-50 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

