import React from 'react';
import './contact.css';
import { HashLink as Link } from 'react-router-hash-link';

const Contact = () => {
const scrollTop = () => {
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
};

  return (
    <div className = 'analyzeweb__contact'>
      <div className = 'analyzeweb__contact-content'>
        <h2>haz de tu proyecto</h2>
        <h2>nuestra proxima</h2>
        <h2>obsesion</h2>
        <Link 
          to = '/ContactPg' 
          onClick={scrollTop}
          className='analyzeweb__contact-content_button' 
        >
          <button type='button' id='trigger' onClick={scrollTop}>
            <span>Hablemos con un cafe</span>
          </button>
        </Link>
      </div>
      <div className = 'analyzeweb__contact-graphics'>
        <div id='blob'></div>
        <div id='blob'></div>
        <div id='blob'></div>
      </div>
    </div>
  )
}

export default Contact