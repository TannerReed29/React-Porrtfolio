import React from 'react';
import { Link } from "react-router-dom"



function Nav() {

  return (
    <nav className='navbar navbar-expand-lg'>
        <ul className='nav nav-tabs justify-content-center'>
            <li className='nav-item mx-2'>
                <Link className='nav-link' to="/about">About Me</Link>
            </li>
            <li className='nav-item mx-2'>
                <Link className='nav-link' to="/project">Projects</Link>
            </li>
            <li className='nav-item mx-2'>
                <Link className='nav-link' to="/contact">Contact</Link>
            </li>
            <li className='nav-item mx-2'>
                <Link className='nav-link' to="/resume">Resume</Link>
            </li>
        </ul>
    </nav>
  );
}

export default Nav;