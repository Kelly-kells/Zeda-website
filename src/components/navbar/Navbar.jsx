import React from 'react';
import logo from "../Assets/smartdata.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdContact } from "react-icons/io";
import { navLinks } from '../../constants';
import "./navbar.css";

const Navbar = () => {
  return (
    <header className='padding-x py-8 z-10 w-full bg-black'>
      <nav className='flex justify-between items-center max-container'>
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
        <ul className='flex-1 flex justify-center gap-10 max-lg:hidden ml-28'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a href={item.href} className='font-monserrat leading-normal text-white text-md relative'>
                {item.label}
                <span className="absolute bottom-0 left-0 bg-green-500 h-1 w-full transform scale-x-0 origin-left transition-transform hover:scale-x-100 active:scale-x-100"></span>
              </a>
            </li>
          ))}
          <button className='bg-white p-2 rounded'>Request a quote</button>
          <a href="#contact" className='flex items-center font-monserrat leading-normal text-white text-lg' >
            <IoMdContact size={20} color="green" />
            Login
          </a>
        </ul>
        <div className='hidden max-lg:block'>
          <GiHamburgerMenu color='white' size={40} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
