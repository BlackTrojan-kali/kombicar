import { faCar, faChair, faChevronRight, faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const TripDetails = () => {
  return (
    <>
      {/* Ajoutez un padding top au body ou à une div englobante si ces br sont pour l'espacement */}
      {/* <br /><br /><br /><br />  -- Souvent mieux géré avec du padding ou margin Tailwind */}
      <main className='max-w-3xl mx-auto p-4 sm:p-6 lg:p-8 flex flex-col gap-6'>
        {/* En-tête de la page */}
        <h1 className='font-bold text-3xl text-gray-900 mt-8'>Lundi 14 juillet 2025</h1>

        {/* Bloc récapitulatif du trajet */}
        <div className='bg-white p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center justify-between gap-4'>
          <div className='text-center md:text-left'>
            <b className='text-3xl font-extrabold text-blue-600'>12h20</b>
            <span className='block text-lg text-gray-700 mt-1'>Yaoundé</span>
          </div>

          <div className='relative flex-grow px-4 text-center'>
            <p className='text-4xl text-gray-800 font-extrabold mb-2'>6000 XAF</p>
            <div className='w-full h-1 bg-gray-300 rounded-full my-2 relative'>
              {/* Point de départ et d'arrivée sur la ligne, si souhaité */}
              <div className='absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-blue-600 rounded-full'></div>
              <div className='absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-blue-600 rounded-full'></div>
            </div>
            <p className='text-xl text-gray-600 font-semibold'>~ 5H</p>
          </div>

          <div className='text-center md:text-right'>
            <b className='text-3xl font-extrabold text-blue-600'>17h20</b> {/* Heure d'arrivée estimée */}
            <span className='block text-lg text-gray-700 mt-1'>Douala</span> {/* Destination assumée */}
          </div>
        </div>

        {/* Bloc du conducteur et détails du véhicule */}
        <div className='bg-white p-6 rounded-lg shadow-lg w-full'>
          {/* Section conducteur */}
          <div className='flex items-center justify-between border-b pb-4 mb-4 border-gray-200'>
            <div className='flex items-center'>
              <img
                src="/assets/default/person.jpg"
                className='rounded-full w-24 h-24 object-cover border-4 border-blue-500 shadow-md flex-shrink-0'
                alt="Avatar du conducteur"
              />
              <div className='ml-4'>
                <h3 className='font-bold text-2xl text-gray-900'>Babana</h3>
                <p className='text-gray-600 text-base mt-1'>
                  Conducteur expérimenté et convivial.
                </p>
              </div>
            </div>
            <button className='text-blue-600 hover:text-blue-800 transition duration-200'>
              <FontAwesomeIcon icon={faChevronRight} className='text-2xl' />
            </button>
          </div>

          {/* Description du conducteur */}
          <div className='mb-6'>
            <p className='text-gray-700 leading-relaxed text-base'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, perferendis corrupti optio impedit nobis, suscipit debitis eos error assumenda sapiente nostrum id reiciendis pariatur in exercitationem excepturi maxime labore esse consequatur amet. Autem aspernatur dicta quis? Autem laborum praesentium ipsum aut itaque reprehenderit fuga voluptas. Voluptates, in cupiditate. Error, dolores.
            </p>
          </div>

          {/* Détails du véhicule et places */}
          <div className='space-y-3 text-gray-800'>
            <p className='text-xl font-bold flex items-center'>
              <FontAwesomeIcon icon={faCar} className='mr-3 text-blue-500 text-2xl' />
              Berline bleue
            </p>
            <p className='text-xl font-bold flex items-center'>
              <FontAwesomeIcon icon={faPeopleGroup} className='mr-3 text-green-500 text-2xl' />
              4 Places totales
            </p>
            <p className='text-xl font-bold flex items-center'>
              <FontAwesomeIcon icon={faChair} className='mr-3 text-red-500 text-2xl' />
              2 Places occupées
            </p>
          </div>
        </div>

        {/* Bouton de réservation */}
        <div className='mt-4 w-full'>
          <button className='w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-lg text-xl transition duration-300 transform hover:scale-105'>
            Réserver ce trajet
          </button>
        </div>
      </main>
    </>
  );
};

export default TripDetails;