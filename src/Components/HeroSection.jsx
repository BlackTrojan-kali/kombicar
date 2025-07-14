import React from 'react';
// We don't need faCircle or faLocation if they're not used here directly.
// The SearchBar component already handles its own icons.
// import { faCircle, faLocation } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SearchBar from './SearchBar';

const HeroSection = ({ showLogo = true, label }) => {
  return (
    // The hero-section class would ideally come from your global CSS for background image
    // For Tailwind, you might define it in tailwind.config.js or use inline styles/global CSS.
    // Assuming 'hero-background' is a global CSS class for background image/color
    <div className='hero-background relative pt-10 pb-48 md:pb-64 lg:pb-80 xl:pb-96
                  px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 flex flex-col items-center justify-center text-center'>

      {/* Conditional Logo Display */}
      {showLogo && (
        <div className='flex items-center justify-center text-white mb-6 mt-16 md:mt-24 lg:mt-32'>
          <img src="/assets/default/logo.png" className='w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 object-contain mr-2' alt="Kombicar Logo" />
          <p className='text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight'>ombicar</p>
        </div>
      )}

      {/* Dynamic Label/Headline */}
      <h1 className='text-white font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight mt-4 mb-12'>
        {label}
      </h1>

      {/* SearchBar Component */}
      <div className='w-full max-w-4xl'> {/* Added wrapper for max-width on SearchBar */}
        <SearchBar />
      </div>

    </div>
  );
};

export default HeroSection;