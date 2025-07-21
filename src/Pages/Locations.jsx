import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faPhone, faEnvelope, faClock, faDirections, faCar, faBus, faTrain, faStar, faCheckCircle } from '@fortawesome/free-solid-svg-icons'

const locations = [
  {
    id: 1,
    city: 'Patna',
    address: 'Sahi Lane, S.P. VERMA ROAD, Patna – 800001, Bihar',
    phone: '+91-9470485009',
    email: 'patna@lakhmani.com',
    hours: 'Mon-Sat: 9:00 AM - 7:00 PM',
    description: 'Our flagship store in the heart of Patna, offering the complete range of products and services.',
    services: ['Sales', 'Service Center', 'Parts', 'Training'],
    transport: {
      car: 'Parking available on premises',
      bus: 'Bus stop 200m away',
      train: 'Patna Junction 2km away'
    },
    features: ['Free Consultation', 'Expert Technicians', 'Genuine Parts', 'Warranty Support']
  }
]

export default function Locations() {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-5xl" />
            <h1 className="text-5xl font-bold">Our Locations</h1>
          </div>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">Find the nearest Lakhmani Infotech store and experience our professional services</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Quick Contact Banner */}
        <div className="bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-xl p-6 mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">Need Immediate Assistance?</h3>
              <p className="opacity-90">Call us now for instant support</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition flex items-center justify-center">
                <FontAwesomeIcon icon={faPhone} className="mr-2" />
                +91-9470485009
              </button>
              <button
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition flex items-center justify-center"
                onClick={() => window.location.href = 'mailto:Lakhmani.patna@gmail.com'}
              >
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                Email Us
              </button>
            </div>
          </div>
        </div>

        {/* Store Locations */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Store Locations</h2>
            <p className="text-gray-600 text-lg">Visit our store for personalized service and expert consultation</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {locations.map((location) => (
              <div key={location.id} className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100">
                {/* Header */}
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="text-blue-600 text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-800">{location.city}</h3>
                    <p className="text-gray-600">Flagship Store</p>
                  </div>
                </div>
                
                {/* Description */}
                <p className="text-gray-700 text-lg mb-8 leading-relaxed">{location.description}</p>
                
                {/* Contact Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-gray-800 mb-4">Contact Details</h4>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="text-blue-500 mr-3 w-5" />
                        <span className="text-gray-700">{location.address}</span>
                      </div>
                      <div className="flex items-center">
                        <FontAwesomeIcon icon={faPhone} className="text-green-500 mr-3 w-5" />
                        <span className="text-gray-700 font-medium">{location.phone}</span>
                      </div>
                      <div className="flex items-center">
                        <FontAwesomeIcon icon={faEnvelope} className="text-purple-500 mr-3 w-5" />
                        <span className="text-gray-700">{location.email}</span>
                      </div>
                      <div className="flex items-center">
                        <FontAwesomeIcon icon={faClock} className="text-orange-500 mr-3 w-5" />
                        <span className="text-gray-700">{location.hours}</span>
                      </div>
                    </div>
                  </div>

                  {/* Services */}
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-4">Services Available</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {location.services.map((service, index) => (
                        <div key={index} className="flex items-center">
                          <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2 w-4" />
                          <span className="text-gray-700 text-sm">{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-gray-800 mb-4">Store Features</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {location.features.map((feature, index) => (
                      <div key={index} className="bg-blue-50 rounded-lg p-3 text-center">
                        <FontAwesomeIcon icon={faStar} className="text-blue-500 mb-2" />
                        <p className="text-sm font-medium text-gray-700">{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Transportation */}
                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-gray-800 mb-4">Getting Here</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center mb-2">
                        <FontAwesomeIcon icon={faCar} className="text-blue-500 mr-2" />
                        <span className="font-medium">By Car</span>
                      </div>
                      <p className="text-sm text-gray-600">{location.transport.car}</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center mb-2">
                        <FontAwesomeIcon icon={faBus} className="text-green-500 mr-2" />
                        <span className="font-medium">By Bus</span>
                      </div>
                      <p className="text-sm text-gray-600">{location.transport.bus}</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center mb-2">
                        <FontAwesomeIcon icon={faTrain} className="text-purple-500 mr-2" />
                        <span className="font-medium">By Train</span>
                      </div>
                      <p className="text-sm text-gray-600">{location.transport.train}</p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="tel:+919470485009"
                    className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center justify-center text-lg"
                  >
                    <FontAwesomeIcon icon={faPhone} className="mr-3" />
                    Call Store Now
                  </a>
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(location.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition flex items-center justify-center text-lg"
                  >
                    <FontAwesomeIcon icon={faDirections} className="mr-3" />
                    Get Directions
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Map Section */}
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Interactive Map</h2>
            <p className="text-gray-600">Find us easily with our interactive map</p>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="w-full h-80 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center mb-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2735.8370981957282!2d85.13755890960826!3d25.6111237773527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed585b8d3f6987%3A0xf41e011ee43fb4be!2sLakhmani%20Infotech!5e1!3m2!1sen!2sin!4v1752824544683!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '0.75rem' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lakhmani Infotech Location Map"
              ></iframe>
            </div>
            <div className="text-center">
              <a
                href="https://www.google.com/maps/place/Lakhmani+Infotech/@25.6111238,85.1375589,17z/data=!3m1!4b1!4m6!3m5!1s0x39ed585b8d3f6987:0xf41e011ee43fb4be!8m2!3d25.6111238!4d85.1397476!16s%2Fg%2F11c4y1w2wz?entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition inline-block"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>

        
      </div>

      <Footer />
    </>
  )
} 