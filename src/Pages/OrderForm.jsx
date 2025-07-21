import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faExclamationCircle, faBoxOpen } from '@fortawesome/free-solid-svg-icons';

// Dummy product data for demonstration. In real use, import or fetch this from a shared source.
import productsData from './productsData'; // You will need to create or import this

export default function OrderForm() {
  const { category, productId } = useParams();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Find the product from the dummy data (replace with real data source)
  const product = productsData[category]?.find(p => String(p.id) === productId);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const formData = new FormData(event.target);
    formData.append('access_key', 'b2fa070d-34cb-4581-bd2e-ce9c5f639691');
    formData.append('product_name', product?.name || '');
    formData.append('product_specs', product?.specs || '');
    formData.append('product_category', category);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        setSubmitStatus('success');
        event.target.reset();
      } else {
        setSubmitStatus('error');
        console.log('Error', res);
      }
    } catch (error) {
      setSubmitStatus('error');
      console.log('Error', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <FontAwesomeIcon icon={faBoxOpen} className="text-5xl mb-4" />
          <h1 className="text-4xl font-bold mb-2">Order Product</h1>
          <p className="text-xl opacity-90">Fill the form below to order your product</p>
        </div>
      </div>
      <div className="container mx-auto px-2 sm:px-4 py-8 max-w-4xl">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16 xl:gap-20">
          {/* Product Info Side */}
          <div className="md:w-1/2 w-full mb-8 md:mb-0 flex flex-col items-center">
            {product && (
              <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 w-full h-full flex flex-col items-center justify-center">
                {product.image && (
                  <div className="w-full flex justify-center mb-4">
                    <img src={product.image} alt={product.name} className="w-full max-w-xs sm:max-w-sm md:max-w-xs lg:max-w-sm h-40 sm:h-48 md:h-40 lg:h-56 object-contain rounded-lg" />
                  </div>
                )}
                <h2 className="text-2xl font-bold mb-2 text-center">Product Details</h2>
                <p className="mb-1 text-base sm:text-lg"><strong>Name:</strong> {product.name}</p>
                <p className="mb-1 text-base sm:text-lg"><strong>Specs:</strong> {product.specs}</p>
                {product.brand && <p className="mb-1 text-base sm:text-lg"><strong>Brand:</strong> {product.brand}</p>}
                {product.type && <p className="mb-1 text-base sm:text-lg"><strong>Type:</strong> {product.type}</p>}
              </div>
            )}
          </div>
          {/* Form Side */}
          <div className="md:w-1/2 w-full flex flex-col justify-center">
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg flex items-center space-x-2">
                <FontAwesomeIcon icon={faCheckCircle} className="text-green-600" />
                <span>Thank you! Your order has been submitted successfully. We'll contact you soon.</span>
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg flex items-center space-x-2">
                <FontAwesomeIcon icon={faExclamationCircle} className="text-red-600" />
                <span>Sorry! There was an error submitting your order. Please try again.</span>
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6 bg-white p-4 sm:p-6 rounded-lg shadow w-full">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                <input type="text" id="name" name="name" required className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base" placeholder="Enter your full name" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                <input type="email" id="email" name="email" required className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base" placeholder="Enter your email" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                <input type="tel" id="phone" name="phone" required className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base" placeholder="Enter your phone number" />
              </div>
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">Address *</label>
                <textarea id="address" name="address" required className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base" placeholder="Enter your address"></textarea>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Additional Message</label>
                <textarea id="message" name="message" className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base" placeholder="Any additional info or request"></textarea>
              </div>
              <button type="submit" disabled={isSubmitting} className="w-full bg-blue-600 text-white py-2 sm:py-3 rounded-lg font-semibold hover:bg-blue-700 transition text-base sm:text-lg">
                {isSubmitting ? 'Submitting...' : 'Place Order'}
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
} 