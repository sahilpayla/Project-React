import React from 'react'
import './Header.css';


const Header = () => {
   return (
      <>
         <div className="header">
            <div className="header-points">
               <i class="fa-brands fa-apple" style={{fontSize:"16px"}}></i>
            </div>
            <div className="header-points">Store</div>
            <div className="header-points">Mac</div>
            <div className="header-points">iPad</div>
            <div className="header-points">iPhone</div>
            <div className="header-points">Watch</div>
            <div className="header-points">AirPods</div>
            <div className="header-points">TV & Home</div>
            <div className="header-points">Entertaiment</div>
            <div className="header-points">Accessories</div>
            <div className="header-points">Support</div>
            <div className="header-points">
               <i class="fa-solid fa-magnifying-glass"></i>
            </div>
            <div className="header-points">
            <i class="fa-solid fa-bag-shopping"></i>
            </div>
         </div>

      </>
   )
}

export default Header