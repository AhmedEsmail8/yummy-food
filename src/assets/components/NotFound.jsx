import React from 'react'
import notFound from '../images/404 not found.png'

export default function NotFound() {
  return (
    <div className='not-found d-flex justify-content-center align-items-center'>
      <img src={notFound} alt="page not found image" />
    </div>
  )
}
