import React from 'react'
import Navbar from '../components/Navbar'
import Home from '../pages/home/Home'
import "../App.css"



const Main = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      
      
      
      <outlet/>
     
      
      
    </div>
  )
}

export default Main
