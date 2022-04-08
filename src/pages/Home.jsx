import React from 'react'
import Announcement from '../components/Announcement'
import NavBar from '../components2/NavBar'
import Slider from '../components/Slider'
import Categories from "../components/Categories"
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Announcement/>
      <NavBar/>
      <Slider/>
      <Categories/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default Home