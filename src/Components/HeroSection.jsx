import { faCircle, faLocation } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import SearchBar from './SearchBar'

const HeroSection = ({showLogo=true,label}) => {
  return (

    <div className='hero-section pt-[10px]   px-[20px] md:px-[40px] lg:px-[160px] relative'>
   <div className=' md:mt-[100px] '></div>
   {showLogo ?
      <center >
        <div className='flex mt-[10px] text-5xl justify-center text-white'>
      <img src="/assets/default/logo.png" className='md:w-[100px] ' alt="" />
      <p className='mt-[75px] font-bold'>ombicar</p>
      </div>
      </center>:""}
      <h1 className='text-white font-bold md:text-4xl'>{label}</h1>
  <div>
    <SearchBar/>
  </div>
    </div>
  )
}

export default HeroSection