import React from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Solution from './components/it-solution/Solution'
import Features from './components/features/Features'
import Footer from "./components/footer/Footer"



const App = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Solution/>
        <Features />
        <Footer/>
       

       
    </div>
  )
}

export default App