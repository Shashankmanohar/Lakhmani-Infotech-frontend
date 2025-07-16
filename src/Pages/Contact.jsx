import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faMapMarkerAlt, faClock, faUser, faMessage, faCheckCircle, faExclamationCircle } from '@fortawesome/free-solid-svg-icons'

const contactInfo = [
  {
    icon: faPhone,
    title: 'Phone',
    details: ['+91-9470485009', '+91-9876543210'],
    color: 'blue'
  },
  {
    icon: faEnvelope,
    title: 'Email',
    details: ['Lakhmani.patna@gmail.com', 'info@lakhmani.com'],
    color: 'green'
  },
  {
    icon: faMapMarkerAlt,
    title: 'Address',
    details: ['Sahi Lane, S.P. VERMA ROAD, Patna – 800001, Bihar'],
    color: 'red'
  },
  {
    icon: faClock,
    title: 'Business Hours',
    details: ['Monday - Saturday: 9:00 AM - 7:00 PM', 'Sunday: Closed'],
    color: 'orange'
  }
]

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success' or 'error'

  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    const formData = new FormData(event.target)
    formData.append("access_key", "b2fa070d-34cb-4581-bd2e-ce9c5f639691")

    const object = Object.fromEntries(formData)
    const json = JSON.stringify(object)

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json())

      if (res.success) {
        setSubmitStatus('success')
        event.target.reset() // Reset the form
        console.log("Success", res)
      } else {
        setSubmitStatus('error')
        console.log("Error", res)
      }
    } catch (error) {
      setSubmitStatus('error')
      console.log("Error", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-4 mb-6">
            <FontAwesomeIcon icon={faMessage} className="text-4xl" />
            <h1 className="text-4xl font-bold">Contact Us</h1>
          </div>
          <p className="text-xl opacity-90">Get in touch with us for any inquiries or support</p>
        </div>
      </div>

      <div className="container mx-auto px-2 sm:px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className={`w-12 h-12 bg-${info.color}-100 rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <FontAwesomeIcon 
                      icon={info.icon} 
                      className={`text-xl text-${info.color}-600`} 
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{info.title}</h3>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600">{detail}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Media */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition">
                  <span className="font-bold">f</span>
                </a>
                <a href="#" className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center text-white hover:bg-blue-500 transition">
                  <span className="font-bold">t</span>
                </a>
                <a href="#" className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center text-white hover:bg-pink-700 transition">
                  <span className="font-bold">in</span>
                </a>
                <a href="#" className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white hover:bg-red-700 transition">
                  <span className="font-bold">yt</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Send Us a Message</h2>
            
            {/* Success/Error Messages */}
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg flex items-center space-x-2">
                <FontAwesomeIcon icon={faCheckCircle} className="text-green-600" />
                <span>Thank you! Your message has been sent successfully. We'll get back to you soon.</span>
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg flex items-center space-x-2">
                <FontAwesomeIcon icon={faExclamationCircle} className="text-red-600" />
                <span>Sorry! There was an error sending your message. Please try again.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    placeholder="Enter subject"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="6"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="Enter your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-6 rounded-lg font-semibold transition duration-300 ${
                  isSubmitting 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-teal-600 hover:bg-teal-700 text-white'
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-semibold text-lg mb-2">What are your business hours?</h3>
              <p className="text-gray-600">We are open Monday to Saturday from 9:00 AM to 7:00 PM. We are closed on Sundays.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-semibold text-lg mb-2">Do you offer delivery services?</h3>
              <p className="text-gray-600">Yes, we offer both local and nationwide delivery services for all our products.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-semibold text-lg mb-2">What payment methods do you accept?</h3>
              <p className="text-gray-600">We accept cash, card payments, UPI, and online banking transfers.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-semibold text-lg mb-2">Do you provide warranty on products?</h3>
              <p className="text-gray-600">Yes, all our products come with manufacturer warranty and our own service support.</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
