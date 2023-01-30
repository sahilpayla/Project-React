import React from 'react'
import './Carousal.css'
export default function Carousal() {
   return (
      <div>
         <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{objectFit:"cover !important"}}>
            <div className="carousel-inner" id="slider">


               {/* Search Bar In Slider */}
               <div className="carousel-caption" style={{ zIndex: "9" }}>
                  <form className="d-flex">
                     <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                     <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button>
                  </form>
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
   )
}
