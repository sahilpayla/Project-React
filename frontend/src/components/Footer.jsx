import React from 'react'

export default function Footer() {
   return (
      <>
         <div className="footer mt-auto bg-dark text-light">
            <div className="container py-3">
               <div className="row d-flex footer-items">
                  <div className="col-lg-4">
                     <h5>Categories</h5>
                     <ul>
                        <li><a href="#">Watches</a></li>
                        <li><a href="#">Mobiles</a></li>
                        <li><a href="#">Tablets</a></li>
                        <li><a href="#">Audio</a></li>
                        <li><a href="#">Drones</a></li>
                     </ul>
                  </div>
                  <div className="col-lg-4">
                     <h5>Useful Links</h5>
                     <ul>
                        <li><a href="#">Terms</a></li>
                        <li><a href="#">Privacy</a></li>
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Mission</a></li>
                     </ul>
                  </div>
                  <div className="col-lg-4">
                     <h5>Get Updates</h5>
                     <div className="d-flex subscribe">
                        <input type="text" className="form-control" />
                           <button className="btn btn-warning">Subscribe</button>
                     </div>
                     <div className="mt-2">
                        <div className="btn-group me-2 social-icons" role="group" aria-label="First group">
                           <button type="button" className="btn btn-secondary mx-1 d-flex flex-column justify-content-center align-items-center">
                              <i className="bi bi-facebook"></i>
                           </button>
                           <button type="button" className="btn btn-secondary mx-1 d-flex flex-column justify-content-center align-items-center">
                              <i className="bi bi-instagram"></i>
                           </button>
                           <button type="button" className="btn btn-secondary mx-1 d-flex flex-column justify-content-center align-items-center">
                              <i className="bi bi-twitter"></i>
                           </button>
                           <button type="button" className="btn btn-secondary mx-1 d-flex flex-column justify-content-center align-items-center">
                              <i className="bi bi-linkedin"></i>
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="row text-center">
                  <span>All Copyrights Are Reserved By Company</span>
               </div>
            </div>

         </div>
      </>
   )
}
