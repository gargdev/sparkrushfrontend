import React, { useRef } from 'react';
import { Link } from 'react-router-dom'; // Import Link component from react-router-dom
import Logo from '../assets/Group 2.png';
import '../styles/navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle('responsive_nav');
  };

  return (
    <div className="nav">
      <div className="nav-logo">
        <Link to="/"><img src={Logo} alt="Sparkrush logo" /></Link>
      </div>
      <ul className="nav-links" ref={navRef}>
        {/* Use Link components for navigation */}
        <li><Link to="/about" onClick={showNavbar}>About Us</Link></li>
        <li><Link to="/faq" onClick={showNavbar}>FAQ's</Link></li>
        {/* Close button for mobile navigation */}
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </ul>
      {/* Hamburger button to show navigation links */}
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </div>
  );
};

export default Navbar;
