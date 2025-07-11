import React from 'react';
import HeroSection from '../Components/HeroSection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faBoltLightning, faCoins, faUserShield, faMapLocationDot } from '@fortawesome/free-solid-svg-icons';
import Card from '../Components/Card';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

const Vtc = () => {
  return (
    <>
      {/* Padding for fixed header */}
      <div className='pt-[75px]'></div>

      {/* Hero Section for VTC */}
      <HeroSection label="VTC : Voyagez avec chauffeur en toute sérénité" showLogo={false} />

      {/* Section: Popular VTC Routes (with Swiper) */}
      <section className='py-20 px-4 lg:px-24 text-center bg-gray-50'> {/* Added light background for contrast */}
        <h1 className='font-bold text-4xl mb-12 text-gray-800'>Nos itinéraires VTC les plus populaires</h1>
        <div className='relative'> {/* Added relative for Swiper navigation buttons */}
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={30} // Space between slides
            slidesPerView={1} // Default slides per view
            navigation={{ // Enable navigation arrows
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            pagination={{ clickable: true }} // Enable pagination dots
            scrollbar={{ draggable: true }} // Enable scrollbar
            breakpoints={{
              640: { // When screen width is >= 640px
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: { // When screen width is >= 1024px
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="mySwiper pb-12" // Added padding bottom for pagination dots
          >
            <SwiperSlide>
              <Card imageUrl="/assets/default/city-1.jpg" trajets={45} distance={500} driver="Jean Dupont" depart="Yaoundé" arrivee="Douala" prix={30000} />
            </SwiperSlide>
            <SwiperSlide>
              <Card imageUrl="/assets/default/city-2.jpg" trajets={30} distance={400} driver="Marie Curie" depart="Douala" arrivee="Bafoussam" prix={25000} />
            </SwiperSlide>
            <SwiperSlide>
              <Card imageUrl="/assets/default/city-3.jpg" trajets={20} distance={250} driver="Pierre Martin" depart="Yaoundé" arrivee="Kribi" prix={20000} />
            </SwiperSlide>
            <SwiperSlide>
              <Card imageUrl="/assets/default/city-4.jpg" trajets={55} distance={600} driver="Fatima Zahra" depart="Douala" arrivee="Limbe" prix={35000} />
            </SwiperSlide>
          </Swiper>
          {/* Custom Navigation Arrows */}
          <div className="swiper-button-prev-custom absolute top-1/2 left-4 -translate-y-1/2 z-10 cursor-pointer bg-white p-3 rounded-full shadow-lg hover:bg-gray-200 transition-colors duration-200 hidden lg:block">
            <FontAwesomeIcon icon={faArrowRight} rotation={180} className='text-xl text-gray-700' />
          </div>
          <div className="swiper-button-next-custom absolute top-1/2 right-4 -translate-y-1/2 z-10 cursor-pointer bg-white p-3 rounded-full shadow-lg hover:bg-gray-200 transition-colors duration-200 hidden lg:block">
            <FontAwesomeIcon icon={faArrowRight} className='text-xl text-gray-700' />
          </div>
        </div>
      </section>

      <main className='px-4 lg:px-24 py-16'>

        {/* Section: VTC Advantages */}
        <section className='w-full flex flex-col md:flex-row justify-between gap-8 text-center md:text-left mb-24'>
          <div className='md:w-1/3 p-4 bg-white rounded-lg shadow-md'>
            <FontAwesomeIcon icon={faUserShield} className='text-3xl text-blue-600 mb-4' />
            <h4 className='font-bold text-xl mb-2'>Confort et Sérénité</h4>
            <p className='text-gray-600'>
              Voyagez dans des véhicules modernes et bien entretenus, conduits par des chauffeurs professionnels et courtois.
            </p>
          </div>
          <div className='md:w-1/3 p-4 bg-white rounded-lg shadow-md'>
            <FontAwesomeIcon icon={faCoins} className='text-3xl text-green-600 mb-4' />
            <h4 className='font-bold text-xl mb-2'>Tarifs Transparents</h4>
            <p className='text-gray-600'>
              Connaissez le prix de votre course à l'avance, sans surprise. Nos tarifs sont clairs et compétitifs.
            </p>
          </div>
          <div className='md:w-1/3 p-4 bg-white rounded-lg shadow-md'>
            <FontAwesomeIcon icon={faBoltLightning} className='text-3xl text-yellow-600 mb-4' />
            <h4 className='font-bold text-xl mb-2'>Service Rapide et Disponible</h4>
            <p className='text-gray-600'>
              Réservez votre VTC en quelques clics, disponible 24h/24 et 7j/7 pour tous vos déplacements.
            </p>
          </div>
        </section>

        {/* Section 1: Why Choose VTC */}
        <section className='flex flex-col md:flex-row gap-12 items-center mb-24'>
          <img
            src="/assets/default/carsharing-4.jpg"
            alt="VTC Driver and Passenger"
            className='w-full md:w-1/2 rounded-2xl shadow-lg'
          />
          <div className='w-full md:w-1/2 px-4 py-8 md:py-16'>
            <h2 className='font-bold text-3xl mb-6 text-gray-800'>Pourquoi choisir Kombicar VTC ?</h2>
            <p className='text-gray-700 leading-relaxed'>
              Pour vos rendez-vous d'affaires, vos transferts aéroport, ou simplement pour un confort optimal, Kombicar VTC est votre solution. Profitez d'un service personnalisé, discret et ponctuel, adapté à vos besoins.
            </p>
            <br />
            <div className='text-center md:text-left'>
              <button className='btn-primary px-8 py-3 rounded-full cursor-pointer bg-green-500 text-white font-semibold hover:bg-green-600 transition-colors duration-300'>
                Réserver un VTC
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* FAQ Section for VTC */}
      <section className='py-16 px-4 lg:px-24 bg-gray-50'> {/* Added light background for contrast */}
        <h1 className='text-center font-bold text-4xl mb-12 text-gray-800'>
          <FontAwesomeIcon icon={faMapLocationDot} className='text-3xl text-red-500 mr-4' />
          Questions fréquentes sur nos services VTC
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <div className='p-6 bg-white rounded-lg shadow-md'>
            <h4 className='font-bold text-xl text-gray-800 mb-2'>Comment réserver un VTC ?</h4>
            <p className='text-gray-700'>
              La réservation d'un VTC est simple. Rendez-vous sur notre application mobile ou sur le site web, choisissez votre destination, la date et l'heure, et confirmez votre course en quelques secondes.
            </p>
            <hr className='mt-6 border-t border-gray-200' />
          </div>
          <div className='p-6 bg-white rounded-lg shadow-md'>
            <h4 className='font-bold text-xl text-gray-800 mb-2'>Puis-je commander un VTC à l'avance ?</h4>
            <p className='text-gray-700'>
              Oui, tout à fait ! Vous avez la possibilité de réserver votre VTC plusieurs heures ou jours à l'avance. C'est idéal pour vos transferts aéroport ou vos événements spéciaux.
            </p>
            <hr className='mt-6 border-t border-gray-200' />
          </div>
          <div className='p-6 bg-white rounded-lg shadow-md'>
            <h4 className='font-bold text-xl text-gray-800 mb-2'>Quels sont les modes de paiement acceptés ?</h4>
            <p className='text-gray-700'>
              Nous acceptons plusieurs modes de paiement sécurisés, y compris les cartes de crédit/débit et les paiements mobiles, pour faciliter toutes vos transactions.
            </p>
            <hr className='mt-6 border-t border-gray-200' />
          </div>
          <div className='p-6 bg-white rounded-lg shadow-md'>
            <h4 className='font-bold text-xl text-gray-800 mb-2'>Les chauffeurs sont-ils qualifiés ?</h4>
            <p className='text-gray-700'>
              Absolument. Tous nos chauffeurs VTC sont des professionnels expérimentés, titulaires des licences nécessaires et soumis à des contrôles de qualité réguliers pour garantir votre satisfaction.
            </p>
            <hr className='mt-6 border-t border-gray-200' />
          </div>
        </div>
      </section>

      {/* Mobile App Presentation */}
      <section className="py-16 bg-yellow-400 text-gray-700">
        <h1 className="text-4xl text-center font-bold mb-4">Simplifiez votre expérience</h1>
        <h2 className="text-2xl text-center font-semibold mb-12">Téléchargez notre application mobile !</h2>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 px-4">
          <div className="flex justify-center">
            <img src="/assets/default/app-kombicar.png" alt="Kombicar mobile app screenshot" className="w-[280px] md:w-[350px] shadow-xl rounded-lg" />
          </div>
          <div className='flex flex-col items-center md:items-start gap-4'>
            <a href="https://apps.apple.com/us/app/kombicar/id6468362045" target="_blank" rel="noopener noreferrer">
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
            <a href="https://play.google.com/store/apps/details?id=com.kombicar.app" target="_blank" rel="noopener noreferrer">
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

export default Vtc;