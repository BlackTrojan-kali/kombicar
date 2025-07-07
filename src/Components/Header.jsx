import { faChevronDown, faChevronRight, faChevronUp, faMagnifyingGlass, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link, Links } from 'react-router'

const Header = () => {
  const [dropDownActive,setDropDownActive]= useState(false)
  const activateDorpDown =()=>{
    setDropDownActive(!dropDownActive)
  }
  return (
    <>
    <header className='fixed z-10 w-full hidden  px-[160px] py-[20px] text-blue-500  md:flex gap-[25px]'>
      <Link to="/"><img src="/assets/default/logo_full.png" className='w-[80px]' alt="" /></Link>
        <div className='flex justify-between w-full '>
            <nav className='flex gap-[17px] text-xl  font-bold mt-[5px]'>
                <Link to="/carsharing">Covoiturage</Link>
                <Link to="/vtc">Vtc</Link>
            </nav>
            <nav className='flex gap-[15px] text-xl mt-[5px]'>
                <a href="">
                <FontAwesomeIcon icon={faMagnifyingGlass}/>
                <span className=' ml-[5px] font-bold mb-[3px]'>rechercher</span>
                </a>
                <button className='flex gap-[3px]' onClick={activateDorpDown}>
                    <FontAwesomeIcon icon={faUserCircle} className='text-3xl'/>
                    {dropDownActive ?
                    <FontAwesomeIcon icon={faChevronUp} className='text-sm mt-[5px]'/>:
                    <FontAwesomeIcon icon={faChevronDown} className='text-sm mt-[5px]'/>}
                </button>
            </nav>
        </div>  
        </header>
        <div className={ dropDownActive ? "dropHeaderActive": "dropHeader"}>
          <Link to="/signin" className='py-[10px] px-[30px] hover:bg-gray-300 w-full flex justify-between'>
            <p>Connexion</p>
            <FontAwesomeIcon icon={faChevronRight} className='mt-1'/>
          </Link>

          <Link to="/register" className='py-[10px] px-[30px] hover:bg-gray-300 w-full  flex justify-between'>
            <p>Inscription</p>
            <FontAwesomeIcon icon={faChevronRight}  className='mt-1'/>
          </Link>
        </div>
  </>
  )
}

export default Header