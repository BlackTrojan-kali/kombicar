import { faChevronDown, faChevronUp, faMagnifyingGlass, faUserCircle, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Using react-router-dom for Link

const Header = () => {
  const [isDropDownActive, setIsDropDownActive] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDropDown = () => {
    setIsDropDownActive(!isDropDownActive);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close dropdown when mobile menu opens/closes to avoid conflicts
  React.useEffect(() => {
    if (isMobileMenuOpen) {
      setIsDropDownActive(false);
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Desktop Header */}
      <header className='fixed top-0 left-0 w-full z-50 bg-white shadow-md hidden lg:flex items-center justify-between px-8 py-4'>
        {/* Logo */}
        <Link to="/" className='flex items-center gap-2'>
          <img src="/assets/default/logo_full.png" className='h-10' alt="Kombicar Logo" />
        </Link>

        {/* Primary Navigation */}
        <nav className='flex gap-8 text-lg font-semibold text-gray-700'>
          <Link to="/carsharing" className='hover:text-green-600 transition-colors duration-200'>Covoiturage</Link>
          <Link to="/vtc" className='hover:text-green-600 transition-colors duration-200'>VTC</Link>
        </nav>

        {/* User Actions / Secondary Navigation */}
        <nav className='flex items-center gap-6'>
          <Link to="/filtered-results" className='flex items-center text-gray-700 hover:text-green-600 transition-colors duration-200'>
            <FontAwesomeIcon icon={faMagnifyingGlass} className='text-xl' />
            <span className='ml-2 font-semibold'>Rechercher</span>
          </Link>

          <div className='relative'>
            <button
              onClick={toggleDropDown}
              className='flex items-center gap-2 text-gray-700 hover:text-green-600 transition-colors duration-200 focus:outline-none'
            >
              <FontAwesomeIcon icon={faUserCircle} className='text-3xl' />
              {isDropDownActive ?
                <FontAwesomeIcon icon={faChevronUp} className='text-xs' /> :
                <FontAwesomeIcon icon={faChevronDown} className='text-xs' />}
            </button>

            {/* Dropdown Menu */}
            {isDropDownActive && (
              <div className='absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50 animate-fade-in-down'>
                <Link
                  to="/signin"
                  className='block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors duration-200'
                  onClick={() => setIsDropDownActive(false)} // Close on click
                >
                  Connexion
                </Link>
                <Link
                  to="/register"
                  className='block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors duration-200'
                  onClick={() => setIsDropDownActive(false)} // Close on click
                >
                  Inscription
                </Link>
              </div>
            )}
          </div>
        </nav>
      </header>

      {/* Mobile Header (visible on smaller screens) */}
      <header className='fixed top-0 left-0 w-full z-50 bg-white shadow-md flex lg:hidden items-center justify-between px-4 py-3'>
        {/* Logo */}
        <Link to="/" className='flex items-center gap-2'>
          <img src="/assets/default/logo_full.png" className='h-8' alt="Kombicar Logo" />
        </Link>

        {/* Mobile Menu Toggle */}
        <button onClick={toggleMobileMenu} className='text-gray-700 focus:outline-none'>
          <FontAwesomeIcon icon={isMobileMenuOpen ? faXmark : faBars} className='text-2xl' />
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className='fixed inset-0 bg-white z-40 flex flex-col items-center py-20 px-8 animate-fade-in-right lg:hidden'>
          <nav className='flex flex-col gap-6 text-xl font-semibold text-gray-800 mt-10'>
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className='hover:text-green-600 transition-colors duration-200'>Accueil</Link>
            <Link to="/carsharing" onClick={() => setIsMobileMenuOpen(false)} className='hover:text-green-600 transition-colors duration-200'>Covoiturage</Link>
            <Link to="/vtc" onClick={() => setIsMobileMenuOpen(false)} className='hover:text-green-600 transition-colors duration-200'>VTC</Link>
            <Link to="/filtered-results" onClick={() => setIsMobileMenuOpen(false)} className='hover:text-green-600 transition-colors duration-200'>Rechercher</Link>
            <Link to="/signin" onClick={() => setIsMobileMenuOpen(false)} className='hover:text-green-600 transition-colors duration-200'>Connexion</Link>
            <Link to="/register" onClick={() => setIsMobileMenuOpen(false)} className='hover:text-green-600 transition-colors duration-200'>Inscription</Link>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;