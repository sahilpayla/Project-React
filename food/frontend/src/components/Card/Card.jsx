import React, { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatchCart, useCart } from '../contextReducer'

export default function Card(props) {

   let navigate = useNavigate()
   const [qty, setQty] = useState(1)
   const [size, setSize] = useState("")
   const priceRef = useRef();
   let data = useCart();

   let options = props.options;
   let pricesOptions = Object.keys(options);
   let foodItem = props.item;
   let dispatch = useDispatchCart();


   const handleAddToCart = async () => {
      let food = []
      for (const item of data) {
         if (item.id === props.foodItem._id) {
            food = item;

            break;
         }
      }

      // console.log(food)
      // console.log(new Date())

      if (food !== []) {
         if (food.size === size) {
            await dispatch({ type: "UPDATE", id: props.foodItem._id, price: finalPrice, qty: qty })
            return
         }
         else if (food.size !== size) {
            await dispatch({ type: "ADD", id: props.foodItem._id, name: props.foodItem.name, price: finalPrice, qty: qty, size: size, img: props.ImgSrc })
            console.log("Size different so simply ADD one more to the list")
            return
         }
         return
      }

      await dispatch({ type: "ADD", id: props.foodItem._id, name: props.foodItem.name, price: finalPrice, qty: qty, size: size })

   }

   let finalPrice = qty * parseInt(options[size]);   //This is where Price is changing

   useEffect(() => {
      setSize(priceRef.current.value)
   }, [])




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
