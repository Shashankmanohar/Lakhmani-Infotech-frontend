import React from 'react';
import hp from '../assets/hp.jpg';
import dell from '../assets/dell_laptop.png';
import acer from '../assets/acer.png';
import lenovo from '../assets/l3.jpg';
import lg from '../assets/Logo-Samsung.png';
import samsung from '../assets/tv.jpg';
import mi from '../assets/images.jpg';
import canon from '../assets/scanner.png';
import brother from '../assets/brother.jpg';
import logitech from '../assets/speker.jpg';

const brands = [
  { name: 'HP', img: hp },
  { name: 'Dell', img: dell },
  { name: 'Acer', img: acer },
  { name: 'Lenovo', img: lenovo },
  { name: 'LG', img: lg },
  { name: 'Samsung', img: samsung },
  { name: 'MI', img: mi },
  { name: 'Canon', img: canon },
  { name: 'Brother', img: brother },
  { name: 'Logitech', img: logitech },
];

export default function BrandsMarquee() {
  return (
    <div className="w-full bg-white py-3 overflow-hidden border-b border-gray-200">
      <div className="whitespace-nowrap animate-marquee flex items-center space-x-8">
        {brands.map((brand, idx) => (
          <div key={idx} className="flex flex-col items-center min-w-[100px]">
            <img src={brand.img} alt={brand.name} className="h-10 w-auto object-contain mb-1" />
            <span className="text-xs font-semibold text-gray-600">{brand.name}</span>
          </div>
        ))}
        {/* Repeat for smooth infinite scroll */}
        {brands.map((brand, idx) => (
          <div key={brands.length + idx} className="flex flex-col items-center min-w-[100px]">
            <img src={brand.img} alt={brand.name} className="h-10 w-auto object-contain mb-1" />
            <span className="text-xs font-semibold text-gray-600">{brand.name}</span>
          </div>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          animation: marquee 18s linear infinite;
        }
      `}</style>
    </div>
  );
} 