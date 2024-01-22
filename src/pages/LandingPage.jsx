import React from 'react'
//import NavBar from '../common/NavBar'
import HeroBanner from '../components/HeroBanner'
import About from '../components/About'
import Features from '../components/Features'
import Solution from '../components/FileUpload'
//import Footer from '../common/Footer'
import Layout from '../components/common/Layout'

const LandingPage = () => {
  return (
    <>  
      <Layout>
      <HeroBanner/>
      <About/>
      <Features/>
      <Solution/>
      </Layout>
    </>
  )
}

export default LandingPage
