import React from 'react'
import { Outlet } from 'react-router'
import Header from '../Components/Header'
import { Footer } from '../Components/Footer'

const DefaultLayout = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    <br /><br />
    <br />
  <Footer/>
    </>
  )
}

export default DefaultLayout