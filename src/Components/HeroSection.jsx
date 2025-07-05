import { faCircle, faLocation } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import SearchBar from './SearchBar'

const HeroSection = () => {
  return (

    <div className='hero-section py-[10px] px-[20px] md:px-[40px] lg:px-[160px] relative'>
      <center >
        <div className='flex mt-[10px] md:mt-[100px] text-5xl justify-center text-white'>
      <img src="/assets/default/logo.png" className='md:w-[100px] ' alt="" />
      <p className='mt-[75px] font-bold'>ombicar</p>
      </div>
      </center>
      <h1 className='text-white font-bold md:text-4xl'>Bienvenue sur Kombicar Selectionnez votre trajet</h1>
  <div>
    <SearchBar/>
  </div>
    </div>
  )
}

export default HeroSection