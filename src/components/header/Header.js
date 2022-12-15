import React, { useRef } from 'react';
import {BrowserRouter, Link} from 'react-router-dom';
import logo from '../../public/img/hightop-side-logo.png';
import { FaBars, FaTimes, FaShoppingCart, FaRegUser } from 'react-icons/fa';

import './header.css';

function Header() {

    const navRef = useRef();
    const showNavbar = () => {
        navRef.current.classList.toggle('active-nav')
    }
    return (
        <header className='header'>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="logo-img">
                            <img src={logo} alt="logo - hightop" />
                        </div>
                    </div>
                    <div className="col-md-8">
                        <nav className='main-nav' ref={navRef}>
                            <ul>
                                <li><Link to='/'>Home</Link></li>
                                <li><Link to='/'>Product</Link></li>
                                <li><Link to='/'>About</Link></li>
                                <li><Link to='/'>contact</Link></li>
                            </ul>
                            <span className='close' onClick={showNavbar}><FaTimes /></span>
                        </nav>
                        <nav className='sub-nav'>
                            <ul>
                                <li><FaShoppingCart /></li>
                                <li><FaRegUser /></li>
                                <li className='menu' onClick={showNavbar}><FaBars /></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;