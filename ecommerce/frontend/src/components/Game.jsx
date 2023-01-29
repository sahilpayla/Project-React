import { React, useState } from 'react';
import data from '../consoledata';
import './Game.css'

const Game = ({ game }) => {


   const [quantity, setQuantity] = useState(1)
   const [varient, setVarient] = useState('small')

   return (
      <>
         {/* name and image convention */}
         <h1>{game.name}</h1>
         <img src={game.image} className="img-fluid" alt=""
            style={{ height: "450px", width: "350px" }} />


         {/* options size && Quantity */}
         <div className="flex-container">
            <div className="w-100">
               <p>
                  Varients
               </p>
               <select className='form-control' value={varient} onChange={(e) => { setVarient(e.target.value) }}>
                  {game.varients.map(varient => {
                     return <option value={varient}>{varient} </option>
                  })}
               </select>
            </div>
            <div className="w-100">
               <p>
                  Quantity
               </p>
               <select className='form-control' value={quantity} onChange={(e) => { setQuantity(e.target.value) }}>
                  {[...Array(10).keys()].map((x, i) => {
                     return <option value={i + 1}>
                        {i + 1}
                     </option>
                  })}
               </select>
            </div>
         </div>

         <div className="flex-container">
            <div className='ml-0'>
               <h1>Price : {game.prices[0][varient] * quantity}</h1>
            </div>
            <div className=' '>
               <button className="btn">Add To Cart</button>
            </div>
         </div>
      </>
   )
}

export default Game