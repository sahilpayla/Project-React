import React from 'react'
import Person from '../../Images/person.png'
import './Intro.css';

const Intro = () => {
   return (
      <>
      {/* INTRO */}
         <div className="intro">
            <div className="intro-flex">
               <div className="intro-text">Hi</div>
               <div className="intro-img">
                  <img src={Person} alt="" className='intro-img-img' />
               </div>
            </div>

            <div className="intro-flex2">
               <div className="intro-text2">
                  I' <span className='intro-letter'>a</span>m <br />
                  <span className='intro-letter'>S</span>hraddhanand
               </div>
            </div>

            <div className="intro-job dark">
               <div className="intro-title1">FullStack Developer</div>
            </div>
            <div className="intro-job purple">
               <div className="intro-title2">With a passion to work with the
                  amazing minds present on the earth</div>
            </div>
         </div>
      </>
   )
}

export default Intro