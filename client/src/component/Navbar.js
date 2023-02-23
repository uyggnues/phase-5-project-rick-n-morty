import React, { useRef } from 'react';
import Logout from './Logout';
import {FaBars, FaTimes } from 'react-icons/fa'


const Navbar = () => {
    const navRef = useRef()

    const showNavbar = () => {
        navRef.current.classList.toggle('responsive_nav')
    }

    return (
        <header>
            <h3>rick and morty</h3>
            <nav ref={navRef}>
                <a href='/#'>Characters</a>
                <a href='/#'>Teams</a>
                <a href='/#'>Episodes</a>
                <a href='/#'>Your Teams</a>
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
