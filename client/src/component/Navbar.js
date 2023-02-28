import React, { useRef } from 'react';
import Logout from './Logout';
import {FaBars, FaTimes } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'


const Navbar = () => {
    const navRef = useRef()
    const navigate = useNavigate()

    const showNavbar = () => {
        navRef.current.classList.toggle('responsive_nav')
    }

    return (
        <header>
            <h3 onClick={() => navigate('/')}>rick and morty</h3>
            <nav ref={navRef}>
                <a href='/profile'>Profile</a>
                <a href='/characters'>Characters</a>
                <a href='/teams'>Teams</a>
                <a href='/#'>Episodes</a>
                <a href='/make_teams'>Make Teams</a>
                <a href='/#'>Your Teams</a>
                <a href='/#'>Battle</a>
                <Logout />
                <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button className='nav-btn' onClick={showNavbar}>
                <FaBars />
            </button>
        </header>
    );
}

export default Navbar;
