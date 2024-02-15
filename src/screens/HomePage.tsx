import React from 'react'
import { CravingSection, HeroSection, RecommendedSection } from './homepage-sections'
import { Footer } from '../components'

const HomePage:React.FC = () => {
  return (
    <div className='flex flex-col gap-16 md:gap-32 lg:gap-48'>
      <HeroSection/>
      <RecommendedSection/>
      <CravingSection/>
      <Footer/>
    </div>
  )
}

export default HomePage
