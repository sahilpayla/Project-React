import React from 'react'

const Navbar = () => {
   return (
      // <div className='navbar'>
      <nav className="navbar navbar-expand-lg ">
         <a className="navbar-brand" href="#">Navbar</a>
         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
         </button>
         <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ml-100%">
               <a className="nav-item nav-link" href="#">Login</a>
               <a className="nav-item nav-link" href="#">Cart</a>
            </div>
         </div>
      </nav>
      // </div>
   )
}

export default Navbar