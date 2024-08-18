import React, { useState } from 'react'
import logo from '../images/logo.png'
import { NavLink } from 'react-router-dom'

export default function Nav() {

  let [expand, setExpand] = useState(false);


  return (
    <nav className='fixed-top w-100 bg-white py-2'>
        <div className='container'>
            <div className='d-flex justify-content-between align-items-center'>
                <img src={logo} alt="yummi website logo" width={45}/>
                {expand? <i className='fa-solid fa-xmark cursor-pointer fa-2x' onClick={()=>setExpand(!expand)}></i>
                : <i className='fa-solid fa-bars cursor-pointer fa-2x' onClick={()=>setExpand(!expand)}></i>}
                
                
            </div>
            {expand? <ul className="nav-expand-links position-relative list-unstyled flex-column row-gap-3">
                <li><NavLink to={'/search'} className='nav-link' onClick={()=>setExpand(!expand)}>Search</NavLink></li>
                <li><NavLink to={'/category'} className='nav-link' onClick={()=>setExpand(!expand)}>Category</NavLink></li>
                <li><NavLink to={'/area'} className='nav-link' onClick={()=>setExpand(!expand)}>Area</NavLink></li>
                <li><NavLink to={'/ingredients'} className='nav-link' onClick={()=>setExpand(!expand)}>Ingredients</NavLink></li>
                <li><NavLink to={'/contact'} className='nav-link' onClick={()=>setExpand(!expand)}>Contact Us</NavLink></li>
            </ul>: ''}
        </div>

    </nav>
  )
}
