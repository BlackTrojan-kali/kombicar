import { faChevronDown, faMagnifyingGlass, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Header = () => {
  return (
    <header className='fixed z-10 w-full px-[160px] py-[20px] text-blue-500 bg-white flex gap-[20px]'>
      <img src="/assets/default/logo_full.png" className='w-[80px]' alt="" />
        <div className='flex justify-between w-full '>
            <nav className='flex gap-[15px]  font-bold mt-[5px]'>
                <a href="">Covoiturage</a>
                <a href="">Vtc</a>
            </nav>
            <nav className='flex gap-[15px] mt-[5px]'>
                <a href="">
                <FontAwesomeIcon icon={faMagnifyingGlass}/>
                <span className=' ml-[5px] font-bold mb-[3px]'>rechercher</span>
                </a>
                <div className='flex gap-[3px]'>
                    <FontAwesomeIcon icon={faUserCircle} className='text-2xl'/>
                    <FontAwesomeIcon icon={faChevronDown} className='text-sm mt-[5px]'/>
                </div>
            </nav>
        </div>  
        </header>
  )
}

export default Header