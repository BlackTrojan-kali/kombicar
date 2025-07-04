import { faChevronDown, faMagnifyingGlass, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Header = () => {
  return (
    <header className='w-full px-[160px] py-[8px] bg-white flex gap-[20px]'>
        <h1 >Kombicar</h1>
        <div className='flex justify-between w-full '>
            <nav className='flex gap-[15px] text-xs font-bold mt-[5px]'>
                <a href="">Covoiturage</a>
                <a href="">Vtc</a>
            </nav>
            <nav className='flex gap-[15px]'>
                <a href="">
                <FontAwesomeIcon icon={faMagnifyingGlass}/>
                <span className='text-xs ml-[5px] font-bold mb-[3px]'>rechercher</span>
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