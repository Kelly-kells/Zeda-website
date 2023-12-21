import React from 'react'
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import { TbSettingsFilled } from "react-icons/tb";
import "./solution.css"


const Solution = () => {
  return (
    <section className='w-full  bg-slate-900' id="solutions">
  <div className='flex items-center justify-center flex-col md:flex-row lg:flex-row container'>
    <div className="flex-1 text-white mt-14 text-center md:text-left lg:text-left">
     <span className="absolute bottom-1px left-0 ml-10 bg-green-500 h-1 w-60 "></span>
     <h1 className='mt-4 font-bold text-3xl'>Provides Consultative <br /> Approach <br />To Emerging Technology</h1>
    </div>

    <div className="flex-1 text-white mt-8 text-center md:ml-6 lg:ml-6">
      <h2 className='mt-4'>As one of the world's largest <br />IT/service providers with over<br />
      120 engineers and IT support staff<br />are ready to help</h2>
      <button className='rounded bg-green-500 w-36 h-8 mt-3 btn'>Our pricing</button>
    </div>

    <div className="flex-1 text-white mt-6 text-center md:ml-6 lg:ml-6">
      <h2 className='mt-4'>Smart data has been organizations <br />and providers through the world to<br />
       manage their IT with our unique <br />approach to technology management<br />and consultancy solutions.</h2>
    </div>
  </div>

  <div className='justify-center text-white flex flex-col md:flex-row lg:flex-row  lg:m-10 sm:m-0 mt-12  '>
  <div className='flex-1 h-30 m-8  p-4 flex flex-col  justify-center items-center border-solid border-2 border-gray-700'>
  <TbSettingsFilled color='grey' size={50} />
  
  <article className=' font-bold mt-2'>Software Assets</article>
  <small className='text-gray-300 mt-4'>
    All aspects of Your Software <br /> including purchasing<br />  deployment and maintenance
  </small>
  <a href="" className='mt-4'><FaRegArrowAltCircleRight size={20} color='white'/></a>
</div>


    <div className='flex-1 h-30 m-8 p-4 flex flex-col justify-center items-center border-solid border-2 border-gray-700'>
  <FaTools color='grey' size={50} />
  <article className=' font-bold mt-2' >Privileged Access</article>
  <small className='text-gray-300 mt-4'>
    Extend proven Tech best<br /> practices to Hr, Finance and<br />other service delivery.
  </small>
  <a href="" className='mt-4'><FaRegArrowAltCircleRight size={20} color='white'/></a>
</div>

    <div className='flex-1 h-30 m-8 p-4 flex flex-col justify-center items-center border-solid border-2 border-gray-700'>
  <TbSettingsFilled color='grey' size={50} />
  <article className=' font-bold mt-2'>Software Lincense</article>
  <small className=' text-gray-300 mt-4'>
    Build dynamic request <br /> templates with associated<br />  workflows and tasks.
  </small>
  <a href="" className='mt-4'><FaRegArrowAltCircleRight size={20} color='white'/></a>
</div>

<div className='flex-1 h-30 m-8 p-4 flex flex-col justify-center items-center border-solid border-2 border-gray-700'>
  <TbSettingsFilled color='grey' size={50} />
  <article className=' font-bold mt-2'>Software Lincense</article>
  <small className=' text-gray-300 mt-4'>
    Build dynamic request <br /> templates with associated<br />  workflows and tasks.
  </small>
  <a href="" className='mt-4'><FaRegArrowAltCircleRight size={20} color='white'/></a>
</div>

    
  </div>
</section>

  
  )
}

export default Solution;