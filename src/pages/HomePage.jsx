import React from 'react'
import Layout from '../components/layout/Layout'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import ProductRangeSection from '../components/ProductRangeSection'
import FaqSection from '../components/FaqSection'
import PromotersProfile from '../components/PromotersProfile'
import VehicleShowcase from '../components/VehicleShowcase'

const HomePage = () => {
  return (
    <Layout>
        <HeroSection/>
        <AboutSection/>
      <VehicleShowcase />
        <ProductRangeSection/>
        <FaqSection/>
        <PromotersProfile/>
    </Layout>
  )
}

export default HomePage