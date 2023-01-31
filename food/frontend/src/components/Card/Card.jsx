import React from 'react'

export default function Card(props) {


   let options = props.options;
   let pricesOptions = Object.keys(options);



   return (
      <div >
         <div className="card mt-3" style={{"padding":"10px", "width": "18rem", "maxHeight": "360px" }}>
            <img src={props.imgSrc}
               className="card-img-top" 
               style={{height:"150px", objectFit:"cover"}}
               alt="..." />
           
           
            <div className="card-body">
               <h5 className="card-title">{props.name} </h5>
               {/* <p className="card-text" style={{fontSize:"10px"}}>{props.desc} </p> */}

               <div className="container w-100" >
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
                     {/* <option value="half">128 GB</option>
                     <option value="full">256 GB </option>
                     <option value="semifull">512 GB </option>
                     <option value="superfull">1 TB </option> */}

                     {pricesOptions.map((data) => {
                        return <option key={data} value={data}>{data} </option>
                     })}
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
