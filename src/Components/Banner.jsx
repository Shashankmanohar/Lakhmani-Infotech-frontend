import React, { useState } from 'react';
import bannerImg from '../assets/banner.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const slides = [
  {
    image: bannerImg,
  },
  
];

export default function Banner() {
  return (
    <section className="relative w-full h-[320px] sm:h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden bg-gray-100">
      <img
        src={bannerImg}
        alt="Banner"
        className="w-full h-full object-contain object-center"
      />
    </section>
  );
} 