import React from 'react'
import Announce from '../components/Announce'
import Catagories from '../components/Catagories'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'


 function Home(props) {
    

    return (
        <>
        <Announce/>
       <Navbar/>
       <Slider/>
       <Catagories/>
    
        </>
    )
}
export default Home