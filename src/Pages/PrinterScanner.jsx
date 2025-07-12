import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPrint, faSearch, faFilter } from '@fortawesome/free-solid-svg-icons'

const products = [
  {
    id: 1,
    name: 'HP LaserJet Pro M404n',
    type: 'Printer',
    price: '₹12,999',
    originalPrice: '₹15,999',
    image: '../assets/printer.jpeg',
    specs: 'Laser Printer, 40 PPM, Network Ready',
    rating: 4.6
  },
  {
    id: 2,
    name: 'Canon PIXMA TS207',
    type: 'Printer',
    price: '₹2,999',
    originalPrice: '₹3,599',
    image: '../assets/printer1.jpg',
    specs: 'Inkjet Printer, All-in-One, WiFi',
    rating: 4.3
  },
  {
    id: 3,
    name: 'Epson L3210',
    type: 'Printer',
    price: '₹4,999',
    originalPrice: '₹5,999',
    image: '../assets/printer.jpeg',
    specs: 'EcoTank Printer, High Yield, WiFi',
    rating: 4.5
  },
  {
    id: 4,
    name: 'HP ScanJet Pro 2000',
    type: 'Scanner',
    price: '₹8,999',
    originalPrice: '₹10,999',
    image: '../assets/scanner.png',
    specs: 'Document Scanner, 25 PPM, USB',
    rating: 4.4
  },
  {
    id: 5,
    name: 'Brother DCP-L2540DW',
    type: 'Printer',
    price: '₹18,999',
    originalPrice: '₹22,999',
    image: '../assets/brother.jpg',
    specs: 'Laser All-in-One, WiFi, Duplex',
    rating: 4.7
  },
  {
    id: 6,
    name: 'Canon CanoScan 9000F',
    type: 'Scanner',
    price: '₹15,999',
    originalPrice: '₹18,999',
    image: '../assets/scanner.png',
    specs: 'Flatbed Scanner, 9600 DPI, Film',
    rating: 4.6
  }
]

export default function PrinterScanner() {
  const [selectedType, setSelectedType] = useState('All')
  const [sortBy, setSortBy] = useState('featured')

  const filteredProducts = selectedType === 'All' 
    ? products 
    : products.filter(product => product.type === selectedType)

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-4 mb-6">
            <FontAwesomeIcon icon={faPrint} className="text-4xl" />
            <h1 className="text-4xl font-bold">Printer & Scanner</h1>
          </div>
          <p className="text-xl opacity-90">Professional printing and scanning solutions for your business</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Type Filter */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Shop by Type</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div
              onClick={() => setSelectedType('Printer')}
              className={`p-6 rounded-lg border-2 cursor-pointer transition-all ${
                selectedType === 'Printer'
                  ? 'border-orange-500 bg-orange-50'
                  : 'border-gray-200 hover:border-orange-300'
              }`}
            >
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-3 bg-orange-100 rounded-lg flex items-center justify-center">
                  <FontAwesomeIcon icon={faPrint} className="text-3xl text-orange-600" />
                </div>
                <p className="font-semibold text-lg">Printers</p>
                <p className="text-sm text-gray-600">4 products</p>
              </div>
            </div>
            <div
              onClick={() => setSelectedType('Scanner')}
              className={`p-6 rounded-lg border-2 cursor-pointer transition-all ${
                selectedType === 'Scanner'
                  ? 'border-red-500 bg-red-50'
                  : 'border-gray-200 hover:border-red-300'
              }`}
            >
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-3 bg-red-100 rounded-lg flex items-center justify-center">
                  <FontAwesomeIcon icon={faPrint} className="text-3xl text-red-600" />
                </div>
                <p className="font-semibold text-lg">Scanners</p>
                <p className="text-sm text-gray-600">2 products</p>
              </div>
            </div>
          </div>
        </div>

        {/* Filters and Sort */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <FontAwesomeIcon icon={faFilter} className="text-gray-600" />
            <span className="font-semibold">Filter:</span>
            <button
              onClick={() => setSelectedType('All')}
              className={`px-3 py-1 rounded ${
                selectedType === 'All'
                  ? 'bg-orange-500 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setSelectedType('Printer')}
              className={`px-3 py-1 rounded ${
                selectedType === 'Printer'
                  ? 'bg-orange-500 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Printers
            </button>
            <button
              onClick={() => setSelectedType('Scanner')}
              className={`px-3 py-1 rounded ${
                selectedType === 'Scanner'
                  ? 'bg-orange-500 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Scanners
            </button>
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
                  <FontAwesomeIcon icon={faPrint} className="text-4xl text-gray-400" />
                </div>
                <div className="mb-2">
                  <span className={`text-sm font-semibold ${
                    product.type === 'Printer' ? 'text-orange-600' : 'text-red-600'
                  }`}>
                    {product.type}
                  </span>
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
            <FontAwesomeIcon icon={faPrint} className="text-6xl text-gray-300 mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No products found</h3>
            <p className="text-gray-500">Try adjusting your filters or browse all products</p>
          </div>
        )}
      </div>

      <Footer />
    </>
  )
} 