import { faCircle, faLocation } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import SearchBar from './SearchBar'

const HeroSection = () => {
  return (

    <div className='hero-section py-[10px] px-[160px] relative'>
      <h1 className='text-white font-bold mt-[100px] text-4xl'>Bienvenue sur Kombicar Selectionnez votre trajet</h1>
  <div>
    <SearchBar/>
  </div>
    </div>
  )
}

export default HeroSection