import React from 'react'
import '../Navbar/Navbar.css';



const Navbar = () => {
   return (
      // <div className='navbar'>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
         <div className="container-fluid">
            <a className="navbar-brand" href="/">
               <img src="https://w7.pngwing.com/pngs/24/817/png-transparent-playstation-4-raiders-of-the-broken-planet-playstation-network-playstation-plus-playstation-electronics-text-trademark.png" alt="" />
            </a>

            <div className="collapse navbar-collapse" id="navbarNav">
               <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                     <a className="nav-link" href="#">Login</a>
                  </li>
                  <li className="nav-item">
                     <a className="nav-link" href="#">Cart</a>
                  </li>
               </ul>
            </div>
         </div>
      </nav>
      // </div>
   )
}

export default Navbar