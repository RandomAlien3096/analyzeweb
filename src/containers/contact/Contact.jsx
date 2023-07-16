import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <div className = 'analyzeweb__contact'>
      <div className = 'analyzeweb__contact-content'>
        <h2>haz de tu proyecto</h2>
        <h2>nuestra proxima</h2>
        <h2>obsesion</h2>
        <div className = 'analyzeweb__contact-content_button'>
          <button id='trigger'>
            <span>Hablemos con un cafe</span>
          </button>
        </div>
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