import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDesktop, faSearch, faFilter } from '@fortawesome/free-solid-svg-icons'

const brands = [
  { name: 'LG', logo: '../assets/Logo-Samsung.png', count: 8 },
  { name: 'Samsung', logo: '../assets/Logo-Samsung.png', count: 12 },
  { name: 'MI', logo: '../assets/microtech.png', count: 6 }
]

const products = [
  {
    id: 1,
    name: 'Samsung 55" 4K Smart TV',
    brand: 'Samsung',
    price: '₹45,999',
    originalPrice: '₹52,999',
    image: '../assets/tv.jpg',
    specs: '55" 4K UHD, Smart TV, HDR',
    rating: 4.6
  },
  {
    id: 2,
    name: 'LG 43" Full HD Smart TV',
    brand: 'LG',
    price: '₹28,999',
    originalPrice: '₹34,999',
    image: '../assets/tv.jpg',
    specs: '43" Full HD, WebOS, AI ThinQ',
    rating: 4.4
  },
  {
    id: 3,
    name: 'MI 32" HD Smart TV',
    brand: 'MI',
    price: '₹15,999',
    originalPrice: '₹18,999',
    image: '../assets/tv.jpg',
    specs: '32" HD, Android TV, PatchWall',
    rating: 4.2
  },
  {
    id: 4,
    name: 'Samsung 65" QLED 4K TV',
    brand: 'Samsung',
    price: '₹89,999',
    originalPrice: '₹99,999',
    image: '../assets/tv.jpg',
    specs: '65" QLED 4K, Quantum HDR',
    rating: 4.7
  }
]

export default function Television() {
  const [selectedBrand, setSelectedBrand] = useState('All')
  const [sortBy, setSortBy] = useState('featured')

  const filteredProducts = selectedBrand === 'All' 
    ? products 
    : products.filter(product => product.brand === selectedBrand)

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-4 mb-6">
            <FontAwesomeIcon icon={faDesktop} className="text-4xl" />
            <h1 className="text-4xl font-bold">Television</h1>
          </div>
          <p className="text-xl opacity-90">Experience stunning visuals with our premium TV collection</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Brand Filter */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Shop by Brand</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {brands.map((brand) => (
              <div
                key={brand.name}
                onClick={() => setSelectedBrand(brand.name)}
                className={`p-6 rounded-lg border-2 cursor-pointer transition-all ${
                  selectedBrand === brand.name
                    ? 'border-purple-500 bg-purple-50'
                    : 'border-gray-200 hover:border-purple-300'
                }`}
              >
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-3 bg-gray-100 rounded-lg flex items-center justify-center">
                    <span className="font-bold text-xl">{brand.name}</span>
                  </div>
                  <p className="font-semibold text-lg">{brand.name}</p>
                  <p className="text-sm text-gray-600">{brand.count} products</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Filters and Sort */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <FontAwesomeIcon icon={faFilter} className="text-gray-600" />
            <span className="font-semibold">Filter:</span>
            <button
              onClick={() => setSelectedBrand('All')}
              className={`px-3 py-1 rounded ${
                selectedBrand === 'All'
                  ? 'bg-purple-500 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              All
            </button>
            {brands.map((brand) => (
              <button
                key={brand.name}
                onClick={() => setSelectedBrand(brand.name)}
                className={`px-3 py-1 rounded ${
                  selectedBrand === brand.name
                    ? 'bg-purple-500 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {brand.name}
              </button>
            ))}
          </div>
          
          <div className="flex items-center space-x-2">
            <span className="font-semibold">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-gray-300 rounded px-3 py-1"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Rating</option>
            </select>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="p-4">
                <div className="w-full h-48 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                  <FontAwesomeIcon icon={faDesktop} className="text-4xl text-gray-400" />
                </div>
                <div className="mb-2">
                  <span className="text-sm text-purple-600 font-semibold">{product.brand}</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                <p className="text-sm text-gray-600 mb-3">{product.specs}</p>
                <div className="flex items-center mb-3">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}>
                        ★
                      </span>
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 ml-2">({product.rating})</span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-lg font-bold text-green-600">{product.price}</span>
                    <span className="text-sm text-gray-500 line-through ml-2">{product.originalPrice}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <FontAwesomeIcon icon={faDesktop} className="text-6xl text-gray-300 mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No products found</h3>
            <p className="text-gray-500">Try adjusting your filters or browse all products</p>
          </div>
        )}
      </div>

      <Footer />
    </>
  )
} 