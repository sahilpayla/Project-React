
import './Header.css'
import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { useCart } from '../contextReducer';
import Modal from '../../Modal';
import Cart from "../../screens/Cart";

const Header = () => {
   let data = useCart();
   const [cartView, setCartView] = useState(false)

   let navigate = useNavigate();

   const handleLogout = () => {
      localStorage.removeItem("authToken");
      navigate('/')
   }


   return (

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
         <div className="container-fluid">
            <Link className="navbar-brand-image" to="/">
               <img src="https://www.freeiconspng.com/uploads/restaurant-icon-png-plate-1.png" alt="Restaurant Icon Png Plate" />
            </Link>
            <Link className="navbar-brand" to="/">
               Niya Cafe
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
               <ul className="navbar-nav me-auto">
                  <li className="nav-item">
                     <Link className="nav-link text-white active " to="/">Home</Link>
                  </li>


                  {
                     (localStorage.getItem("authToken")) ?
                        <li className="nav-item">
                           <Link className="nav-link text-white" to="/myorder">My Orders</Link>
                        </li>
                        : ""
                  }

               </ul>

               {
                  (!localStorage.getItem("authToken")) ?
                     <div className='d-flex'>
                        <Link className="btn bg-white mx-2" to="/login">Login ___<span><i class="fa-solid fa-pen"></i></span></Link>
                        <Link className="btn bg-white mx-2" to="/createuser">SignUp <span><i class="fa-solid fa-user-plus"></i></span></Link>
                     </div>
                     :
                     <div>
                        <div className="btn bg-white mx-2" onClick={() => { setCartView(true) }}>
                           My Cart  {"  "}
                           {/* <span><i class="fa-solid fa-cart-shopping"></i></span> */}
                           <div className='badge'>{data.length}</div>
                        </div>

                        {cartView ? <Modal onClose={() => setCartView(false)}><Cart></Cart></Modal> : ""}

                        <div className="btn bg-danger text-white mx-2" onClick={handleLogout}>
                           Logout <span><i class="fa-solid fa-person-falling"></i></span>
                        </div>
                     </div>
               }
            </div>
         </div>
      </nav>
   )
}

export default Header