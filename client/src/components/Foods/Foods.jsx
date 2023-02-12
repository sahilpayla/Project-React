import React from 'react';
import { foodTypes } from '../../data/data';
import './Foods.css';
import { Link } from 'react-router-dom';

const Foods = () => {
  return (
    <section id='foods' className='foods-container'>
      <div className="foods-wrapper">
        <h4 className="foods-subtitle">What we offer</h4>
        <h2 className="foods-title">Best meal in the city</h2>
        <div className="foods-foods">
          {foodTypes.map((foodType) => (
            <Link to={`/foods/${foodType.name}`} key={foodType.id} className='foods-food'>
              <h4>{foodType.name}</h4>
              <div className="foods-imgContainer">
                <img src={foodType.img} alt="" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Foods