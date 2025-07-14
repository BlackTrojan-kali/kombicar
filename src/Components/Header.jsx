import { faCar, faTaxi, faMagnifyingGlass, faUserCircle, faBars, faXmark, faChevronDown, faChevronUp, faHome, faSignInAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
  useEffect(() => {
    if (isMobileMenuOpen) {
      setIsDropDownActive(false);
    }
  }, [isMobileMenuOpen]);

  // Handle outside clicks to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isDropDownActive && !event.target.closest('.user-dropdown-container')) {
        setIsDropDownActive(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropDownActive]);

  return (
    <>
      {/* Desktop Header */}
      <header className='fixed top-0 left-0 w-full z-50 bg-white shadow-md hidden lg:flex items-center justify-between px-8 py-4'>
        {/* Logo */}
        <Link to="/" className='flex items-center gap-2'>
          <img src="/assets/default/logo_full.png" className='h-10' alt="Kombicar Logo" />
        </Link>

        {/* Primary Navigation */}
        <nav className='flex items-center gap-8 text-lg font-semibold text-gray-700'>
          <Link to="/carsharing" className='flex items-center hover:text-green-600 transition-colors duration-200'>
            <FontAwesomeIcon icon={faCar} className='mr-2' /> Covoiturage
          </Link>
          <Link to="/taxi" className='flex items-center hover:text-green-600 transition-colors duration-200'>
            <FontAwesomeIcon icon={faTaxi} className='mr-2' /> Taxi
          </Link>
        </nav>

        {/* User Actions / Secondary Navigation */}
        <nav className='flex items-center gap-6'>
          <Link to="/filtered-results" className='flex items-center text-gray-700 hover:text-green-600 transition-colors duration-200'>
            <FontAwesomeIcon icon={faMagnifyingGlass} className='text-xl mr-2' />
            <span className='font-semibold'>Rechercher</span>
          </Link>

          <div className='relative user-dropdown-container'> {/* Added class for outside click detection */}
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
                  className='flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors duration-200'
                  onClick={() => setIsDropDownActive(false)} // Close on click
                >
                  <FontAwesomeIcon icon={faSignInAlt} className='mr-3' /> Connexion
                </Link>
                <Link
                  to="/register"
                  className='flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors duration-200'
                  onClick={() => setIsDropDownActive(false)} // Close on click
                >
                  <FontAwesomeIcon icon={faUserPlus} className='mr-3' /> Inscription
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
        <button onClick={toggleMobileMenu} className='text-gray-700 focus:outline-none p-2'> {/* Added padding */}
          <FontAwesomeIcon icon={isMobileMenuOpen ? faXmark : faBars} className='text-2xl' />
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className='fixed inset-0 bg-white z-40 flex flex-col items-center py-20 px-8 animate-fade-in-right lg:hidden'>
          {/* Close button at top-right for better UX */}
          <button
            onClick={toggleMobileMenu}
            className='absolute top-4 right-4 text-gray-700 focus:outline-none p-2'
          >
            <FontAwesomeIcon icon={faXmark} className='text-3xl' />
          </button>

          <nav className='flex flex-col gap-6 text-xl font-semibold text-gray-800 mt-10 w-full'>
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className='flex items-center justify-center py-3 hover:bg-gray-100 rounded transition-colors duration-200'>
              <FontAwesomeIcon icon={faHome} className='mr-4 text-blue-600' /> Accueil
            </Link>
            <Link to="/carsharing" onClick={() => setIsMobileMenuOpen(false)} className='flex items-center justify-center py-3 hover:bg-gray-100 rounded transition-colors duration-200'>
              <FontAwesomeIcon icon={faCar} className='mr-4 text-blue-600' /> Covoiturage
            </Link>
            <Link to="/taxi" onClick={() => setIsMobileMenuOpen(false)} className='flex items-center justify-center py-3 hover:bg-gray-100 rounded transition-colors duration-200'>
              <FontAwesomeIcon icon={faTaxi} className='mr-4 text-blue-600' /> Taxi
            </Link>
            <Link to="/filtered-results" onClick={() => setIsMobileMenuOpen(false)} className='flex items-center justify-center py-3 hover:bg-gray-100 rounded transition-colors duration-200'>
              <FontAwesomeIcon icon={faMagnifyingGlass} className='mr-4 text-blue-600' /> Rechercher
            </Link>
            <Link to="/signin" onClick={() => setIsMobileMenuOpen(false)} className='flex items-center justify-center py-3 hover:bg-gray-100 rounded transition-colors duration-200'>
              <FontAwesomeIcon icon={faSignInAlt} className='mr-4 text-blue-600' /> Connexion
            </Link>
            <Link to="/register" onClick={() => setIsMobileMenuOpen(false)} className='flex items-center justify-center py-3 hover:bg-gray-100 rounded transition-colors duration-200'>
              <FontAwesomeIcon icon={faUserPlus} className='mr-4 text-blue-600' /> Inscription
            </Link>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;