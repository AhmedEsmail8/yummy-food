import React from 'react'
import Aside from './Aside'
import { Outlet } from 'react-router-dom'
import Nav from './Nav'

export default function Layout() {
  return (
    <>
      <div className='d-md-block d-none'>
      <Aside></Aside>
      </div>
      <div className='d-md-none d-block'>
      <Nav></Nav>
      </div>
      <div className='py-4 ms-50 mt-60'>
        <Outlet></Outlet>
      </div>
    </>
  )
}
