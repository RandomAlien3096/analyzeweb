import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './header.css';
import { Slide } from 'react-awesome-reveal';

import graphs from '../../rsrc/imgs/abstract_data.jpg';

const Header = () => {

  const scrollTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <div className = 'analyzeweb__header'>
      <div id = 'blur'></div>
      <div className = 'analyzeweb__header-content'>
        <Slide cascade damping={0.3}>
          <h2>CONVERSACION</h2>
          <h2>MEDIANTE</h2>
          <h2>INMERSION</h2>
          <h2>DIGITAL</h2>
          <Link 
            to = '/UsPg' 
            className = 'analyzeweb__header-content_button'
            onClick={scrollTop}
          >
            <button type ='button' id = 'trigger' >
              <p>Descubre lo que hacemos</p>
            </button>
          </Link>
        </Slide>
      </div>
      <div className = 'analyzeweb__header-graphics'>
        <div className = 'analyzeweb__header-graphics_blob'>
          <div id = 'blob'></div>
          <div id = 'blob'></div>
          <div id = 'blob'></div>
        </div> 
        <img src = {graphs} alt='graph deco' id='graphs' />
      </div>
    </div>
  )
}

export default Header