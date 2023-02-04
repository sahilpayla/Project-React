import React from 'react';
import { images } from '../../constants';
import { SubHeading } from '../../components';
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="" />
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="Chef's Words" />
      <h1 className='headtext__cormorant'>What We Believe In</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="" />
          <p className="p__opensans">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ad accusamus pariatur 
          </p>
        </div>
        <p className="p__opensans">
         minima aspernatur minus excepturi. Neque odit fugit, unde sequi illo omnis, officiis quaerat libero doloribus impedit officia magni!
        </p>
      </div>

      <div className="app__chef-sign">
        <p >Kevin Lua</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="" />
      </div>
    </div>
  </div>
);

export default Chef;
