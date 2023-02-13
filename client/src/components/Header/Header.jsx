import React, { useState } from 'react'
import { AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {

  return (
    <>
      <div className="navbar-container">
        <div className="navbar-wrapper">
          <div className="navbar-left">
            <Link to='/' className="navbar-title">
              <img src="https://uxwing.com/wp-content/themes/uxwing/download/food-and-drinks/food-icon.png" alt="" />
              {" "} Martin Store
            </Link>
          </div>
          <div className="navbar-center">
            <div className="navbar-list">
              <div className="navbar-list-item"><a href="#home">Home</a></div>
              <div className="navbar-list-item"><a href="#faqs">FAQs</a></div>
              <div className="navbar-list-item"><a href="#foods">Foods</a></div>
              <div className="navbar-list-item"><Link to="/create">Create</Link></div>
              <div className="navbar-list-item"><a href="#contact">Contact</a></div>
            </div>
          </div>
          <div className="navbar-right">
            <AiOutlineUser className='navbar-userIcon' />
            <Link to='/cart' className='navbar-cartContainer'>
              <AiOutlineShoppingCart className='navbar-cartIcon' />
              <div className="navbar-cartQuantity">0</div>
            </Link>
            <button className="navbar-logout">Logout</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header