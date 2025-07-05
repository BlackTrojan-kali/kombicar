import React from 'react'
import { useRoutes } from 'react-router'
import HomePage from './Pages/HomePage'
import DefaultLayout from './Layouts/DefaultLayout'
import Register from './Pages/auth/Register'
import SignIn from './Pages/auth/SignIn'
import CarSharing from './Pages/CarSharing'

const Routes = () => {
  const route = useRoutes([
    {
      path:"/",
      element:<DefaultLayout/>,
      children:[
        {
          path:"/",
          element:<HomePage/>
        },
        {
          path:"/carsharing",
          element:<CarSharing/>
        }
      ]
    },

        {
          path:"/register",

          element:<Register/>
        },{
          path:"/signin",
          element:<SignIn/>
        }
  ])
  return route
}

export default Routes