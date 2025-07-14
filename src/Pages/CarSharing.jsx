import React from 'react';
import HeroSection from '../Components/HeroSection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faChevronRight, faCircleQuestion, faCarSide, faUserGroup } from '@fortawesome/free-solid-svg-icons'; // Added faCarSide and faUserGroup for better icon choices

const CarSharing = () => {
  return (
    <>
      {/* Padding for fixed header - Adjusted for responsiveness */}
      <div className='pt-[75px] md:pt-[90px] lg:pt-[100px]'></div>

      {/* Hero Section */}
      <HeroSection label="Covoiturage : Votre trajet partagé, facile et économique" showLogo={false} /> {/* Slightly refined label */}

      <main className='px-4 sm:px-6 lg:px-12 xl:px-24 py-16'> {/* Responsive padding for main content */}

        {/* --- */}
        {/* Section 1: Covoiturage for Drivers */}
        <section className='flex flex-col md:flex-row gap-12 items-center mb-24 max-w-7xl mx-auto'> {/* Added max-width and centering */}
          <img
            src="/assets/default/carsharing-4.jpg" // Ensure this path is correct
            alt="Person using a carsharing app"
            className='w-full md:w-1/2 rounded-2xl shadow-lg object-cover h-auto' // Added object-cover h-auto
          />
          <div className='w-full md:w-1/2 md:p-8'> {/* Adjusted padding */}
            <h2 className='font-bold text-3xl sm:text-4xl mb-6 text-gray-800'>Partagez vos trajets, réduisez vos coûts !</h2>
            <p className='text-gray-700 leading-relaxed text-lg mb-8'> {/* Added text-lg and mb-8 */}
              Si vous avez des places libres dans votre véhicule, proposez-les sur Kombicar ! Partagez vos frais de carburant et d'entretien avec des passagers allant dans la même direction que vous. C'est simple, économique et écologique !
            </p>
            <div className='text-center md:text-left'>
              <button className='px-8 py-3 rounded-full cursor-pointer bg-green-500 text-white font-semibold hover:bg-green-600 transition-colors duration-300 transform hover:scale-105'>
                Proposer un trajet
              </button>
            </div>
          </div>
        </section>

        {/* --- */}
        {/* Available Routes Section (Covoiturage specific) */}
        <section className='w-full text-left bg-emerald-800 py-12 px-4 sm:px-6 lg:px-12 xl:px-24 mb-24 rounded-lg max-w-7xl mx-auto'> {/* Added max-width and centering, increased py */}
          <h3 className='text-white font-bold text-3xl sm:text-4xl mb-8'>Trajets de covoiturage disponibles</h3>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'> {/* Responsive grid for mini cards */}
            {/* Using an array map for cleaner code and easy extension */}
            {[
              { depart: 'Yaoundé', arrivee: 'Douala' },
              { depart: 'Douala', arrivee: 'Bafoussam' },
              { depart: 'Kribi', arrivee: 'Yaoundé' },
              { depart: 'Edea', arrivee: 'Kribi' }, // Example for more routes
              { depart: 'Bamenda', arrivee: 'Limbe' },
              { depart: 'Garoua', arrivee: 'Maroua' },
            ].map((route, index) => (
              <div key={index} className='bg-white p-6 rounded-lg shadow-md flex justify-between items-center group hover:bg-gray-50 transition-colors duration-200 cursor-pointer'>
                <div className='flex items-center gap-4 text-gray-800'>
                  <p className='font-semibold'>{route.depart}</p>
                  <FontAwesomeIcon icon={faArrowRight} className='text-lg text-gray-500 group-hover:translate-x-1 transition-transform' />
                  <p className='font-semibold'>{route.arrivee}</p>
                </div>
                <FontAwesomeIcon icon={faChevronRight} className='text-xl text-gray-500 group-hover:text-green-500 transition-colors' />
              </div>
            ))}
          </div>
        </section>

        {/* --- */}
        {/* Section 2: Covoiturage for Passengers */}
        <section className='flex flex-col md:flex-row-reverse gap-12 items-center mb-24 max-w-7xl mx-auto'> {/* Added max-width and centering */}
          <img
            src="/assets/default/carsharing-6.jpg" // Ensure this path is correct
            alt="Happy people in a car"
            className='w-full md:w-1/2 rounded-2xl shadow-lg object-cover h-auto'
          />
          <div className='w-full md:w-1/2 md:p-8'> {/* Adjusted padding */}
            <h2 className='font-bold text-3xl sm:text-4xl mb-6 text-gray-800'>Trouvez votre trajet idéal en un clin d'œil !</h2>
            <p className='text-gray-700 leading-relaxed text-lg mb-8'>
              Vous cherchez un moyen de transport flexible et abordable ? Avec Kombicar, trouvez des covoitureurs pour vos déplacements quotidiens ou occasionnels. Simple, rapide et convivial !
            </p>
            <div className='text-center md:text-left'>
              <button className='px-8 py-3 rounded-full cursor-pointer bg-green-500 text-white font-semibold hover:bg-green-600 transition-colors duration-300 transform hover:scale-105'>
                Rechercher un trajet
              </button>
            </div>
          </div>
        </section>

        {/* --- */}
        {/* FAQ Section */}
        <section className='py-16 px-4 sm:px-6 lg:px-12 xl:px-24 bg-gray-50 rounded-lg max-w-7xl mx-auto'> {/* Added background, rounded-lg, max-width, and centering */}
          <h1 className='text-center font-bold text-3xl sm:text-4xl lg:text-5xl mb-12 text-gray-800'>
            <FontAwesomeIcon icon={faCircleQuestion} className='text-3xl sm:text-4xl text-blue-500 mr-4' />
            Questions fréquentes sur le covoiturage
          </h1>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {/* FAQ Item 1 */}
            <div className='p-6 bg-white rounded-lg shadow-md'>
              <h4 className='font-bold text-xl text-gray-800 mb-2'>Comment fonctionne le covoiturage sur Kombicar ?</h4>
              <p className='text-gray-700 text-base leading-relaxed'>
                Que vous soyez conducteur ou passager, le principe est simple : les conducteurs proposent leurs trajets avec leurs places disponibles, et les passagers peuvent les réserver. Le partage des frais se fait directement via l'application.
              </p>
              {/* <hr className='mt-6 border-t border-gray-200' /> Removed as shadow and gap provide enough separation */}
            </div>
            {/* FAQ Item 2 */}
            <div className='p-6 bg-white rounded-lg shadow-md'>
              <h4 className='font-bold text-xl text-gray-800 mb-2'>Est-ce que le covoiturage est sûr ?</h4>
              <p className='text-gray-700 text-base leading-relaxed'>
                La sécurité est notre priorité. Nous encourageons nos utilisateurs à vérifier les profils, les avis et les évaluations des autres membres avant de voyager. Vous pouvez également communiquer avec eux avant le départ.
              </p>
            </div>
            {/* FAQ Item 3 */}
            <div className='p-6 bg-white rounded-lg shadow-md'>
              <h4 className='font-bold text-xl text-gray-800 mb-2'>Comment sont fixés les prix ?</h4>
              <p className='text-gray-700 text-base leading-relaxed'>
                Les prix sont suggérés par Kombicar en fonction de la distance et des frais habituels (carburant, péages), mais le conducteur peut ajuster ce montant dans une certaine limite. L'objectif est de partager les frais, pas de faire du profit.
              </p>
            </div>
            {/* FAQ Item 4 */}
            <div className='p-6 bg-white rounded-lg shadow-md'>
              <h4 className='font-bold text-xl text-gray-800 mb-2'>Que faire en cas de problème ou d'annulation ?</h4>
              <p className='text-gray-700 text-base leading-relaxed'>
                En cas d'imprévu, nous avons mis en place des politiques d'annulation claires. Notre support client est également disponible pour vous aider à résoudre tout problème ou question que vous pourriez avoir.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* --- */}
      {/* Mobile App Presentation */}
      <section className="py-16 bg-yellow-400 text-gray-700">
        <h1 className="text-3xl sm:text-4xl text-center font-bold mb-4">Simplifiez votre expérience</h1>
        <h2 className="text-xl sm:text-2xl text-center font-semibold mb-12">Téléchargez notre application mobile !</h2>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 px-4 sm:px-6 lg:px-12 xl:px-24 max-w-7xl mx-auto">
          <div className="flex justify-center">
            <img
              src="/assets/default/app-kombicar.png" // Ensure this path is correct
              alt="Kombicar mobile app screenshot"
              className="w-[280px] md:w-[350px] shadow-xl rounded-lg object-contain"
            />
          </div>
          <div className='flex flex-col items-center md:items-start gap-4'>
            <a href="https://apps.apple.com/us/app/kombicar/id6468362045" target="_blank" rel="noopener noreferrer" aria-label="Télécharger sur l'App Store">
              <button
                type="button"
                className="flex items-center justify-center w-60 py-4 text-gray-800 bg-white border border-gray-300 rounded-xl transition-all hover:bg-gray-100 shadow-md"
              >
                <div className="mr-3">
                  <svg viewBox="0 0 384 512" width="28">
                    <path
                      fill="currentColor"
                      d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-medium">Téléchargez sur</div>
                  <div className="font-sans text-xl font-semibold">
                    App Store
                  </div>
                </div>
              </button>
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.kombicar.app" target="_blank" rel="noopener noreferrer" aria-label="Télécharger sur Google Play">
              <button
                type="button"
                className="flex items-center justify-center w-60 py-4 text-white bg-gray-900 rounded-xl transition-all hover:bg-gray-700 shadow-md"
              >
                <div className="mr-3">
                  <svg viewBox="30 336.7 120.9 129.2" width="28">
                    <path
                      fill="#FFD400"
                      d="M119.2,421.2c15.3-8.4,27-14.8,28-15.3c3.2-1.7,6.5-6.2,0-9.7  c-2.1-1.1-13.4-7.3-28-15.3l-20.1,20.2L119.2,421.2z"
                    ></path>
                    <path
                      fill="#FF3333"
                      d="M99.1,401.1l-64.2,64.7c1.5,0.2,3.2-0.2,5.2-1.3  c4.2-2.3,48.8-26.7,79.1-43.3L99.1,401.1L99.1,401.1z"
                    ></path>
                    <path
                      fill="#48FF48"
                      d="M99.1,401.1l20.1-20.2c0,0-74.6-40.7-79.1-43.1  c-1.7-1-3.6-1.3-5.3-1L99.1,401.1z"
                    ></path>
                    <path
                      fill="#3BCCFF"
                      d="M99.1,401.1l-64.3-64.3c-2.6,0.6-4.8,2.9-4.8,7.6  c0,7.5,0,107.5,0,113.8c0,4.3,1.7,7.4,4.9,7.7L99.1,401.1z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-medium">DISPONIBLE SUR</div>
                  <div className="font-sans text-xl font-semibold">
                    Google Play
                  </div>
                </div>
              </button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default CarSharing;