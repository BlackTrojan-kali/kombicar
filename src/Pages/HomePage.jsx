import React from 'react';
import HeroSection from '../Components/HeroSection';
import Card from '../Components/Card'; // Assuming Card component is correctly implemented
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight,
  faBoltLightning,
  faCoins,
  faNewspaper,
  faChevronLeft, // Used for Swiper prev button
  faChevronRight, // Used for Swiper next button and general right arrows
  faMapPin, // A more specific icon for mapping locations
} from '@fortawesome/free-solid-svg-icons'; // Combined imports

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../styles/styles.css'; // Keep your custom styles if they are necessary

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const HomePage = () => {
  return (
    <>
      {/* Padding for fixed header - Adjusted for responsiveness */}
      <div className='pt-[75px] md:pt-[90px] lg:pt-[100px]'></div>

      {/* Hero Section - The SearchBar's absolute positioning needs careful consideration here */}
      <HeroSection label="Bienvenue sur Kombicar. Trouvez votre trajet en un instant." /> {/* Slightly rephrased label */}

      <main className='px-4 sm:px-6 lg:px-12 xl:px-24 py-16 mt-[250px] lg:mt-[100px]'> {/* Adjust margin to account for SearchBar on desktop */}

        {/* --- */}
        {/* Top Feature Section */}
        <section className='max-w-7xl mx-auto w-full flex flex-col md:flex-row justify-between gap-8 text-center md:text-left mb-24'>
          <div className='md:w-1/3 p-6 bg-white rounded-lg shadow-lg flex flex-col items-center md:items-start'>
            <FontAwesomeIcon icon={faCoins} className='text-4xl text-green-600 mb-4' />
            <h4 className='font-bold text-xl mb-2 text-gray-800'>Des prix imbattables</h4>
            <p className='text-gray-600 text-base leading-relaxed'>
              Découvrez des tarifs compétitifs pour tous vos trajets. Voyagez malin sans compromettre votre budget.
            </p>
          </div>
          <div className='md:w-1/3 p-6 bg-white rounded-lg shadow-lg flex flex-col items-center md:items-start'>
            <FontAwesomeIcon icon={faNewspaper} className='text-4xl text-blue-600 mb-4' />
            <h4 className='font-bold text-xl mb-2 text-gray-800'>Actualités et mises à jour</h4>
            <p className='text-gray-600 text-base leading-relaxed'>
              Restez informé des dernières nouvelles et des offres spéciales. Ne manquez aucune opportunité !
            </p>
          </div>
          <div className='md:w-1/3 p-6 bg-white rounded-lg shadow-lg flex flex-col items-center md:items-start'>
            <FontAwesomeIcon icon={faBoltLightning} className='text-4xl text-yellow-600 mb-4' />
            <h4 className='font-bold text-xl mb-2 text-gray-800'>Voyagez en toute rapidité</h4>
            <p className='text-gray-600 text-base leading-relaxed'>
              Réservez votre place en quelques clics et partez à l'aventure sans attendre. Simple et efficace.
            </p>
          </div>
        </section>

        {/* --- */}
        {/* Image and Text Section 1 */}
        <section className='mt-24 flex flex-col md:flex-row gap-12 items-center max-w-7xl mx-auto mb-24'>
          <img
            src="/assets/default/solve.png"
            alt="Solving problems"
            className='w-full md:w-1/2 rounded-2xl shadow-lg object-cover h-auto'
          />
          <div className='w-full md:w-1/2 md:p-8'> {/* Removed fixed py-16, added md:p-8 for better control */}
            <h2 className='font-bold text-3xl sm:text-4xl mb-6 text-gray-800'>Simplifiez vos déplacements quotidiens</h2>
            <p className='text-gray-700 leading-relaxed text-lg mb-8'>
              Kombicar est la solution idéale pour vos voyages. Profitez d'une plateforme simple et intuitive pour trouver et réserver vos trajets en toute sérénité. Fini le stress des déplacements, voyagez l'esprit léger !
            </p>
            <div className='text-center md:text-left'>
              <button className='px-8 py-3 rounded-full cursor-pointer bg-green-500 text-white font-semibold hover:bg-green-600 transition-colors duration-300 transform hover:scale-105'>En savoir plus</button>
            </div>
          </div>
        </section>

        {/* --- */}
        {/* Image and Text Section 2 (reversed layout) */}
        <section className='mt-24 flex flex-col md:flex-row-reverse gap-12 items-center max-w-7xl mx-auto mb-24'>
          <img
            src="/assets/default/car-women.png"
            alt="Woman in car"
            className='w-full md:w-1/2 rounded-2xl shadow-lg object-cover h-auto'
          />
          <div className='w-full md:w-1/2 md:p-8'> {/* Removed fixed py-16, added md:p-8 for better control */}
            <h2 className='font-bold text-3xl sm:text-4xl mb-6 text-gray-800'>Voyagez en toute sécurité et confort</h2>
            <p className='text-gray-700 leading-relaxed text-lg mb-8'>
              Nous mettons un point d'honneur à votre sécurité et à votre confort. Nos partenaires sont soigneusement sélectionnés pour vous offrir la meilleure expérience de voyage possible, à chaque trajet.
            </p>
            <div className='text-center md:text-left'>
              <button className='px-8 py-3 rounded-full cursor-pointer bg-green-500 text-white font-semibold hover:bg-green-600 transition-colors duration-300 transform hover:scale-105'>En savoir plus</button>
            </div>
          </div>
        </section>
      </main>

      {/* --- */}
      {/* Available Routes Section */}
      <section className='w-full text-left bg-emerald-800 py-12 px-4 sm:px-6 lg:px-12 xl:px-24 mt-24'>
        <div className='max-w-7xl mx-auto'>
          <h3 className='text-white font-bold text-3xl sm:text-4xl mb-8'>Découvrez les Trajets Disponibles</h3> {/* Rephrased title */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {/* You can map over an array of routes here to avoid repetition */}
            {['Yaoundé - Douala', 'Douala - Bafoussam', 'Yaoundé - Kribi', 'Bafoussam - Limbe'].map((route, index) => (
              <div key={index} className='bg-white p-6 rounded-lg shadow-md flex justify-between items-center group hover:bg-gray-50 transition-colors duration-200 cursor-pointer'>
                <div className='flex items-center gap-4 text-gray-800'>
                  <p className='font-semibold'>{route.split(' - ')[0]}</p>
                  <FontAwesomeIcon icon={faArrowRight} className='text-lg text-gray-500 group-hover:translate-x-1 transition-transform' />
                  <p className='font-semibold'>{route.split(' - ')[1]}</p>
                </div>
                <FontAwesomeIcon icon={faChevronRight} className='text-xl text-gray-500 group-hover:text-green-500 transition-colors' />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- */}
      {/* Popular Bus Routes Slider */}
      <section className='py-20 px-4 sm:px-6 lg:px-12 xl:px-24 text-center'>
        <h1 className='font-bold text-3xl sm:text-4xl lg:text-5xl mb-12 text-gray-800'>Nos itinéraires les plus recherchés</h1> {/* Changed title for more general appeal */}
        <div className='relative max-w-7xl mx-auto'> {/* Added max-w-7xl mx-auto for centering */}
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            pagination={{ clickable: true }}
            navigation={{
              nextEl: '.swiper-button-next-custom-bus', // Unique classes for this Swiper
              prevEl: '.swiper-button-prev-custom-bus',
            }}
            modules={[Pagination, Navigation]}
            className="mySwiper pb-12" // Added pb-12 for pagination dots
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
          >
            {/* Using placeholder images for demonstration */}
            <SwiperSlide><Card imageUrl="https://placehold.co/400x250/007bff/ffffff?text=Yaounde-Douala" trajets={45} distance={500} driver="Yassine" depart="Yaoundé" arrivee="Douala" prix={400}/></SwiperSlide>
            <SwiperSlide><Card imageUrl="https://placehold.co/400x250/28a745/ffffff?text=Douala-Bafoussam" trajets={30} distance={400} driver="Fatima" depart="Douala" arrivee="Bafoussam" prix={350}/></SwiperSlide>
            <SwiperSlide><Card imageUrl="https://placehold.co/400x250/ffc107/ffffff?text=Yaounde-Kribi" trajets={20} distance={250} driver="Jean" depart="Yaoundé" arrivee="Kribi" prix={280}/></SwiperSlide>
            <SwiperSlide><Card imageUrl="https://placehold.co/400x250/dc3545/ffffff?text=Douala-Limbe" trajets={50} distance={600} driver="Marc" depart="Douala" arrivee="Limbe" prix={420}/></SwiperSlide>
          </Swiper>

          {/* Custom Navigation Arrows for this Swiper */}
          <div className="swiper-button-prev-custom-bus absolute top-1/2 -translate-y-1/2 left-0 z-10 p-3 bg-white rounded-full shadow-lg cursor-pointer hover:bg-gray-100 transition-colors duration-200 hidden lg:flex items-center justify-center">
            <FontAwesomeIcon icon={faChevronLeft} className="text-xl text-gray-700" />
          </div>
          <div className="swiper-button-next-custom-bus absolute top-1/2 -translate-y-1/2 right-0 z-10 p-3 bg-white rounded-full shadow-lg cursor-pointer hover:bg-gray-100 transition-colors duration-200 hidden lg:flex items-center justify-center">
            <FontAwesomeIcon icon={faChevronRight} className="text-xl text-gray-700" />
          </div>
        </div>
      </section>

      {/* --- */}
      {/* Map Section */}
      <section className='mt-24 flex flex-col md:flex-row gap-12 items-center px-4 sm:px-6 lg:px-12 xl:px-24 pb-20 max-w-7xl mx-auto'>
        <img
          src="/assets/default/map-cameroon.png"
          alt="Map of Cameroon"
          className='w-full md:w-1/2 rounded-2xl shadow-lg object-cover h-auto'
        />
        <div className='w-full md:w-1/2 md:p-8'>
          <h2 className='font-bold text-3xl sm:text-4xl mb-6 text-gray-800'>Découvrez le Cameroun avec Kombicar</h2>
          <p className='text-gray-700 leading-relaxed text-lg mb-8'>
            Que vous voyagiez pour le travail ou pour le plaisir, Kombicar vous connecte aux villes clés du Cameroun. Explorez de nouvelles destinations et vivez des expériences inoubliables grâce à notre réseau de transport fiable et étendu.
          </p>
          <div className='text-center md:text-left'>
            <button className='px-8 py-3 rounded-full cursor-pointer bg-green-500 text-white font-semibold hover:bg-green-600 transition-colors duration-300 transform hover:scale-105'>Voir la carte des trajets</button> {/* Changed button text */}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;