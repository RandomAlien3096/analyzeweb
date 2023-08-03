import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './header.css';

import graphs from '../../rsrc/imgs/abstract_data.jpg';

const Header = () => {
  return (
    <div className = 'analyzeweb__header'>
      <div className = 'analyzeweb__header-content'>
        <h2>CONVERSACION</h2>
        <h2>MEDIANTE</h2>
        <h2>INMERSION</h2>
        <h2>DIGITAL</h2>
        <div className = 'analyzeweb__header-content_button'>
          <button id = 'trigger'>
            <Link to = '/UsPg'>
              <p>Descubre lo que hacemos</p>
            </Link>
          </button>
        </div>
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