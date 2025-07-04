import React from 'react'
import { Outlet } from 'react-router'
import Header from '../Components/Header'

const DefaultLayout = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    </>
  )
}

export default DefaultLayout