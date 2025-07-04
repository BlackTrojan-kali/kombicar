import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Card = (props) => {
    const imageUrl = props.imageUrl
    const Depart = props.depart 
    const Arrivee= props.arrivee
    const prix = props.prix
    const driver = props.driver
    const distance = props.distance
    const trajets = props.trajets
  return (
    <div className='rounded-xl w-[340px] overflow-hidden transition-all text-start duration-200 relative shadow-md bg-white'>
        <img src={imageUrl} alt={imageUrl} className='w-full h-[180px] object-cover hover:scale-105' />
        <div className="p-8">
            <div className='font-bold text-2xl flex gap-4'>
                <p>{Depart}</p>
                <FontAwesomeIcon icon={faArrowRight} className='mt-2'/>
                <p>{Arrivee}</p>
            </div>
            <div className='flex flex-col text-start mt-4'>
                <b className='text-sm text-gray-400'>des</b>
                <b className='text-2xl'>{prix} XAF</b>
            </div>
            <button className='btn-primary px-3 py-2 absolute top-[44%] right-8 font-bold rounded-full text-2xl'>
                <FontAwesomeIcon icon={faArrowRight}/></button>
            <div className='h-[2px] w-full bg-gray-300 mt-16'></div>
            <div className='mt-4 text-xl'>

                <b className='text-sm text-gray-400'>chauffeur</b>
                <p>{driver}</p></div>
        
            <div className='mt-4 text-xl'>
                <b className='text-sm text-gray-400'>Distance</b>
                <p>{distance} km</p></div>
    
            <div className='mt-4 text-xl'>
                <b className='text-sm text-gray-400'>Trajets effectues</b>
                <p>{trajets}</p></div>
    
        </div>
        
    </div>
  )
}

export default Card