import React, { useState } from 'react';
import './navbar.css'; 

const Navbar = () => {
  const [dropdown1, setDropdown1] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);

  const toggleDropdown1 = () => setDropdown1(!dropdown1);
  const toggleDropdown2 = () => setDropdown2(!dropdown2);

  return (
    <nav className="navbar">
      <a href="#home">Home</a>
      <div className="dropdown">
        <button className="dropbtn" onClick={toggleDropdown1}>Company</button>
        {dropdown2 && (
          <div className="dropdown-content">
            <a href="#">Software</a>
            <a href="#">Hardware</a>
            <a href="#">Services</a>
          </div>
        )}
      </div>
      <div className="dropdown">
        <button className="dropbtn" onClick={toggleDropdown2}>IT Solutions</button>
        {dropdown2 && (
          <div className="dropdown-content">
            <a href="#">Software</a>
            <a href="#">Hardware</a>
            <a href="#">Services</a>
          </div>
        )}
      </div>

      <div className="dropdown">
        <button className="dropbtn" onClick={toggleDropdown2}>News & Media</button>
        {dropdown2 && (
          <div className="dropdown-content">
            <a href="#">Software</a>
            <a href="#">Hardware</a>
            <a href="#">Services</a>
          </div>
        )}
      </div>

      <div className="dropdown">
        <button className="dropbtn" onClick={toggleDropdown2}>Features</button>
        {dropdown2 && (
          <div className="dropdown-content">
            <a href="#">Software</a>
            <a href="#">Hardware</a>
            <a href="#">Services</a>
          </div>
        )}
      </div>

      <a href="#news"></a>
      
      <a href="#contacts">Contacts</a>

      <div className="right-navbar">
        <a href="#request">Request a Quote</a>
        <a href="#login">Login</a>
      </div>
    </nav>
  );
};

export default Navbar;