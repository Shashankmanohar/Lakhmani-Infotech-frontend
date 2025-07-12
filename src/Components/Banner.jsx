import React, { useState } from 'react';
import bannerImg from '../assets/banner.jpg';
import bannerImg2 from '../assets/Banner.avif'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const slides = [
  {
    image: bannerImg,
  },
  {
    image: bannerImg2,
  },
];

export default function Banner() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  const nextSlide = () => setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

  return (
    <section className="relative w-full h-[320px] sm:h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
      {/* Slides */}
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-700 bg-gray-100 overflow-hidden ${idx === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover object-bottom"
          />
          
        </div>
      ))}
      {/* Left Arrow */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-3 text-2xl text-[#3154d7] z-20 shadow hidden sm:flex items-center justify-center"
        onClick={prevSlide}
        aria-label="Previous Slide"
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      {/* Right Arrow */}
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-3 text-2xl text-[#3154d7] z-20 shadow hidden sm:flex items-center justify-center"
        onClick={nextSlide}
        aria-label="Next Slide"
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={`w-3 h-3 rounded-full ${idx === current ? 'bg-[#ff9c4b]' : 'bg-white bg-opacity-70'} border-2 border-[#ff9c4b] transition`}
            onClick={() => setCurrent(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
} 