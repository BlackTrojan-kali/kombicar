import { faCalendar, faLocation, faPerson } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import {DatePicker} from "@mui/x-date-pickers/DatePicker"
const SearchBar = () => {
  return (
     <form action="" className='text-slate-800 w-[90%] -bottom-[300px] left-[5%]  lg:-bottom-[30px] absolute flex flex-col lg:flex-row'>
      <div className='w-full lg:w-[1180px]  p-[5px]  rounded-t-xl lg:rounded-r-none md:rounded-l-xl flex flex-col lg:flex-row bg-white'>
        <div className='relative hover:bg-gray-200 rounded-xl p-[10px] flex gap-1 search-input
        w-full
        '>
            <FontAwesomeIcon icon={faLocation} className='text-2xl mt-4'/>
            <input type="text" placeholder='Depart' className='lg:h-[100%] w-[100%] text-center' />
        </div>
        <div className='h-full p-4'>
        <div className='w-[1px] mx-2  bg-gray-300 h-[100%]'></div>
        </div>
        <div className='relative hover:bg-gray-200 rounded-xl p-[10px] w-full flex gap-1 search-input
    
        '>
            <FontAwesomeIcon icon={faLocation} className='text-2xl mt-4'/>
            <input type="text" placeholder='Depart' className='lg:h-[100%] w-[100%] text-center' />
        </div>

        <div className='h-full p-4'>
        <div className='w-[1px] mx-2  bg-gray-300 h-[100%]'></div>
        </div>
        <div className='p-[10px]'>
           <DatePicker label="choisir un jour" />
        </div>
       
        <div className='h-full p-4'>
        <div className='w-[1px] mx-2  bg-gray-300 h-[100%]'></div>
        </div>
        <div className='relative md:ml-4 hover:bg-gray-200 rounded-xl w-full p-[10px] flex gap-1 
    
        '>
            <FontAwesomeIcon icon={faPerson} className='text-2xl mt-4'/>
            <input type="number" min="0" max="10" placeholder='Personnes' className='lg:h-[100%] w-[100%]  text-center' />
        </div>
</div>
        <button className='h-[100%] lg:w-[10%] px-[10px] py-[35px] -left-[10%] rounded-b-xl lg:rounded-bl-none lg:rounded-r-xl text-white font-bold bg-green-400'>Rechercher</button>
     </form>
     
  )
}

export default SearchBar