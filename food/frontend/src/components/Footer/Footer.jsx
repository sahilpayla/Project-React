import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom'

const Footer = () => {
   return (

      <div className="footerContainer">
         <footer className="py-5">
            <div className="row">
               <div className="col-6 col-md-2 mb-3">
                  <h5>Section</h5>
                  <ul className="nav flex-column">
                     <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text">Home</Link></li>
                     <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text">Features</Link></li>
                     <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text">Pricing</Link></li>
                     <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text">FAQs</Link></li>
                     <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text">About</Link></li>
                  </ul>
               </div>

               <div className="col-6 col-md-2 mb-3">
                  <h5>Sponsors</h5>
                  <ul className="nav flex-column">
                     <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text">Google</Link></li>
                     <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text">Microsoft</Link></li>
                     <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text">Y-Combinator</Link></li>
                     <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text">FAQs</Link></li>
                     <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text">About</Link></li>
                  </ul>
               </div>

               <div className="col-6 col-md-2 mb-3">
                  <h5>Social Handles</h5>
                  <ul className="nav flex-column">
                     <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text">Instagram</Link></li>
                     <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text">Facebook</Link></li>
                     <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text">Twitter</Link></li>
                     <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text">Whatsapp</Link></li>
                     <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text">Github</Link></li>
                  </ul>
               </div>

               <div className="col-md-5 offset-md-1 mb-3">
                  <form>
                     <h5>Subscribe to newsletter</h5>
                     <p>Monthly digest of what's new and exciting from us.</p>
                     <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                        <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
                        <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
                        <button className="btn btn-primary" type="button">Subscribe</button>
                     </div>
                  </form>
               </div>
            </div>

            <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
               <p>
                  {/* <Link className="navbar-brand" href="/">
                     <img src="https://logos-world.net/wp-content/uploads/2020/11/PlayStation-Logo.png" alt="" />
                  </Link> */}
                  © 2023 Food Company, Inc. All rights reserved.</p>
            </div>
         </footer>
      </div>

   )
}

export default Footer