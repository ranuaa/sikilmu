import React from 'react'

import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Slider from '../Components/Slider'
import '../Style/Home.css'


const Home = () => {
  return (
    <div className='home'>
        <Navbar/>
        <Slider/>
        <Footer/>
    </div>
  )
}

export default Home