import React, { useState, useEffect } from 'react'
import Card from '../components/Card/Card'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'


const Home = () => {

   const [productCat, setProductCat] = useState([]);
   const [product, setProduct] = useState([]);
   const [search, setSearch] = useState("")

   const loadData = async () => {
      let response = await fetch("http://localhost:8000/api/phonedata", {
         method: "POST",
         headers: {
            'Content-Type': 'application/json'
         }
      });

      response = await response.json();


      setProduct(response[0]);
      setProductCat(response[1]);

      console.log(response[0], response[1])
   }


   useEffect(() => {
      loadData();
   }, [])



   return (
      <>
         <Header />

         {/* Slider Section*/}
         <div>
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{ objectFit: "cover !important" }}>
               <div className="carousel-inner" id="slider">


                  {/* Search Bar In Slider */}
                  <div className="carousel-caption" style={{ zIndex: "9" }}>
                     <div className="d-flex justify-content-center">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e) => { setSearch(e.target.value) }} />
                        {/* <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button> */}
                     </div>
                  </div>
                  {/* Search Bar End  */}



                  <div className="carousel-item active">
                     <img src="https://images.macrumors.com/t/eBKCCW-zZ7naZ5jkxwMwBOHucho=/1600x0/article-new/2019/03/Upcoming-Products-2022-Feature.jpg"
                        className="d-block w-100"
                        style={{ filter: "brightness(20%)" }}
                        alt="..." />
                  </div>
                  <div className="carousel-item">
                     <img src="https://images.macrumors.com/t/RZ3j1zy0ObAq2O6OBwIascckuQg=/2500x/article-new/2019/02/Upcoming-Apple-Products-Guide-2023-Feature.jpg" className="d-block w-100"
                        style={{ filter: "brightness(20%)" }}
                        alt="..." />
                  </div>
                  <div className="carousel-item">
                     <img src="https://m-cdn.phonearena.com/images/article/98169-wide-two_1200/Apple-iPhone-history-the-evolution-of-the-smartphone-that-started-it-all.jpg"
                        style={{ filter: "brightness(20%)" }}
                        alt="..." />
                  </div>
               </div>
               <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
               </button>
               <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
               </button>
            </div>
         </div>

         {/* Card Section */}
         <div className='container'>
            {
               productCat !== [] ? productCat.map((data) => {
                  return (
                     <div className='row mb-3'>
                        {/* category of products */}
                        <div key={data._id} className="fs-3 m-3">
                           {data.CategoryName}
                        </div>

                        <hr />

                        {/* iphones and macs data to show */}
                        {product !== [] ?
                           product.filter((item) => (item.CategoryName === data.CategoryName)
                              && (item.name.toLowerCase().includes(search.toLocaleLowerCase())))
                              .map(appleProducts => {
                                 return (
                                    <div key={appleProducts._id} className="col-12 col-md-6 col-lg-3">
                                       <Card name={appleProducts.name}
                                          options={appleProducts.options[0]}
                                          imgSrc={appleProducts.img}
                                          desc={appleProducts.description}
                                       ></Card>
                                    </div>
                                 )
                              })
                           : <div>"Data Not Found"</div>}
                     </div>
                  )
               }) : ""
            }
         </div>

         <Footer />
      </>
   )
}

export default Home