import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faPhone, faEnvelope, faClock, faDirections, faCar, faBus, faTrain } from '@fortawesome/free-solid-svg-icons'

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
    }
  }
]

export default function Locations() {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-600 to-pink-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-4 mb-6">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-4xl" />
            <h1 className="text-4xl font-bold">Our Locations</h1>
          </div>
          <p className="text-xl opacity-90">Find the nearest Lakhmani Infotech store near you</p>
        </div>
      </div>

      <div className="container mx-auto px-2 sm:px-4 py-8">
        {/* Store Locations */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Store Locations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            {locations.map((location) => (
              <div key={location.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="text-red-500 mr-3 text-xl" />
                  <h3 className="text-2xl font-bold">{location.city}</h3>
                </div>
                
                <p className="text-gray-600 mb-4">{location.description}</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="text-blue-500 mr-3 w-4" />
                    <span className="text-sm">{location.address}</span>
                  </div>
                  <div className="flex items-center">
                    <FontAwesomeIcon icon={faPhone} className="text-green-500 mr-3 w-4" />
                    <span className="text-sm">{location.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <FontAwesomeIcon icon={faEnvelope} className="text-purple-500 mr-3 w-4" />
                    <span className="text-sm">{location.email}</span>
                  </div>
                  <div className="flex items-center">
                    <FontAwesomeIcon icon={faClock} className="text-orange-500 mr-3 w-4" />
                    <span className="text-sm">{location.hours}</span>
                  </div>
                </div>

                {/* Services */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Services Available:</h4>
                  <div className="flex flex-wrap gap-2">
                    {location.services.map((service, index) => (
                      <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Transportation */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Getting Here:</h4>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <FontAwesomeIcon icon={faCar} className="text-gray-500 mr-2 w-4" />
                      <span className="text-sm">{location.transport.car}</span>
                    </div>
                    <div className="flex items-center">
                      <FontAwesomeIcon icon={faBus} className="text-gray-500 mr-2 w-4" />
                      <span className="text-sm">{location.transport.bus}</span>
                    </div>
                    <div className="flex items-center">
                      <FontAwesomeIcon icon={faTrain} className="text-gray-500 mr-2 w-4" />
                      <span className="text-sm">{location.transport.train}</span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition flex items-center justify-center">
                    <FontAwesomeIcon icon={faPhone} className="mr-2" />
                    Call Store
                  </button>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition flex items-center justify-center">
                    <FontAwesomeIcon icon={faDirections} className="mr-2" />
                    Get Directions
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Map Section */}
        <div className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Interactive Map</h2>
          <div className="bg-white rounded-lg p-6 text-center">
            <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center mb-4">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="text-4xl text-gray-400" />
            </div>
            <p className="text-gray-600">Interactive map showing all our store locations</p>
            <p className="text-sm text-gray-500 mt-2">Click on markers to see store details</p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-lg p-8">
          <h2 className="text-3xl font-bold text-center mb-6">Need Help Finding Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 text-center">
            <div>
              <FontAwesomeIcon icon={faPhone} className="text-3xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <p>+91-9470485009</p>
              <p className="text-sm opacity-90">24/7 Customer Support</p>
            </div>
            <div>
              <FontAwesomeIcon icon={faEnvelope} className="text-3xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <p>info@lakhmani.com</p>
              <p className="text-sm opacity-90">Quick Response</p>
            </div>
            <div>
              <FontAwesomeIcon icon={faClock} className="text-3xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
              <p>Mon-Sat: 9:00 AM - 7:00 PM</p>
              <p className="text-sm opacity-90">Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
} 