import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi'; 
import Logo from '../../assets/logo.svg'; 
import './navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-Charcoal text-sm py-4 mt-2 dark:bg-Charcoal">
      <nav className="max-w-[85rem] w-full mx-auto flex flex-wrap basis-full items-center justify-between" aria-label="Global">
        <NavLink to="/" className="sm:order-1 flex-none text-xl font-semibold dark:text-white">
          <img src={Logo} alt='logo' className='h-7' />
        </NavLink>
        <div className="sm:order-3 flex items-center gap-x-2">
          <button 
            type="button" 
            className="sm:hidden hs-collapse-toggle p-2.5 inline-flex justify-center items-center gap-x-2 rounded-lg border border-NeonWhite text-NeonWhite shadow-sm hover:bg-NeonWhite disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-gray-700 dark:text-white dark:hover:bg-white/10 " 
            onClick={toggleMobileMenu} 
            aria-label="Toggle navigation"
          >
            {isMobileMenuOpen ? (
              <FiX size={15} /> 
            ) : (
              <FiMenu size={15} /> 
            )}
          </button>
          <button type="button" className="py-0.5 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-NeonWhite text-NeonWhite button-contact-us">
            Contact Us
          </button>
        </div>
        <div id="navbar-alignment" className={`hs-collapse transition-all duration-300 basis-full grow sm:grow-0 sm:basis-auto sm:block sm:order-2 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:mt-0 sm:ps-5">
            <NavLink to="" className="font text-NeonWhite hover:text-Coral dark:hover:text-Coral">LEARNING</NavLink>
            <NavLink to="" className="font text-NeonWhite hover:text-Coral dark:hover:text-Coral">NEWS</NavLink>
            <NavLink to="/about" className="font text-NeonWhite hover:text-Coral dark:hover:text-Coral">ABOUT</NavLink>
            <NavLink to="" className="font text-NeonWhite hover:text-Coral dark:hover:text-Coral">TEAM</NavLink>
            <NavLink to="/career" className="font text-NeonWhite hover:text-Coral  dark:hover:text-Coral">CAREER</NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
