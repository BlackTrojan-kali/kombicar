import React from 'react'

const Botton = ({type,children,theme}) => {
  return (
    <button
    type={type}
    className='p-2 font-bold text-white bg-blue-500 rounded-l-full rounded-r-full w-[150px]'
    >
    {children}
    </button>
  )
}

export default Botton