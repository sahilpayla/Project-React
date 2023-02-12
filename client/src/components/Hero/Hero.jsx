import React from 'react'
import { AiOutlineArrowDown } from 'react-icons/ai'
import './Hero.css';
import manEating from '../../assets/man-having-his-meal.svg'
const Hero = () => {
  return (
    <>
      <section id="home" className="hero-container">
        <div className="hero-wrapper">
          <div className="hero-left">
            <h2 className='hero-title'>Do you crave delicious food</h2>
            <p className='hero-firstmsg'>
              But going out to take <span>food costs time ...</span>
            </p>
            <p className='hero-secondmsg'>
              Why not order <span>pizza </span> something <br/>
              <span>delicious </span>
              from our restaurant
            </p>
            <p className='hero-desc'>
              Our restaurant always puts the client above.
              They are our single most important thing for our business.
            </p>
            <div className="hero-button">
              <button className='hero-buttonOrder'>Order now !!</button>
              <button className='hero-buttonSee'>
                <a href="#foods">
                  See what's  available <AiOutlineArrowDown />
                </a>
              </button>
            </div>
          </div>
          <div className="hero-right">
            <img src={manEating} alt="" className='hero-manEatingImg'/>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero