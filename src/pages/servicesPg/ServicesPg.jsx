import React from 'react';
import './servicesPg.css';
import { Navbar, Footer } from '../../components';

function ServicesPg() {
  return (
    <> 
        <div className = 'analyzeweb__servicesPg-navbar'>
            <Navbar />
        </div>
        <div className = 'analyzeweb__servicesPg'>
            <h1>ServicesPg</h1>
        </div>
        <div className = 'analyzeweb__services-footer'>
            <Footer />
        </div>
    </>
  )
}

export default ServicesPg