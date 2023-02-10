import './Section.css'
import React, { useState } from 'react'
import video from '../video/video.mp4'
import InputShortener from './InputShortner';
import LinkResult from './LinkResult';


export default function Section() {
   const [inputValue, setInputValue] = useState("");

   return (
      <div className='container-main'>
         <div className='overlay'> </div>
         <div className='left'>
            <video src={video} autoPlay loop muted />
            <div className='content'>
               <div className='container'>
                  <InputShortener setInputValue={setInputValue} />
                  <LinkResult inputValue={inputValue} />
               </div>
            </div>
         </div>
      </div>
   )
}