import React from 'react'
import Announce from '../components/Announce'
import Catagories from '../components/Catagories'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import NewsLetter from '../components/NewsLetter'
import Products from '../components/Products'
import Slider from '../components/Slider'


 function Home(props) {
    

    return (
        <>
        <Announce/>
       <Navbar/>
       <Slider/>
       <Catagories/>
       <Products/>
       <NewsLetter/>
       <Footer/>
    
        </>
    )
}
export default Home