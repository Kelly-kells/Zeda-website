import React from 'react'
import smartdata from "../Assets/smartdata.png"
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const Footer = () => {
  return (
    <section className='flex flex-col lg:flex-row justify-center text-white gap-8 m-8'>

  <div className='flex-1 p-4 flex flex-col items-center'>
    <img src={smartdata} alt="logo" className='w-20' />
  </div>

  <div className='flex-1 p-4 flex flex-col items-center lg:w-1/2'>
    <article className='text-slate-900'>
      <h2 className='py-4 font-bold'>
        Company
      </h2>
      <small>
        <a href="#">About Us</a>
        <p>News & Media</p>
        <a href="#">Contracts</a>
        <p><a href="#">Meet Our Team</a></p>
        <p><a href="#">Case Studies</a></p>
        <p><a href="#">Investors</a></p>
      </small>
    </article>
  </div>

  <div className='flex-1 p-4 flex flex-col items-center lg:w-1/2'>
    <article className='text-slate-900'>
      <h2 className='py-4 font-bold'>
        Solutions
      </h2>
      <small>
        <a href="#">IT Management</a>
        <p>Cyber Security</p>
        <a href="#">Cloud Computing</a>
        <p><a href="#">IT Consulting</a></p>
        <p><a href="#">Software Development</a></p>
        <p><a href="#">IT Support</a></p>
      </small>
    </article>
  </div>

  <div className='flex-1 p-4 flex flex-col items-center lg:w-1/2'>
    <article className='text-slate-900'>
      <h2 className='py-4 font-bold'>
        Resources
      </h2>
      <small>
        <a href="#">Pricing & Plans</a>
        <p>Terms of Service</p>
        <a href="#">Help & FAQ</a>
        <p><a href="#">Contact Us</a></p>
        <p><a href="#">Site Map</a></p>
      </small>
    </article>
  </div>

  <div className='flex-1 p-4 flex flex-col items-center lg:w-1/2'>
    <article className='text-slate-900'>
      <h2 className='py-4 font-bold'>
        Newsletter
      </h2>
      <form action="" className='border-2 border-solid border-gray-400 p-2'>
        <input type="email" placeholder='Your email' />
      </form>
    </article>
  </div>

</section>


  
  )
}

export default Footer