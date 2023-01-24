import React from 'react'
import './Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa'
const Navbar = () => {
   return (
      <div className="navbar">
         <div className="logo">
            <img src="https://logopond.com/logos/cc6a2594468231d13bf7e305392c7dca.png" alt="" />
         </div>
         <ul className='nav-menu'>
            <li className='nav-item'><a href="/">Home</a></li>
            <li className='nav-item'><a href="/">About</a></li>
            <li className='nav-item'><a href="/">FAQ</a></li>
            <li className='nav-item'><a href="/">Contact</a></li>
         </ul>
         <div className="hamburger">
            <FaBars size={30} style={{color:'#f8f8f8'}}/>
         </div>
      </div>
   )
}

export default Navbar