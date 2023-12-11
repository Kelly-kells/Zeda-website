import React from 'react'
import "./hero.css"

const Hero = () => {
  return (
   <section id='home' className='w-full 
    justify-center min-h-screen xl:flex-row flex-col gap-10 max-container container'>
      
      <div className='relative xl:w-2/5 flex flex-col justify-center w-full max-xl:padding-x pt-28 text-white '>
  <h1 className='text-5xl font-bold'> WE Run All Kinds Of Services That Vow Your success</h1>
  <p className='font-medium mt-5'>We are experienced profesionals who understand that our servies are changing Lorem 
    ipsum dolor sit amet consectetur adipisicing elit. ipsum dolor sit amet consectetur adipisicing elit. </p>
    <div className="hero-btn flex  mt-4">
    <button className='rounded bg-green-500 w-32 h-10  '>more about us</button> 
    <button className='rounded  bg-white text-black  w-32 h-10 ml-8'>our services</button> 
    </div>


</div>
  
    

   </section>
  )
}

export default Hero