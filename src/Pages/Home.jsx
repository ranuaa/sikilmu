import React from 'react'
import Category from '../Components/Category'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Slider from '../Components/Slider'
import '../Style/Home.css'

const Home = () => {
  return (
    <div className='home'>
        <Navbar/>
        <Slider/>
        <Category/>
        <Footer/>
    </div>
  )
}

export default Home