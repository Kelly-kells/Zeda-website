import React, { useState } from 'react';
import "./navbar.css"
import logo from "../Assets/smartdata-high-resolution-logo-transparent.png"

const Navbar = () => {
  const [dropdown1, setDropdown1] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);

  const toggleDropdown1 = () => setDropdown1(!dropdown1);
  const toggleDropdown2 = () => setDropdown2(!dropdown2);

  return (
    <nav className="flex bg-gray-800 p-4">
    <div className="container mx-auto flex justify-between items-center">
      <img className='logo' src={logo} alt="" />
      <div className="hidden md:flex flex-grow justify-end space-x-4">
        <div className="group relative">
          <button className="text-white hover:text-gray-300 focus:outline-none focus:border-opacity-0" onClick={toggleDropdown1}>
            Home
          </button>
          {dropdown1 && (
            <div className="absolute hidden mt-2 space-y-2 bg-gray-800 border border-gray-700">
              <a href="#" className="block px-4 py-2 text-white hover:bg-gray-700">Sublink 1</a>
              <a href="#" className="block px-4 py-2 text-white hover:bg-gray-700">Sublink 2</a>
              <a href="#" className="block px-4 py-2 text-white hover:bg-gray-700">Sublink 3</a>
            </div>
          )}
        </div>

        <div className="group relative">
          <button className="text-white hover:text-gray-300 focus:outline-none focus:border-opacity-0" onClick={toggleDropdown2}>
            Company
          </button>
          {dropdown2 && (
            <div className=" hidden mt-2 space-y-2 bg-gray-800 border border-gray-700">
              <div className='block'>
              <a href="#" className="block px-4 py-2 text-white hover:bg-gray-700">About Us</a>
              <a href="#" className="block px-4 py-2 text-white hover:bg-gray-700">Mission</a>
              <a href="#" className="block px-4 py-2 text-white hover:bg-gray-700">Values</a>
              </div>
            </div>
          )}
        </div>

        {/* Add other links here */}

      </div>

      {/* Add other buttons or components as needed */}

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button id="mobile-menu-btn" className="text-white focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
    </div>

    {/* Mobile Menu */}
    <div id="mobile-menu" className="md:hidden hidden bg-gray-800 p-4">
      {/* Render mobile menu links here */}
    </div>
  </nav>
);
};










  

export default Navbar;
;