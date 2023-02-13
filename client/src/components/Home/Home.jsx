import React from 'react'
import Hero from '../Hero/Hero'
import './Home.css';

import illustration1 from '../../assets/male-delivery-guy-riding-scooter.svg'
import illustration2 from '../../assets/delivery-location.svg'
import illustration3 from '../../assets/deliveryman-with-pizza.svg'

import Foods from '../Foods/Foods';
import NewsLetter from '../Newsletter/Newsletter';

const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="home-wrapper">
          <Hero />
          <div className="home-delivery">
            <div className="home-titles" id='faqs'>
              <span className="home-deliverySubtitle">Delivery</span>
              <h2 className="home-deliveryTitle">Always on time for you</h2>
            </div>
            <div className="home-deliveryInfos">
              <div className="home-deliveryInfo">
                <img src={illustration1} alt="" className='home-firstImg' />
                <h3>Our delivery guy is always on time</h3>
              </div>
              <div className="home-deliveryInfo">
                <img src={illustration2} alt="" className='home-secondImg' />
                <h3>He works very hard</h3>
              </div>
              <div className="home-deliveryInfo">
                <img src={illustration3} alt="" className='home-thirdImg' />
                <h3>He is friendly and social</h3>
              </div>
            </div>
          </div>
          <Foods />
          <NewsLetter />
        </div>
      </div>
    </>
  )
}

export default Home