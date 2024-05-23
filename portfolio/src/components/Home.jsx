import React from 'react'
import {motion, useInView} from 'framer-motion'
import Circles from './Circles'
import About from './About'
import Songlist from './Songlist'
import Links from './Links'
import Contact from './Contact'
const Home = () => {
  return (
    <div className='home-wrapper'>
      <div className="home-left">
      <div className="top-name-wrapper">
            <Circles/>
            <div className="border"></div>
        </div>
        <About/>

      </div>
      <div className="home-right">
        <Contact/>
        <div className="border"></div>
        <Songlist/>
        <div className="border"></div>
        <Links/>
      </div>
      
        
  </div>
  )
}

export default Home