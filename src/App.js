import React from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Solution from './components/it-solution/Solution'
import Features from './components/features/Features'



const App = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Solution/>
        <Features />
       

       
    </div>
  )
}

export default App