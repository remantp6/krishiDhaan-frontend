import React from 'react'
import Hero from "../assets/images/Hero.png";
import HeroTitle from './HeroTitle';

const HeroBanner = () => {
  return (
    <>
      <img src={Hero} alt="hero" className="w-screen h-screen object-cover"/>
      <HeroTitle/>
    </>
  )
}

export default HeroBanner
