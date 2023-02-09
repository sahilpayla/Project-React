import React from 'react'
import { Link } from 'react-router-dom';


const Orders = ({ items, order}) => {


   return (
      <>
         <div className="container mb-5">
            <div className="d-flex flex-row align-items-start">
               <div className="col-11 d-flex flex-column m-2">
                  {items.map(item => <div className="cart-item p-3">
                     <div className="d-flex flex-row">
                        <img
                           className="col-2 img-fluid"
                           src={`images/${item.image}.jpg`}
                           alt=""
                        />
                        <div className="col-6 p-2">
                           <h5>{item.name}</h5>
                           <h6>{item.category}</h6>
                           <h6>Quantity : {item.quantity}</h6>
                           <p>${item.price}</p>
                        </div>
                     </div>
                  </div>)}

               </div>
            </div>
         </div>
      </>
   )
}

export default Orders