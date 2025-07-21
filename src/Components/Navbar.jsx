import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const navItems = [
  {
    label: 'HOME',
    link: '/',
  },
  {
    label: 'COMPUTER & LAPTOPS',
    link: '/computer-laptops',
    dropdown: [
      { label: 'HP', link: '/computer-laptops?brand=HP' },
      { label: 'Dell', link: '/computer-laptops?brand=Dell' },
      { label: 'Acer', link: '/computer-laptops?brand=Acer' },
      { label: 'Lenovo', link: '/computer-laptops?brand=Lenovo' },
    ],
  },
  {
    label: 'TELEVISION',
    link: '/television',
    dropdown: [
      { label: 'LG', link: '/television?brand=LG' },
      { label: 'Samsung', link: '/television?brand=Samsung' },
      { label: 'MI', link: '/television?brand=MI' },
    ],
  },
  {
    label: 'ACCESSORIES',
    link: '/accessories',
    dropdown: [
      { label: 'Pendrives', link: '/accessories?category=Pendrives' },
      { label: 'Hard Disk', link: '/accessories?category=Hard Disk' },
      { label: 'Anti Virus', link: '/accessories?category=Anti Virus' },
    ],
  },
  {
    label: 'PRINTER & SCANNER',
    link: '/printer-scanner',
  },
  {
    label: 'LOGISTIC',
    link: '/logistic',
  },
  {
    label: 'PRODUCTS',
    link: '/products',
  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null); // for desktop
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(null); // for mobile

  return (
    <>
      {/* Top Info Bar */}
      <div className="w-full bg-[#f3f6fb] text-gray-700 text-xs md:text-sm flex flex-col md:flex-row justify-between items-center px-2 sm:px-4 md:px-8 py-2 space-y-1 md:space-y-0">
        <span>Welcome to Lakhmani Infotech</span>
        <div className="flex flex-col md:flex-row items-center space-y-1 md:space-y-0 md:space-x-6">
          <div className="flex items-center space-x-2">
            <span className="font-semibold">+91-9470485009</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="font-semibold">Lakhmani.patna@gmail.com</span>
          </div>
        </div>
      </div>
      {/* Main Navbar */}
      <nav className="w-full bg-white shadow flex items-center justify-between px-2 sm:px-4 md:px-8 py-3 relative">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/">
          <img src={logo} alt="Lakhmani Infotech Logo" className="h-10 md:h-12 w-auto" />
          </Link>
        </div>
        {/* Hamburger Icon (Mobile) */}
        <button className="md:hidden text-2xl text-[#3154d7] focus:outline-none" onClick={() => setMenuOpen(!menuOpen)}>
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
        </button>
        {/* Nav Links & Buttons (Desktop) */}
        <div className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-6 font-semibold text-gray-700 overflow-hidden">
            {navItems.map((item, idx) => (
              <li
                key={item.label}
                className="relative group flex-shrink-0"
                onMouseEnter={() => item.dropdown && setDropdownOpen(idx)}
                onMouseLeave={() => item.dropdown && setDropdownOpen(null)}
              >
                <Link to={item.link} className="flex items-center cursor-pointer hover:text-[#3154d7] transition px-1"
                  onClick={() => item.dropdown && setDropdownOpen(dropdownOpen === idx ? null : idx)}
                >
                  {item.label}
                </Link>
                {/* Dropdown (Desktop) */}
                {item.dropdown && dropdownOpen === idx && (
                  <ul className="absolute left-0 top-full mt-2 w-44 bg-white shadow-lg rounded z-30 py-2 animate-fade-in">
                    {item.dropdown.map((drop) => (
                      <li
                        key={drop.label}
                        className="px-4 py-2 hover:bg-[#f3f6fb] cursor-pointer text-gray-700 whitespace-nowrap"
                      >
                        <Link to={drop.link} className="block">
                        {drop.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <div className="flex items-center space-x-3 flex-shrink-0">
              <Link to="/locations" className="bg-white border border-[#3154d7] text-[#3154d7] px-4 py-2 rounded font-semibold hover:bg-[#f3f6fb] transition whitespace-nowrap">LOCATIONS</Link>
              <Link to="/contact" className="bg-[#ff9c4b] text-white px-4 py-2 rounded font-semibold hover:bg-[#ff7c1b] transition whitespace-nowrap">CONTACT US</Link>
          </div>
        </div>
        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-md z-20 flex flex-col items-center py-4 md:hidden animate-fade-in z-50">
            <ul className="flex flex-col space-y-4 font-semibold text-gray-700 w-full items-center">
              {navItems.map((item, idx) => (
                <li key={item.label} className="w-full flex flex-col items-center">
                  <Link
                    to={item.link}
                    className="flex items-center justify-center w-full cursor-pointer px-2 py-2 hover:text-[#3154d7] transition"
                    onClick={() => item.dropdown ? setMobileDropdownOpen(mobileDropdownOpen === idx ? null : idx) : setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {/* Dropdown (Mobile) */}
                  {item.dropdown && mobileDropdownOpen === idx && (
                    <ul className="w-5/6 bg-[#f3f6fb] rounded shadow-inner mt-2 mb-2 animate-fade-in">
                      {item.dropdown.map((drop) => (
                        <li
                          key={drop.label}
                          className="px-4 py-2 hover:bg-[#e0e7ff] cursor-pointer text-gray-700 whitespace-nowrap"
                        >
                          <Link to={drop.link} className="block">
                          {drop.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
            <div className="flex flex-col space-y-2 mt-4 w-full items-center">
              <Link to="/locations" className="w-5/6 bg-white border border-[#3154d7] text-[#3154d7] px-4 py-2 rounded font-semibold hover:bg-[#f3f6fb] transition">LOCATIONS</Link>
              <Link to="/contact" className="w-5/6 bg-[#ff9c4b] text-white px-4 py-2 rounded font-semibold hover:bg-[#ff7c1b] transition">CONTACT US</Link>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}
