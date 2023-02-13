import React from 'react';
import './Footer.css';

const Footer = () => {
   return (

      <div className="footer-container">
         <footer className="py-5">
            <div className="row">
               <div className="col-6 col-md-2 mb-3">
                  <h5>Section</h5>
                  <ul className="nav flex-column">
                     <li className="nav-item mb-2"><a to="/" className="nav-link p-0 text">Home</a></li>
                     <li className="nav-item mb-2"><a to="/" className="nav-link p-0 text">Features</a></li>
                     <li className="nav-item mb-2"><a to="/" className="nav-link p-0 text">Pricing</a></li>
                     <li className="nav-item mb-2"><a to="/" className="nav-link p-0 text">FAQs</a></li>
                     <li className="nav-item mb-2"><a to="/" className="nav-link p-0 text">About</a></li>
                  </ul>
               </div>

               <div className="col-6 col-md-2 mb-3">
                  <h5>Sponsors</h5>
                  <ul className="nav flex-column">
                     <li className="nav-item mb-2"><a to="/" className="nav-link p-0 text">Google</a></li>
                     <li className="nav-item mb-2"><a to="/" className="nav-link p-0 text">Microsoft</a></li>
                     <li className="nav-item mb-2"><a to="/" className="nav-link p-0 text">Y-Comb</a></li>
                     <li className="nav-item mb-2"><a to="/" className="nav-link p-0 text">FAQs</a></li>
                     <li className="nav-item mb-2"><a to="/" className="nav-link p-0 text">About</a></li>
                  </ul>
               </div>

               <div className="col-6 col-md-2 mb-3">
                  <h5>Social Handles</h5>
                  <ul className="nav flex-column">
                     <li className="nav-item mb-2"><a to="/" className="nav-link p-0 text">Instagram</a></li>
                     <li className="nav-item mb-2"><a to="/" className="nav-link p-0 text">Facebook</a></li>
                     <li className="nav-item mb-2"><a to="/" className="nav-link p-0 text">Twitter</a></li>
                     <li className="nav-item mb-2"><a to="/" className="nav-link p-0 text">Whatsapp</a></li>
                     <li className="nav-item mb-2"><a to="/" className="nav-link p-0 text">Github</a></li>
                  </ul>
               </div>


            </div>
            <hr />
            <div className="footer-company">
               <p className='footer-flex'>
                     © 2023 Company, Inc. All rights reserved.
               </p>
            </div>
         </footer>
      </div>

   )
}

export default Footer