import React from 'react'
import Navbar from '../Components/Navbar'
import Banner from '../Components/Banner';
import BrandsMarquee from '../Components/BrandsMarquee';
import Products from '../Components/Products';
import Footer from '../Components/Footer';
export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <BrandsMarquee />
      <Products />
      <Footer />
    </>
  )
}
