import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import ProductsComponent from '../Components/Products'

export default function Products() {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-4">Our Products</h1>
          <p className="text-xl text-center opacity-90">Discover our comprehensive range of technology products</p>
        </div>
      </div>

      {/* Products Section */}
      <ProductsComponent />

      <Footer />
    </>
  )
} 