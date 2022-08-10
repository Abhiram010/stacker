import React from 'react'
import Navabr from '../components/Navabr'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
      <div>
          <Navabr />
          <Outlet/>
    </div>
  )
}

export default Layout