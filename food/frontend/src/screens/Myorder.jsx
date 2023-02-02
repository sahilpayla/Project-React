import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Header/Header';
import './myOrder.css';



export default function MyOrder() {

   const [orderData, setorderData] = useState({})

   const fetchMyOrder = async () => {
      console.log(localStorage.getItem('userEmail'))
      await fetch("http://localhost:8000/api/myOrderData", {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify({
            email: localStorage.getItem('userEmail')
         })
      }).then(async (res) => {
         let response = await res.json()
         await setorderData(response)
      })

   }

   useEffect(() => {
      fetchMyOrder()
   }, [])

   return (
      <>
         <div>
            <div>
               <Navbar />
            </div>

            <div className='myorder-container-box'>
               <div className='myorder-row-box'>

                  {orderData !== {} ? Array(orderData).map(data => {
                     return (
                        data.orderData ?
                           data.orderData.order_data.slice(0).reverse().map((item) => {
                              return (
                                 item.map((arrayData) => {
                                    return (
                                       <div  >
                                          {arrayData.Order_date ? <div className='m-auto mt-5'>

                                             {data = arrayData.Order_date}
                                             <hr />
                                          </div> :

                                             <div className='myorder-main-box' >
                                                <div className="myorder-card mt-3" style={{ width: "inherit", maxHeight: "360px" }}>

                                                   {/* <img src={arrayData.img} className="card-img-top" alt="..." style={{ height: "120px", objectFit: "fill" }} /> */}

                                                   <div className="card-body">
                                                      <h5 className="card-title">{arrayData.name}</h5>
                                                      <div className='container w-100 p-0' style={{ height: "38px" }}>
                                                         <span className='m-1'>{arrayData.qty}</span>
                                                         <span className='m-1'>{arrayData.size}</span>
                                                         <span className='m-1'>{data}</span>
                                                         <div className=' d-inline ms-2 h-100 w-20 fs-5' >
                                                            ₹{arrayData.price}/-
                                                         </div>
                                                      </div>
                                                   </div>
                                                </div>

                                             </div>
                                          }
                                       </div>
                                    )
                                 })
                              )
                           }) : ""
                     )
                  }) : ""}
               </div>
            </div>
            <Footer />
         </div>
      </>
   )
}
