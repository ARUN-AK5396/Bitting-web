import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AiOutlineMenuFold, AiOutlineClose, AiOutlineHome, AiOutlineLineChart, AiOutlineUnorderedList, AiOutlineMail } from 'react-icons/ai'; // Import icons
import Logo from '../Img/logo.jpeg';
import {Link } from 'react-router-dom'
import './NavbarStyles.css';

function Navbar() {
  const transition = { duration: 2, type: "spring" };
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    if (mobileMenuOpen) {
      // Close the menu with a delay
      setTimeout(() => {
        setMobileMenuOpen(false);
      }, 300); // Adjust the delay (in milliseconds) as needed
    } else {
      setMobileMenuOpen(true);
    }
  };
  

  return (
    <div>
      <div className="navbar_container">
        <div className="logo_container">
          <motion.img
            className='logo_img'
            initial={{ left: "-36%" }}
            whileInView={{ left: "24%" }}
            transition={transition}
            src={Logo}
            alt='Logo'
          />
          <h2 className='header'>Skull Betting</h2>
        </div>

        <div className="navigation_container">
            <Link to="/" className='navigation'>Home</Link>
            <Link to='/prediction' className='navigation'>Predictions</Link>
            <Link to="/accumalator" className='navigation'>Accumulator</Link>
            <Link to="/contactus" className='navigation'>ContactUS</Link>
        </div>

        <div className="mobile-menu-button" onClick={toggleMobileMenu}>
          <AiOutlineMenuFold size={26} />
        </div>

        <div className={`side-navigation ${mobileMenuOpen ? 'active' : ''}`}>
          <div className="close-button" onClick={toggleMobileMenu}>
            <AiOutlineClose size={26} />
          </div>
          <div className="mobile-menu">
            <h3 className="mobile-menu-item">
              <AiOutlineHome size={20} />
              <Link to="/" className='item_name'>Home</Link>
            </h3>
            <h3 className="mobile-menu-item">
              <AiOutlineLineChart size={20} />
              <Link to="/prediction" className='item_name'>Predictions</Link>
            </h3>
            <h3 className="mobile-menu-item">
              <AiOutlineUnorderedList size={20} />
              <Link to="/accumalator" className='item_name'>Accumulator</Link>
            </h3>
            <h3 className="mobile-menu-item">
              <AiOutlineMail size={20} />
              <Link to="/contactus" className='item_name'>Contact Us</Link>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
