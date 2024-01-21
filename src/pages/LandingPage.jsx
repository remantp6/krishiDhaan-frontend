import React from 'react'
import NavBar from '../common/NavBar'
import HeroBanner from '../components/HeroBanner'
import About from '../components/About'
import Features from '../components/Features'
import Solution from '../components/FileUpload'
import Footer from '../common/Footer'

const LandingPage = () => {
  return (
    <>
      <NavBar/>
      <HeroBanner/>
      <About/>
      <Features/>
      <Solution/>
      <Footer/>
    </>
  )
}

export default LandingPage
