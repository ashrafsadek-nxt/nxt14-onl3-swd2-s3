import React from 'react'
import Nav from './Nav'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const Layout = () => {
  return (
    <>
      <div className='d-flex flex-column justify-content-between' style={{minHeight:"100vh"}}>
        <div>
              <Nav/>
        <Outlet />
        </div>
      
        <Footer/>
  </div>
      
    </>
  )
}

export default Layout
