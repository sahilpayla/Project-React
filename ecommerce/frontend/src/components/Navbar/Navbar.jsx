import React from 'react'
import '../Navbar/Navbar.css';
<style>
  @import url('https://fonts.googleapis.com/css2?family=Monoton&display=swap');
</style>


const Navbar = () => {
   return (
      // <div className='navbar'>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
         <div className="container-fluid">
            <a className="navbar-brand" href="/">Game  Shopping</a>

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