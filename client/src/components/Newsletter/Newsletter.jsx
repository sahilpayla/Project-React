import React from 'react'
import { AiOutlineSend } from 'react-icons/ai';
import newsletterIllustration from '../../assets/get-newsletter-updates.svg';  
import './Newsletter.css'


const Newsletter = () => {
  return (
    <section id='contact' className='newsletter-container'>
      <div className="newsletter-wrapper">
        <h2 className="newsletter-subtitle">Get our latest offers</h2>
        <h4 className="newsletter-title">Newsletter</h4>
        <div className="newsletter-inputContainer">
          <input type="text" placeholder='Enter email' />
          <AiOutlineSend className="newsletter-sendIcon" />
        </div>
        <img src={newsletterIllustration} className='newsletter-illustration' alt="" />
      </div>
    </section>
  )
}

export default Newsletter