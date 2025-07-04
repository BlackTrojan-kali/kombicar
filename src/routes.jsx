import React from 'react'
import { useRoutes } from 'react-router'
import HomePage from './Pages/HomePage'
import DefaultLayout from './Layouts/DefaultLayout'

const Routes = () => {
  const route = useRoutes([
    {
      path:"/",
      element:<DefaultLayout/>,
      children:[
        {
          path:"/",
          element:<HomePage/>
        }
      ]
    }
  ])
  return route
}

export default Routes