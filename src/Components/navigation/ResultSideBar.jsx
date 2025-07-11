import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faDollarSign, faFilter, faUsers, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const ResultSidebar = () => {
  // State for managing collapse/expand of filter sections
  const [showPriceFilter, setShowPriceFilter] = useState(true);
  const [showTimeFilter, setShowTimeFilter] = useState(true);
  const [showPassengersFilter, setShowPassengersFilter] = useState(true);

  return (
    <div className='p-4 bg-white rounded-lg shadow-md h-full'>
      <h2 className='text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3'>
        <FontAwesomeIcon icon={faFilter} className='text-blue-500' />
        Filtres
      </h2>

      {/* Price Filter Section */}
      <div className='mb-6 border-b border-gray-200 pb-4'>
        <button
          className='w-full flex justify-between items-center text-lg font-semibold text-gray-700 hover:text-blue-600 transition-colors duration-200'
          onClick={() => setShowPriceFilter(!showPriceFilter)}
        >
          Prix
          <FontAwesomeIcon icon={showPriceFilter ? faChevronUp : faChevronDown} className='text-sm text-gray-500' />
        </button>
        {showPriceFilter && (
          <div className='mt-4 flex flex-col gap-2 animate-fade-in-down'>
            <label className='flex items-center text-gray-700'>
              <input type='checkbox' className='form-checkbox h-5 w-5 text-blue-600 rounded mr-2' />
              Moins de 5 000 FCFA
            </label>
            <label className='flex items-center text-gray-700'>
              <input type='checkbox' className='form-checkbox h-5 w-5 text-blue-600 rounded mr-2' />
              5 000 - 10 000 FCFA
            </label>
            <label className='flex items-center text-gray-700'>
              <input type='checkbox' className='form-checkbox h-5 w-5 text-blue-600 rounded mr-2' />
              Plus de 10 000 FCFA
            </label>
            {/* Example: Price Range Slider (can be implemented with a library like react-slider) */}
            {/* <div className='mt-4'>
              <label htmlFor='price-range' className='block text-sm font-medium text-gray-700 mb-2'>Fourchette de prix</label>
              <input type='range' id='price-range' min='0' max='20000' step='1000' className='w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600' />
              <div className='flex justify-between text-xs text-gray-500 mt-1'>
                <span>0 FCFA</span>
                <span>20 000+ FCFA</span>
              </div>
            </div> */}
          </div>
        )}
      </div>

      {/* Departure Time Filter Section */}
      <div className='mb-6 border-b border-gray-200 pb-4'>
        <button
          className='w-full flex justify-between items-center text-lg font-semibold text-gray-700 hover:text-blue-600 transition-colors duration-200'
          onClick={() => setShowTimeFilter(!showTimeFilter)}
        >
          Heure de départ
          <FontAwesomeIcon icon={showTimeFilter ? faChevronUp : faChevronDown} className='text-sm text-gray-500' />
        </button>
        {showTimeFilter && (
          <div className='mt-4 flex flex-col gap-2 animate-fade-in-down'>
            <label className='flex items-center text-gray-700'>
              <input type='checkbox' className='form-checkbox h-5 w-5 text-blue-600 rounded mr-2' />
              Matin (00h - 12h)
            </label>
            <label className='flex items-center text-gray-700'>
              <input type='checkbox' className='form-checkbox h-5 w-5 text-blue-600 rounded mr-2' />
              Après-midi (12h - 18h)
            </label>
            <label className='flex items-center text-gray-700'>
              <input type='checkbox' className='form-checkbox h-5 w-5 text-blue-600 rounded mr-2' />
              Soir (18h - 23h59)
            </label>
          </div>
        )}
      </div>

      {/* Number of Passengers Filter Section */}
      <div className='mb-6 border-b border-gray-200 pb-4'>
        <button
          className='w-full flex justify-between items-center text-lg font-semibold text-gray-700 hover:text-blue-600 transition-colors duration-200'
          onClick={() => setShowPassengersFilter(!showPassengersFilter)}
        >
          Nombre de places
          <FontAwesomeIcon icon={showPassengersFilter ? faChevronUp : faChevronDown} className='text-sm text-gray-500' />
        </button>
        {showPassengersFilter && (
          <div className='mt-4 flex flex-col gap-2 animate-fade-in-down'>
            <label className='flex items-center text-gray-700'>
              <input type='checkbox' className='form-checkbox h-5 w-5 text-blue-600 rounded mr-2' />
              1 place
            </label>
            <label className='flex items-center text-gray-700'>
              <input type='checkbox' className='form-checkbox h-5 w-5 text-blue-600 rounded mr-2' />
              2 places
            </label>
            <label className='flex items-center text-gray-700'>
              <input type='checkbox' className='form-checkbox h-5 w-5 text-blue-600 rounded mr-2' />
              3 places ou plus
            </label>
          </div>
        )}
      </div>

      {/* Additional Filters can go here (e.g., driver rating, vehicle type, amenities) */}

      <button className='w-full py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors duration-200'>
        Appliquer les filtres
      </button>
    </div>
  );
};

export default ResultSidebar;