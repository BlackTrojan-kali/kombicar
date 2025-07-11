import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCircle, faDollarSign, faInfoCircle, faStar, faUserCircle } from '@fortawesome/free-solid-svg-icons'; // Added useful icons

const ResultCard = ({ depart, arrivee, heureDepart, heureArrivee, prix, chauffeur, details }) => {
  // Fallback for missing chauffeur profile image
  const profileImage = chauffeur?.profile || '/assets/default/user-placeholder.png'; // Make sure you have a default placeholder
  const driverName = chauffeur?.username || 'Chauffeur inconnu';

  // Basic validation for prices
  const formattedPrice = prix ? `${prix.toLocaleString('fr-FR')} FCFA` : 'N/A';

  return (
    <div className='w-full bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 ease-in-out border-l-8 border-transparent hover:border-blue-600 cursor-pointer overflow-hidden'>
      <div className='p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6'>

        {/* Departure & Arrival Times/Locations */}
        <div className='flex items-center gap-4 flex-grow'>
          {/* Departure Info */}
          <div className='flex flex-col items-center text-center'>
            <p className='text-xl font-bold text-gray-800'>{heureDepart}</p>
            <p className='text-sm text-gray-600'>{depart}</p>
          </div>

          {/* Separator / Duration indicator (simplified for now) */}
          <div className='flex flex-col items-center flex-grow mx-4'>
            <FontAwesomeIcon icon={faCircle} className='text-xs text-gray-400 mb-1' />
            <div className='w-full h-px bg-gray-300'></div> {/* Line between circles */}
            <FontAwesomeIcon icon={faCircle} className='text-xs text-gray-400 mt-1' />
          </div>

          {/* Arrival Info */}
          <div className='flex flex-col items-center text-center'>
            <p className='text-xl font-bold text-gray-800'>{heureArrivee}</p>
            <p className='text-sm text-gray-600'>{arrivee}</p>
          </div>
        </div>

        {/* Driver Info & Price */}
        <div className='flex flex-col items-end md:items-center gap-4 md:gap-0 md:ml-auto'>
          {/* Price */}
          <div className='text-2xl font-extrabold text-blue-600 whitespace-nowrap mb-4 md:mb-0'>
            {formattedPrice}
          </div>

          {/* Driver Profile */}
          <div className='flex items-center gap-3 bg-gray-100 px-4 py-2 rounded-full shadow-sm'>
            <img
              src={profileImage}
              alt={driverName}
              className='w-10 h-10 rounded-full object-cover border border-gray-200'
            />
            <div className='flex flex-col'>
              <p className='font-semibold text-gray-800'>{driverName}</p>
              {/* Optional: Driver rating/info */}
              <span className='text-sm text-yellow-500 flex items-center gap-1'>
                <FontAwesomeIcon icon={faStar} /> 4.8
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Details/Tags (Optional) */}
      {details && (
        <div className='p-4 border-t border-gray-100 bg-gray-50 text-gray-700 text-sm'>
          <FontAwesomeIcon icon={faInfoCircle} className='mr-2 text-blue-500' />
          {details}
        </div>
      )}

    </div>
  );
};

export default ResultCard;