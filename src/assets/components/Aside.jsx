import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../images/logo.png'

export default function Aside() {

    let [side, setSide] = useState(false);

    return (
        <div className={`position-fixed top-0 bottom-0 aside-container d-flex ${side ? 'show' : ''}`}>
            <aside className="bg-color h-100 d-flex flex-column justify-content-between p-4 position-relative">
                <div className="overflow-hidden">
                    <ul className="nav-links position-relative list-unstyled flex-column row-gap-3">
                        <li><NavLink to={'/search'} onClick={()=>setSide(false)}>Search</NavLink></li>
                        <li><NavLink to={'/category'} onClick={()=>setSide(false)}>Category</NavLink></li>
                        <li><NavLink to={'/area'} onClick={()=>setSide(false)}>Area</NavLink></li>
                        <li><NavLink to={'/ingredients'} onClick={()=>setSide(false)}>Ingredients</NavLink></li>
                        <li><NavLink to={'/contact'} onClick={()=>setSide(false)}>Contact Us</NavLink></li>
                    </ul>
                </div>
                <div className="text-white">
                    <div className="icons">
                        <i className="fa-brands fa-facebook cursor-pointer" />
                        <i className="fa-brands fa-twitter cursor-pointer" />
                        <i className="fa-solid fa-globe cursor-pointer" />
                    </div>
                    <div>
                        <p>
                            Copyright Â© 2019 All Rights
                            <br />
                            Reserved.
                        </p>
                    </div>
                </div>
            </aside>
            <div className="side-header bg-white h-100 py-4 px-2 d-flex flex-column justify-content-between align-items-center">
                <img src={logo} className="logo" />
                <i className={`fa-solid fa-bars fs-2 cursor-pointer ${side ? 'd-none' : ''}`} id="showSideBtn" onClick={() => setSide(true)} />
                <i className={`fa-solid fa-xmark fs-2 cursor-pointer ${side ? '' : 'd-none'}`} id="hideSideBtn" onClick={() => setSide(false)} />
                <div className="d-flex flex-column justify-content-between align-items-center row-gap-1">
                    <i className="fa-solid fa-globe cursor-pointer" />
                    <i className="fa-solid fa-share-nodes cursor-pointer" />
                </div>
            </div>
        </div>
    )
}