import React from 'react'

export default function Card() {
   return (
      <div>
         <div class="card mt-3" style={{ "width": "18rem", "max-Height": "360px" }}>
            <img src="https://www.reliancedigital.in/medias/Apple-iPhone-14-Mobile-Phone-493177752-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w2OTU0M3xpbWFnZS9qcGVnfGltYWdlcy9oZTYvaDZlLzk4OTA0ODYzMjExODIuanBnfDY3ZWRlZDE0YjBhMzJmMzk3MTBjNzUxNzk1NDJlN2I4YWQwZGRiMmU1MDYzYjY3NzNmNWViMmZmOWU2NzE1YzM"
               class="card-img-top" alt="..." />
           
           
            <div class="card-body">
               <h5 class="card-title">Iphone 14</h5>
               <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

               <div className="container w-100">
                  <select className='m-1 w-100 h-100 rounded'>
                     {Array.from(Array(6), (e, i) => {
                        return (
                           <option key={i + 1} value={i + 1} >
                              {i + 1}
                           </option>
                        )
                     })}
                  </select>

                  <select className='m-1 w-100 h-100 rounded'>
                     <option value="half">Without Accessories </option>
                     <option value="full">With Accessories </option>
                  </select>


                  {/* total price */}
                  <div className="m-1 w-100 h-100 bg-danger text-white rounded fs-5">
                     Total Price
                  </div>

               </div>
            </div>
         </div>
      </div>
   )
}
