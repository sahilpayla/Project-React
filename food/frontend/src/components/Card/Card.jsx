import React from 'react'

export default function Card() {
   return (
      <div>
         <div class="card mt-3" style={{ "width": "18rem", "max-Height": "360px" }}>
            <img src="https://www.reliancedigital.in/medias/Apple-iPhone-14-Mobile-Phone-493177752-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w2OTU0M3xpbWFnZS9qcGVnfGltYWdlcy9oZTYvaDZlLzk4OTA0ODYzMjExODIuanBnfDY3ZWRlZDE0YjBhMzJmMzk3MTBjNzUxNzk1NDJlN2I4YWQwZGRiMmU1MDYzYjY3NzNmNWViMmZmOWU2NzE1YzM"
               class="card-img-top" alt="..." />
           
           
            <div class="card-body">
               <h5 class="card-title">Iphone 14</h5>
               <p class="card-text">iPhone 14 has the same super-speedy chip that's in iPhone 13 Pro. A15 Bionic, with a 5-core GPU, powers all the latest features and makes graphically intense games and AR apps feel ultra fluid. An updated internal design delivers better thermal efficiency, so you can stay in the action longer.</p>

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
                     <option value="half">128 GB</option>
                     <option value="full">256 GB </option>
                     <option value="semifull">512 GB </option>
                     <option value="superfull">1 TB </option>
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
