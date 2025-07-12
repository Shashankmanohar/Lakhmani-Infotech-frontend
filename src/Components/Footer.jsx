import React from 'react';
import logo from '../assets/logo.png';

export default function Footer() {
  return (
    <footer className="bg-[#f3f6fb] text-gray-700 mt-12 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo & Description */}
        <div className="flex flex-col items-center md:items-start">
          <img src={logo} alt="Lakhmani Infotech Logo" className="h-12 mb-3" />
          <p className="text-sm text-center md:text-left">Lakhmani Infotech is your trusted partner for computers, electronics, and IT solutions in Patna and beyond.</p>
        </div>
        {/* Quick Links */}
        <div className="flex flex-col items-center">
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:text-[#3154d7] transition">Home</a></li>
            <li><a href="#" className="hover:text-[#3154d7] transition">Products</a></li>
            <li><a href="#" className="hover:text-[#3154d7] transition">Contact</a></li>
            <li><a href="#" className="hover:text-[#3154d7] transition">About</a></li>
          </ul>
        </div>
        {/* Contact Info */}
        <div className="flex flex-col items-center md:items-end">
          <h3 className="font-semibold mb-2">Contact Us</h3>
          <p className="text-sm">+91-9470485009</p>
          <p className="text-sm">Lakhmani.patna@gmail.com</p>
          <p className="text-sm">Patna, Bihar, India</p>
        </div>
      </div>
      <div className="text-center text-xs text-gray-500 py-4 border-t border-gray-200">
        &copy; {new Date().getFullYear()} Lakhmani Infotech. All rights reserved.
      </div>
    </footer>
  );
} 