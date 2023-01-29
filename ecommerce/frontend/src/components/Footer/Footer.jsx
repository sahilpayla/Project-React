import React from 'react'
import './Footer.css'

const Footer = () => {
   return (

      <div className="container">
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
                     <li className="nav-item mb-2"><a to="/" className="nav-link p-0 text">Y-Combinator</a></li>
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

               <div className="col-md-5 offset-md-1 mb-3">
                  <form>
                     <h5>Subscribe to newsletter</h5>
                     <p>Monthly digest of what's new and exciting from us.</p>
                     <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                        <label for="newsletter1" className="visually-hidden">Email address</label>
                        <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
                        <button className="btn btn-primary" type="button">Subscribe</button>
                     </div>
                  </form>
               </div>
            </div>

            <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
               <p>
                  <a className="navbar-brand" href="/">
                     <img src="https://logos-world.net/wp-content/uploads/2020/11/PlayStation-Logo.png" alt="" />
                  </a>
                  © 2023 Game Shopping Company, Inc. All rights reserved.</p>
            </div>
         </footer>
      </div>

   )
}

export default Footer