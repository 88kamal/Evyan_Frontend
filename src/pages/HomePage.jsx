import React from 'react'
import Layout from '../components/layout/Layout'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import ProductRangeSection from '../components/ProductRangeSection'
import FaqSection from '../components/FaqSection'

const HomePage = () => {
  return (
    <Layout>
        <HeroSection/>
        <AboutSection/>
        <ProductRangeSection/>
        <FaqSection/>
    </Layout>
  )
}

export default HomePage