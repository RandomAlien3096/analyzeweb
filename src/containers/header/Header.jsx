import React from 'react';
import './header.css';

import graphs from '../../rsrc/imgs/abstract_data.jpg';

const Header = () => {
  return (
    <div className = 'analyzeweb__header'>
      <div className = 'analyzeweb__header-slogan'>
        <h2>CONVERSACION</h2>
        <h2>MEDIANTE</h2>
        <h2>INMERSION</h2>
        <h2>DIGITAL</h2>
      </div>
      <div className = 'analyzeweb__header-button'>
        <button className='analyzeweb__header-button_trigger'>
          <p>Descubre lo que hacemos</p>
        </button>
      </div>
      <div className = 'analyzeweb__header-graphics'>
        <div id = 'blob'></div>
        <div id = 'blur'></div>
        <img src = {graphs} alt='graph deco' id='graphs' />
      </div>
    </div>
  )
}

export default Header