import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptop, faHdd, faShieldAlt, faSearch, faFilter } from '@fortawesome/free-solid-svg-icons'

const categories = [
  { 
    name: 'Pendrives', 
    icon: faLaptop,
    count: 25,
    color: 'blue'
  },
  { 
    name: 'Hard Disk', 
    icon: faHdd,
    count: 18,
    color: 'green'
  },
  { 
    name: 'Anti Virus', 
    icon: faShieldAlt,
    count: 12,
    color: 'red'
  }
]

const products = [
  {
    id: 1,
    name: 'SanDisk 32GB USB 3.0 Pendrive',
    category: 'Pendrives',
    price: '₹599',
    originalPrice: '₹799',
    image: '../assets/shopping.png',
    specs: '32GB, USB 3.0, High Speed',
    rating: 4.5
  },
  {
    id: 2,
    name: 'Seagate 1TB External HDD',
    category: 'Hard Disk',
    price: '₹3,999',
    originalPrice: '₹4,599',
    image: '../assets/shopping.png',
    specs: '1TB, USB 3.0, Portable',
    rating: 4.6
  },
  {
    id: 3,
    name: 'Kaspersky Internet Security',
    category: 'Anti Virus',
    price: '₹1,299',
    originalPrice: '₹1,599',
    image: '../assets/shopping.png',
    specs: '1 Year, 3 Devices',
    rating: 4.4
  },
  {
    id: 4,
    name: 'Kingston 64GB USB 3.1 Pendrive',
    category: 'Pendrives',
    price: '₹899',
    originalPrice: '₹1,199',
    image: '../assets/shopping.png',
    specs: '64GB, USB 3.1, Ultra Fast',
    rating: 4.3
  },
  {
    id: 5,
    name: 'WD 2TB My Passport HDD',
    category: 'Hard Disk',
    price: '₹6,999',
    originalPrice: '₹7,999',
    image: '../assets/shopping.png',
    specs: '2TB, USB 3.0, Password Protection',
    rating: 4.7
  },
  {
    id: 6,
    name: 'Norton 360 Deluxe',
    category: 'Anti Virus',
    price: '₹1,499',
    originalPrice: '₹1,899',
    image: '../assets/shopping.png',
    specs: '1 Year, 5 Devices, VPN',
    rating: 4.5
  }
]

export default function Accessories() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [sortBy, setSortBy] = useState('featured')

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory)

  const getCategoryIcon = (categoryName) => {
    const category = categories.find(cat => cat.name === categoryName)
    return category ? category.icon : faLaptop
  }

  const getCategoryColor = (categoryName) => {
    const category = categories.find(cat => cat.name === categoryName)
    return category ? category.color : 'blue'
  }

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-4 mb-6">
            <FontAwesomeIcon icon={faLaptop} className="text-4xl" />
            <h1 className="text-4xl font-bold">Accessories</h1>
          </div>
          <p className="text-xl opacity-90">Essential accessories to enhance your computing experience</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Category Filter */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Shop by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {categories.map((category) => (
              <div
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`p-6 rounded-lg border-2 cursor-pointer transition-all ${
                  selectedCategory === category.name
                    ? `border-${category.color}-500 bg-${category.color}-50`
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="text-center">
                  <div className={`w-16 h-16 mx-auto mb-3 bg-${category.color}-100 rounded-lg flex items-center justify-center`}>
                    <FontAwesomeIcon 
                      icon={category.icon} 
                      className={`text-2xl text-${category.color}-600`} 
                    />
                  </div>
                  <p className="font-semibold text-lg">{category.name}</p>
                  <p className="text-sm text-gray-600">{category.count} products</p>
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
              onClick={() => setSelectedCategory('All')}
              className={`px-3 py-1 rounded ${
                selectedCategory === 'All'
                  ? 'bg-green-500 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`px-3 py-1 rounded ${
                  selectedCategory === category.name
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category.name}
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
                  <FontAwesomeIcon 
                    icon={getCategoryIcon(product.category)} 
                    className={`text-4xl text-${getCategoryColor(product.category)}-400`} 
                  />
                </div>
                <div className="mb-2">
                  <span className={`text-sm text-${getCategoryColor(product.category)}-600 font-semibold`}>
                    {product.category}
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
            <FontAwesomeIcon icon={faLaptop} className="text-6xl text-gray-300 mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No products found</h3>
            <p className="text-gray-500">Try adjusting your filters or browse all products</p>
          </div>
        )}
      </div>

      <Footer />
    </>
  )
} 