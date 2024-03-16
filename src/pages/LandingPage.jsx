import React from 'react'
import HeroBanner from '../components/HeroBanner'
import About from '../components/About'
import Features from '../components/Features'
import Solution from '../components/FileUpload'
import Layout from '../components/common/Layout'
import ContactUs from '../components/ContactUs'

const LandingPage = () => {
  return (
    <>  
      <Layout>
      <HeroBanner/>
      <About/>
      <Features/>
      <Solution/>
      <ContactUs/>
      </Layout>
    </>
  )
}

export default LandingPage
