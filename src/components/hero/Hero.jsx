import React from 'react'
import "./hero.css"

const Hero = () => {
  return (
    <section id='home' className='w-full justify-center min-h-screen xl:flex-row flex-col gap-10 hero-bg'>

  <div className='relative xl:w-2/5 flex flex-col justify-center w-full max-xl:padding-x pt-28 text-white  section-container text-center sm:text-left sm:ml-0 lg:ml-10'>
    <h1 className='text-5xl font-bold'>We Run All Kinds Of Services That Vow Your Success</h1>
    <p className='font-medium mt-5'>We are experienced professionals who understand that our services are changing. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum dolor sit amet consectetur adipisicing elit.</p>
    <div className="hero-btn flex lg:justify-normal sm:justify-center mt-6">
      <button className='rounded bg-green-500 w-32 h-10'>More About Us</button>
      <button className='rounded bg-white text-black w-32 h-10 ml-8'>Our Services</button>
    </div>
  </div>

</section>

  


  
  )
}

export default Hero