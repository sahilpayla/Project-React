import React from 'react'
import {AiOutlineShoppingCart, AiOutlineUser} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <>
      <div className="navbar-container">
        <div className="navbar-wrapper">
          <div className="navbar-left">
            <Link to='/' className="navbar-title">Martin Store</Link>
          </div>
          <div className="navbar-center">
            <div className="navbar-list">
              <div className="navbar-list-item"><a href="/">Home</a></div>
              <div className="navbar-list-item"><a href="/">Contact</a></div>
              <div className="navbar-list-item"><a href="/">Foods</a></div>
              <div className="navbar-list-item"><a href="/">FAQs</a></div>
              <div className="navbar-list-item"><Link to="/create">Create</Link></div>
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