import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'


const Header = () => {
   return (

      <nav className="navbar navbar-expand-lg navbar-light">
         <div className="container-fluid">
            <Link className="navbar-brand-image" to="/">
               <img src="https://www.freeiconspng.com/uploads/restaurant-icon-png-plate-1.png"  alt="Restaurant Icon Png Plate"/>
            </Link>
            <Link className="navbar-brand" to="/">
               Niya Cafe
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
               <ul className="navbar-nav">
                  <li className="nav-item">
                     <Link className="nav-link" to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                     <Link className="nav-link" to="/login">Login</Link>
                  </li>
                  <li className="nav-item">
                     <Link className="nav-link" to="/createuser">SignUp</Link>
                  </li>
               </ul>
            </div>
         </div>
      </nav>
   )
}

export default Header