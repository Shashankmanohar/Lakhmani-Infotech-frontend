import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTruck, faShippingFast, faGlobe, faPhone, faEnvelope, faMapMarkerAlt, faClock, faShieldAlt } from '@fortawesome/free-solid-svg-icons'

const services = [
  {
    id: 1,
    title: 'Express Delivery',
    description: 'Same day delivery for urgent orders within city limits',
    icon: faShippingFast,
    color: 'blue',
    features: ['Same day delivery', 'Real-time tracking', 'Priority handling']
  },
  {
    id: 2,
    title: 'Standard Shipping',
    description: 'Reliable delivery within 2-3 business days',
    icon: faTruck,
    color: 'green',
    features: ['2-3 business days', 'Nationwide coverage', 'Insurance included']
  },
  {
    id: 3,
    title: 'International Shipping',
    description: 'Worldwide shipping with customs handling',
    icon: faGlobe,
    color: 'purple',
    features: ['Global delivery', 'Customs clearance', 'Tracking support']
  }
]

const locations = [
  {
    city: 'Patna',
    address: 'Sahi Lane, S.P. VERMA ROAD, Patna – 800001, Bihar',
    phone: '+91-9470485009',
    email: 'patna@lakhmani.com',
    hours: 'Mon-Sat: 9:00 AM - 7:00 PM'
  }
]

export default function Logistic() {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-4 mb-6">
            <FontAwesomeIcon icon={faTruck} className="text-4xl" />
            <h1 className="text-4xl font-bold">Logistic Services</h1>
          </div>
          <p className="text-xl opacity-90">Reliable shipping and delivery solutions for your business</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Services Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className={`w-16 h-16 bg-${service.color}-100 rounded-lg flex items-center justify-center mb-4`}>
                  <FontAwesomeIcon 
                    icon={service.icon} 
                    className={`text-2xl text-${service.color}-600`} 
                  />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-700">
                      <FontAwesomeIcon icon={faShieldAlt} className="text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Why Choose Our Logistics?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon icon={faClock} className="text-2xl text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Fast Delivery</h3>
              <p className="text-sm text-gray-600">Quick and reliable delivery across India</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon icon={faShieldAlt} className="text-2xl text-green-600" />
              </div>
              <h3 className="font-semibold mb-2">Secure Shipping</h3>
              <p className="text-sm text-gray-600">Full insurance coverage for your products</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon icon={faGlobe} className="text-2xl text-purple-600" />
              </div>
              <h3 className="font-semibold mb-2">Nationwide Coverage</h3>
              <p className="text-sm text-gray-600">Delivery to all major cities in India</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon icon={faPhone} className="text-2xl text-orange-600" />
              </div>
              <h3 className="font-semibold mb-2">24/7 Support</h3>
              <p className="text-sm text-gray-600">Round the clock customer support</p>
            </div>
          </div>
        </div>

        {/* Locations Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Our Locations</h2>
          <div className="grid grid-cols-1 gap-4 md:gap-6">
            {locations.map((location, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="text-red-500 mr-2" />
                  <h3 className="text-xl font-bold">{location.city}</h3>
                </div>
                <div className="space-y-3">
                  <p className="text-gray-600">{location.address}</p>
                  <div className="flex items-center">
                    <FontAwesomeIcon icon={faPhone} className="text-blue-500 mr-2" />
                    <span className="text-sm">{location.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <FontAwesomeIcon icon={faEnvelope} className="text-green-500 mr-2" />
                    <span className="text-sm">{location.email}</span>
                  </div>
                  <div className="flex items-center">
                    <FontAwesomeIcon icon={faClock} className="text-orange-500 mr-2" />
                    <span className="text-sm">{location.hours}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Logistics Support?</h2>
          <p className="text-xl mb-6 opacity-90">Contact us for custom shipping solutions and bulk delivery options</p>
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
            <a
              href={`tel:${locations[0].phone.replace(/[^+\d]/g, '')}`}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition flex items-center justify-center"
            >
              <FontAwesomeIcon icon={faPhone} className="mr-2" />
              Call Now
            </a>
            <a
              href={`mailto:${locations[0].email}`}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition flex items-center justify-center"
            >
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              Email Us
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
} 