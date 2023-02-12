import React from 'react'
import Hero from '../Hero/Hero'

const Home = () => {
  return (
    <>
      <div className="container">
        <div className="wrapper">
          <Hero />
          <div className="delivery">
            <div className="titles">
              <span className="deliverySubtitle">Delivery</span>
              <h2 className="deliveryTitle">Always on time for you</h2>
            </div>
            <div className="deliveryInfos">
              <div className="deliveryInfo">
                <img src={illustration1} alt="" className='firstImg' />
                <h3>Our delivery guy is always on time</h3>
              </div>
              <div className="deliveryInfo">
                <img src={illustration2} alt="" className='secondImg' />
                <h3>He works very hard</h3>
              </div>
              <div className="deliveryInfo">
                <img src={illustration3} alt="" className='thirdImg' />
                <h3>He is friendly and social</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home