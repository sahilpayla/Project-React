import React, { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatchCart, useCart } from '../contextReducer'

export default function Card(props) {
   let data = useCart();

   let navigate = useNavigate()
   const [qty, setQty] = useState(1)
   const [size, setSize] = useState("")
   const priceRef = useRef();

   let options = props.options;
   let pricesOptions = Object.keys(options);
   let foodItem = props.item;
   const dispatch = useDispatchCart();

   useEffect(() => {
      setSize(priceRef.current.value)
    }, [])

   const handleAddToCart = async () => {
      await dispatch({ type: "ADD", id: foodItem._id, name: foodItem.name, price: finalPrice, qty: qty, size: size })
   }

   let finalPrice = qty * parseInt(options[size]);   //This is where Price is changing
   // totval += finalPrice;
   // console.log(totval)

   return (
      <div >
         <div className="card mt-3"
            style={{ "padding": "10px", "width": "18rem", "maxHeight": "390px" }}>
            <img src={props.foodItem.img}
               className="card-img-top"
               style={{ height: "150px", objectFit: "cover" }}
               alt="..." />


            <div className="card-body">
               <h5 className="card-title">{props.foodItem.name} </h5>
               {/* <p className="card-text" style={{fontSize:"10px"}}>{props.desc} </p> */}

               <div className="container w-100" >
                  <select className='m-1 w-100 h-100 rounded' onChange={(e) => setQty(e.target.value)}>
                     {Array.from(Array(6), (e, i) => {
                        return (
                           <option key={i + 1} value={i + 1} >
                              {i + 1}
                           </option>
                        )
                     })}
                  </select>

                  <select className='m-1 w-100 h-100 rounded' ref={priceRef} onChange={(e) => setSize(e.target.value)}>
                     {pricesOptions.map((data) => {
                        return <option key={data} value={data}>{data} </option>
                     })}
                  </select>


                  {/* total price */}
                  <div className="m-1 w-100 h-100 rounded fs-5">
                     ₹{finalPrice}/-
                  </div>
               </div>



               <hr />
               <button className="btn bg-danger text-white" onClick={handleAddToCart}>
                  Add To Cart
               </button>
            </div>
         </div>
      </div>
   )
}
