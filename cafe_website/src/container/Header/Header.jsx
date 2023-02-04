import React from 'react';
import { images } from '../../constants'
import './Header.css';
import { SubHeading } from '../../components'

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className="app__wrapper_info">
      <SubHeading title="Chase The New Flavour" />
      <h1 className='app__header-h1'>The Key To Fine Dining</h1>
      <p className='p__opensans' style={{ margin: "2rem 0" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad mollitia quam ex in quibusdam commodi, illo iusto aut maiores obcaecati reprehenderit eligendi nulla blanditiis odio, aliquam voluptatum, amet a excepturi?
      </p>
      <button type="button" className='custom__button'>ExploreMenu</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="" />
    </div>
  </div>
);

export default Header;
