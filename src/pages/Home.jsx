import React from 'react'
import ScrollToTopButton from '../components/ScrollToTopButton'
import HeroSection from '../components/HeroSection'
import ProductSection from '../components/ProductSection'

function Home() {
  return (
    <div>
      <HeroSection />
      <ProductSection />
      <ScrollToTopButton />
    </div>
  )
}

export default Home