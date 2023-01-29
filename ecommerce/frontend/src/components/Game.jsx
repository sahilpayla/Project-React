import { React, useState } from 'react';
import data from '../consoledata';
import './Game.css'
import { Modal } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../actions/cartActions';



const Game = ({ game }) => {


   const [quantity, setQuantity] = useState(1)
   const [varient, setVarient] = useState('single')
   const [show, setShow] = useState(false);


   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);

   const dispatch = useDispatch()
   function addtocart()
   {
      dispatch(addToCart(game, quantity, varient ))
   }




   return (
      <div style={{ margin: '70px 0' }} className='shadow-lg p-3 mb-3 bg-white rounded'>


         {/* name and image convention */}
         <div onClick={handleShow}>
            <h1>{game.name}</h1>
            <img src={game.image} className="img-fluid" alt=""
               style={{ height: "450px", width: "350px" }} />
         </div>


         {/* options size && Quantity */}
         <div className="flex-container">
            <div className="w-100 m-1">
               <p>
                  Varients
               </p>
               <select className='form-control' value={varient} onChange={(e) => { setVarient(e.target.value) }}>
                  {game.varients.map(varient => {
                     return <option value={varient}>{varient} </option>
                  })}
               </select>
            </div>
            <div className="w-100 m-1">
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
               <h1>Price : ₹ {game.prices[0][varient] * quantity}</h1>
            </div>
            <div className=' '>
               <button className="btn" onClick={addtocart}>Add To Cart</button>
            </div>
         </div>



         {/* MODAL */}

         <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
               <Modal.Title>{game.name}</Modal.Title>
            </Modal.Header>

            <Modal.Body style={{margin:"auto"}}>
            <img src={game.image} className="img-fluid" alt="" style={{height:"300px", width:"250px"}}/>
            <p>
               <strong>{game.description}</strong>
            </p>
            </Modal.Body>

            <Modal.Footer>
               <button className="btn" onClick={handleClose}>CLOSE</button>
            </Modal.Footer>
         </Modal>


      </div>
   )
}

export default Game