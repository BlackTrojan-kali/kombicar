import { faCalendar, faLocation, faPerson } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import {DatePicker} from "@mui/x-date-pickers/DatePicker"
const SearchBar = () => {
  return (
     <form action="" className='-bottom-[30px] absolute flex'>
      <div className='md:w-[1180px]  p-[5px] rounded-l-xl flex bg-white'>
        <div className='relative hover:bg-gray-200 rounded-xl p-[10px] flex gap-1 search-input
    
        '>
            <FontAwesomeIcon icon={faLocation} className='text-2xl mt-4'/>
            <input type="text" placeholder='Depart' className='h-[100%] text-center' />
        </div>
        <div className='relative hover:bg-gray-200 rounded-xl p-[10px] flex gap-1 search-input
    
        '>
            <FontAwesomeIcon icon={faLocation} className='text-2xl mt-4'/>
            <input type="text" placeholder='Depart' className='h-[100%] text-center' />
        </div>
        <div className='p-[10px]'>
           <DatePicker label="Basic date picker" />
        </div>
       
        <div className='relative ml-4 hover:bg-gray-200 rounded-xl p-[10px] flex gap-1 
    
        '>
            <FontAwesomeIcon icon={faPerson} className='text-2xl mt-4'/>
            <input type="number" min="0" max="10" placeholder='Personnes' className='h-[100%] text-center' />
        </div>
</div>
        <button className='h-[100%] px-[10px] py-[30px] rounded-r-xl text-white font-bold bg-green-300'>Rechercher</button>
     </form>
     
  )
}

export default SearchBar