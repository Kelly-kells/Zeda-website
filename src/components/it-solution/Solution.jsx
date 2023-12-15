import React from 'react'
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import "./solution.css"


const Solution = () => {
  return (
    <section className='w-full min-h-screen bg-slate-900' id="solutions">
  <div className='flex items-center justify-center flex-col md:flex-row lg:flex-row container'>
    <div className="flex-1 text-white mt-14 text-center md:text-left lg:text-left">
      <span className="absolute bottom-1px left-0 ml-10 bg-green-500 h-1 w-60 "></span>
      <h1 className='mt-4 font-bold text-3xl'>Provides Consultative <br /> Approach <br />To Emerging Technology</h1>
    </div>

    <div className="flex-1 text-white mt-8 text-center md:ml-6 lg:ml-6">
      <h2 className='mt-4'>As one of the world's largest <br />IT/service providers with over<br />
        120 engineers and IT support staff<br />are ready to help</h2>
      <button className='rounded bg-green-500 w-36 h-8 mt-3'>Our pricing</button>
    </div>

    <div className="flex-1 text-white mt-6 text-center md:ml-6 lg:ml-6">
      <h2 className='mt-4'>Smart data has been organizations <br />and providers through the world to<br />
        manage their IT with our unique <br />approach to technology management<br />and consultancy solutions.</h2>
    </div>
  </div>

  <div>
    
  </div>
</section>

  
  )
}

export default Solution;