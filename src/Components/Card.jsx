import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Card = ({ imageUrl, depart, arrivee, prix, driver, distance, trajets }) => {
  return (
    <div className='relative w-[340px] bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02] cursor-pointer'>
      {/* Image Section */}
      <img
        src={imageUrl}
        alt={`${depart} to ${arrivee}`}
        className='w-full h-[180px] object-cover transition-transform duration-300 hover:scale-105'
      />

      {/* Main Content Area */}
      <div className='p-6'>
        {/* Departure and Arrival */}
        <div className='flex items-center justify-between text-gray-800 mb-4'>
          <p className='font-bold text-2xl'>{depart}</p>
          <FontAwesomeIcon icon={faArrowRight} className='text-xl text-gray-500 mx-2' />
          <p className='font-bold text-2xl'>{arrivee}</p>
        </div>

        {/* Price and View Details Button */}
        <div className='flex items-end justify-between mt-4'>
          <div>
            <b className='text-sm text-gray-500 block'>Prix à partir de</b>
            <b className='text-3xl font-extrabold text-green-600'>{prix} XAF</b>
          </div>
          <button className='absolute bottom-[100px] right-6 p-3 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-colors duration-200'>
            <FontAwesomeIcon icon={faArrowRight} className='text-xl' />
          </button>
        </div>

        {/* Separator Line */}
        <div className='h-[1px] w-full bg-gray-200 mt-8 mb-4'></div>

        {/* Driver, Distance, and Trajets */}
        <div className='grid grid-cols-2 gap-4 text-gray-700'>
          <div>
            <b className='text-xs text-gray-500 block mb-1'>Chauffeur</b>
            <p className='text-lg font-semibold'>{driver}</p>
          </div>
          <div>
            <b className='text-xs text-gray-500 block mb-1'>Distance</b>
            <p className='text-lg font-semibold'>{distance} km</p>
          </div>
          <div className='col-span-2'> {/* This will take full width on a 2-column grid */}
            <b className='text-xs text-gray-500 block mb-1'>Trajets effectués</b>
            <p className='text-lg font-semibold'>{trajets}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;