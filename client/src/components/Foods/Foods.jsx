import React from 'react';
import './Foods.css';


const Foods = () => {
  return (
    <section id='foods' className='container'>
      <div className="wrapper">
        <h4 className="subtitle">What we offer</h4>
        <h2 className="title">Best meal in the city</h2>
        <div className="foods">
          {foodTypes.map()}
        </div>
      </div>
    </section>
  )
}

export default Foods