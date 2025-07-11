import React from 'react';
import HeroSection from '../Components/HeroSection';
import Card from '../Components/Card'; // Assuming Card component is correctly implemented
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faBoltLightning, faChevronRight, faCoins, faNewspaper, faChevronLeft, faChevronRight as faChevronRightSolid } from '@fortawesome/free-solid-svg-icons';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'; // Import navigation styles

import '../styles/styles.css'; // Keep your custom styles if they are necessary

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const HomePage = () => {
  return (
    <>
      {/* Padding for fixed header */}
      <div className='pt-[75px]'></div>

      {/* Hero Section */}
      <HeroSection label="Bienvenue sur Kombicar. Sélectionnez votre trajet." />

      <main className='px-4 lg:px-24 pt-24 mt-[250px] lg:mt-0'> {/* Adjust padding and margin for responsiveness */}

        {/* Top Feature Section */}
        <section className='w-full flex flex-col md:flex-row justify-between gap-8 text-center md:text-left mb-24'>
          <div className='md:w-1/3 p-4 bg-white rounded-lg shadow-md'>
            <FontAwesomeIcon icon={faCoins} className='text-3xl text-green-600 mb-4' />
            <h4 className='font-bold text-xl mb-2'>Des prix imbattables</h4>
            <p className='text-gray-600'>
              Découvrez des tarifs compétitifs pour tous vos trajets. Voyagez malin sans compromettre votre budget.
            </p>
          </div>
          <div className='md:w-1/3 p-4 bg-white rounded-lg shadow-md'>
            <FontAwesomeIcon icon={faNewspaper} className='text-3xl text-blue-600 mb-4' />
            <h4 className='font-bold text-xl mb-2'>Actualités et mises à jour</h4>
            <p className='text-gray-600'>
              Restez informé des dernières nouvelles et des offres spéciales. Ne manquez aucune opportunité !
            </p>
          </div>
          <div className='md:w-1/3 p-4 bg-white rounded-lg shadow-md'>
            <FontAwesomeIcon icon={faBoltLightning} className='text-3xl text-yellow-600 mb-4' />
            <h4 className='font-bold text-xl mb-2'>Voyagez en toute rapidité</h4>
            <p className='text-gray-600'>
              Réservez votre place en quelques clics et partez à l'aventure sans attendre. Simple et efficace.
            </p>
          </div>
        </section>

        {/* Image and Text Section 1 */}
        <section className='mt-24 flex flex-col md:flex-row gap-12 items-center'>
          <img src="/assets/default/solve.png" alt="Solving problems" className='w-full md:w-1/2 rounded-2xl shadow-lg' />
          <div className='w-full md:w-1/2 px-4 py-8 md:py-16'>
            <h2 className='font-bold text-3xl mb-6 text-gray-800'>Simplifiez vos déplacements quotidiens</h2>
            <p className='text-gray-700 leading-relaxed'>
              Kombicar est la solution idéale pour vos voyages. Profitez d'une plateforme simple et intuitive pour trouver et réserver vos trajets en toute sérénité. Fini le stress des déplacements, voyagez l'esprit léger !
            </p>
            <br />
            <div className='text-center md:text-left'>
              <button className='btn-primary px-8 py-3 rounded-full cursor-pointer bg-green-500 text-white font-semibold hover:bg-green-600 transition-colors duration-300'>En savoir plus</button>
            </div>
          </div>
        </section>

        {/* Image and Text Section 2 (reversed layout) */}
        <section className='mt-24 flex flex-col md:flex-row-reverse gap-12 items-center'>
          <img src="/assets/default/car-women.png" alt="Woman in car" className='w-full md:w-1/2 rounded-2xl shadow-lg' />
          <div className='w-full md:w-1/2 px-4 py-8 md:py-16'>
            <h2 className='font-bold text-3xl mb-6 text-gray-800'>Voyagez en toute sécurité et confort</h2>
            <p className='text-gray-700 leading-relaxed'>
              Nous mettons un point d'honneur à votre sécurité et à votre confort. Nos partenaires sont soigneusement sélectionnés pour vous offrir la meilleure expérience de voyage possible, à chaque trajet.
            </p>
            <br />
            <div className='text-center md:text-left'>
              <button className='btn-primary px-8 py-3 rounded-full cursor-pointer bg-green-500 text-white font-semibold hover:bg-green-600 transition-colors duration-300'>En savoir plus</button>
            </div>
          </div>
        </section>
      </main>

      {/* Available Routes Section */}
      <section className='w-full text-left bg-emerald-800 py-10 px-4 lg:px-24 mt-24'>
        <h3 className='text-white font-bold text-3xl mb-8'>Trajets disponibles</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"> {/* Responsive grid */}
          <div className='mini-card bg-white p-6 rounded-lg shadow-md flex justify-between items-center group hover:bg-gray-50 transition-colors duration-200 cursor-pointer'>
            <div className='flex items-center gap-4 text-gray-800'>
              <p className='font-semibold'>Départ</p>
              <FontAwesomeIcon icon={faArrowRight} className='text-lg text-gray-500 group-hover:translate-x-1 transition-transform' />
              <p className='font-semibold'>Arrivée</p>
            </div>
            <FontAwesomeIcon icon={faChevronRightSolid} className='text-xl text-gray-500 group-hover:text-green-500 transition-colors' />
          </div>
          <div className='mini-card bg-white p-6 rounded-lg shadow-md flex justify-between items-center group hover:bg-gray-50 transition-colors duration-200 cursor-pointer'>
            <div className='flex items-center gap-4 text-gray-800'>
              <p className='font-semibold'>Départ</p>
              <FontAwesomeIcon icon={faArrowRight} className='text-lg text-gray-500 group-hover:translate-x-1 transition-transform' />
              <p className='font-semibold'>Arrivée</p>
            </div>
            <FontAwesomeIcon icon={faChevronRightSolid} className='text-xl text-gray-500 group-hover:text-green-500 transition-colors' />
          </div>
          <div className='mini-card bg-white p-6 rounded-lg shadow-md flex justify-between items-center group hover:bg-gray-50 transition-colors duration-200 cursor-pointer'>
            <div className='flex items-center gap-4 text-gray-800'>
              <p className='font-semibold'>Départ</p>
              <FontAwesomeIcon icon={faArrowRight} className='text-lg text-gray-500 group-hover:translate-x-1 transition-transform' />
              <p className='font-semibold'>Arrivée</p>
            </div>
            <FontAwesomeIcon icon={faChevronRightSolid} className='text-xl text-gray-500 group-hover:text-green-500 transition-colors' />
          </div>
          <div className='mini-card bg-white p-6 rounded-lg shadow-md flex justify-between items-center group hover:bg-gray-50 transition-colors duration-200 cursor-pointer'>
            <div className='flex items-center gap-4 text-gray-800'>
              <p className='font-semibold'>Départ</p>
              <FontAwesomeIcon icon={faArrowRight} className='text-lg text-gray-500 group-hover:translate-x-1 transition-transform' />
              <p className='font-semibold'>Arrivée</p>
            </div>
            <FontAwesomeIcon icon={faChevronRightSolid} className='text-xl text-gray-500 group-hover:text-green-500 transition-colors' />
          </div>
        </div>
      </section>

      {/* Popular Bus Routes Slider */}
      <section className='py-20 px-4 lg:px-24 text-center'>
        <h1 className='font-bold text-4xl mb-12 text-gray-800'>Nos itinéraires bus les plus en vogue</h1>
        <div className='relative'> {/* Added relative for positioning navigation */}
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            pagination={{ clickable: true }}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            modules={[Pagination, Navigation]}
            className="mySwiper"
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
            <SwiperSlide><Card imageUrl="/assets/default/city-1.jpg" trajets={45} distance={500} driver="Yassine" depart="Yaoundé" arrivee="Douala" prix={400}/></SwiperSlide>
            <SwiperSlide><Card imageUrl="/assets/default/city-2.jpg" trajets={30} distance={400} driver="Fatima" depart="Douala" arrivee="Bafoussam" prix={350}/></SwiperSlide>
            <SwiperSlide><Card imageUrl="/assets/default/city-3.jpg" trajets={20} distance={250} driver="Jean" depart="Yaoundé" arrivee="Kribi" prix={280}/></SwiperSlide>
            <SwiperSlide><Card imageUrl="/assets/default/city-4.jpg" trajets={50} distance={600} driver="Marc" depart="Douala" arrivee="Limbe" prix={420}/></SwiperSlide>
          </Swiper>

          {/* Custom Navigation Arrows */}
          <div className="swiper-button-prev-custom absolute top-1/2 -translate-y-1/2 left-0 z-10 p-3 bg-white rounded-full shadow-lg cursor-pointer hover:bg-gray-100 transition-colors duration-200">
            <FontAwesomeIcon icon={faChevronLeft} className="text-xl text-gray-700" />
          </div>
          <div className="swiper-button-next-custom absolute top-1/2 -translate-y-1/2 right-0 z-10 p-3 bg-white rounded-full shadow-lg cursor-pointer hover:bg-gray-100 transition-colors duration-200">
            <FontAwesomeIcon icon={faChevronRightSolid} className="text-xl text-gray-700" />
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className='mt-24 flex flex-col md:flex-row gap-12 items-center px-4 lg:px-24 pb-20'>
        <img src="/assets/default/map-cameroon.png" alt="Map of Cameroon" className='w-full md:w-1/2 rounded-2xl shadow-lg' />
        <div className='w-full md:w-1/2 px-4 py-8 md:py-16'>
          <h2 className='font-bold text-3xl mb-6 text-gray-800'>Découvrez le Cameroun avec Kombicar</h2>
          <p className='text-gray-700 leading-relaxed'>
            Que vous voyagiez pour le travail ou pour le plaisir, Kombicar vous connecte aux villes clés du Cameroun. Explorez de nouvelles destinations et vivez des expériences inoubliables grâce à notre réseau de transport fiable et étendu.
          </p>
          <br />
          <div className='text-center md:text-left'>
            <button className='btn-primary px-8 py-3 rounded-full cursor-pointer bg-green-500 text-white font-semibold hover:bg-green-600 transition-colors duration-300'>En savoir plus</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;