import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptop, faDesktop, faSearch, faFilter } from '@fortawesome/free-solid-svg-icons'
// Import actual images
import hpImg from '../assets/hp.jpg';
import dellImg from '../assets/dell_laptop.png';
import acerImg from '../assets/acer.png';
import lenovoImg from '../assets/l1.png';
import hp1Img from '../assets/hp1.png';
import hp2Img from '../assets/hp2.png';
import l2Img from '../assets/l2.jpg';
import l3Img from '../assets/l3.jpg';
import d2Img from '../assets/d2.png';
import d3Img from '../assets/d3.png';
import laptop2Img from '../assets/laptop2.jpg';
import hp6Img from '../assets/hp6.jpg';
import d1Img from '../assets/d1.png';
import h12Img from '../assets/h12.png';

const brands = [
  { name: 'HP', logo: hpImg, count: 15 },
  { name: 'Dell', logo: dellImg, count: 12 },
  { name: 'Acer', logo: acerImg, count: 8 },
  { name: 'Lenovo', logo: lenovoImg, count: 10 }
]

const products = [
  {
    id: 1,
    name: 'HP Pavilion Laptop',
    brand: 'HP',
    image: hp1Img,
    specs: 'Intel i5, 8GB RAM, 512GB SSD',
    rating: 4.5
  },
  {
    id: 2,
    name: 'Dell Inspiron 15',
    brand: 'Dell',
    image: dellImg,
    specs: 'AMD Ryzen 5, 8GB RAM, 256GB SSD',
    rating: 4.3
  },
  {
    id: 3,
    name: 'Acer Aspire 5',
    brand: 'Acer',
    image: acerImg,
    specs: 'Intel i3, 8GB RAM, 1TB HDD',
    rating: 4.2
  },
  {
    id: 4,
    name: 'Lenovo IdeaPad',
    brand: 'Lenovo',
    image: lenovoImg,
    specs: 'Intel i5, 12GB RAM, 512GB SSD',
    rating: 4.4
  },
  {
    id: 5,
    name: 'HP EliteBook',
    brand: 'HP',
    image: hp2Img,
    specs: 'Intel i7, 16GB RAM, 1TB SSD',
    rating: 4.6
  },
  {
    id: 6,
    name: 'Lenovo ThinkPad',
    brand: 'Lenovo',
    image: l2Img,
    specs: 'Intel i5, 8GB RAM, 512GB SSD',
    rating: 4.5
  },
  {
    id: 7,
    name: 'Dell XPS 13',
    brand: 'Dell',
    image: d2Img,
    specs: 'Intel i7, 16GB RAM, 1TB SSD',
    rating: 4.7
  },
  {
    id: 8,
    name: 'Acer Swift 3',
    brand: 'Acer',
    image: l3Img,
    specs: 'AMD Ryzen 7, 8GB RAM, 512GB SSD',
    rating: 4.3
  },
  {
    id: 9,
    name: 'HP ProBook',
    brand: 'HP',
    image: hp6Img,
    specs: 'Intel i5, 8GB RAM, 256GB SSD',
    rating: 4.4
  },
  {
    id: 10,
    name: 'Dell Latitude',
    brand: 'Dell',
    image: d1Img,
    specs: 'Intel i7, 16GB RAM, 512GB SSD',
    rating: 4.6
  },
  {
    id: 11,
    name: 'Lenovo Yoga',
    brand: 'Lenovo',
    image: laptop2Img,
    specs: 'Intel i5, 8GB RAM, 512GB SSD, 2-in-1',
    rating: 4.5
  },
  {
    id: 12,
    name: 'Acer Predator',
    brand: 'Acer',
    image: d3Img,
    specs: 'Intel i7, 16GB RAM, 1TB SSD, Gaming',
    rating: 4.7
  }
]

export default function ComputerLaptops() {
  const [selectedBrand, setSelectedBrand] = useState('All')
  const [sortBy, setSortBy] = useState('featured')

  const filteredProducts = selectedBrand === 'All' 
    ? products 
    : products.filter(product => product.brand === selectedBrand)

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-4 mb-6">
            <FontAwesomeIcon icon={faLaptop} className="text-4xl" />
            <h1 className="text-4xl font-bold">Computer & Laptops</h1>
          </div>
          <p className="text-xl opacity-90">Discover the latest laptops and computers from top brands</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Brand Filter */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Shop by Brand</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {brands.map((brand) => (
              <div
                key={brand.name}
                onClick={() => setSelectedBrand(brand.name)}
                className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                  selectedBrand === brand.name
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-blue-300'
                }`}
              >
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-2 bg-gray-100 rounded-lg flex items-center justify-center">
                    <img src={brand.logo} alt={brand.name} className="w-full h-full object-contain" />
                  </div>
                  <p className="font-semibold">{brand.name}</p>
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
                  ? 'bg-blue-500 text-white'
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
                    ? 'bg-blue-500 text-white'
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
                  <img src={product.image} alt={product.name} className="w-full h-full object-contain" />
                </div>
                <div className="mb-2">
                  <span className="text-sm text-blue-600 font-semibold">{product.brand}</span>
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