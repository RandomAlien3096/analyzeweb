import React from 'react';
import './usPg.css';
import { Navbar, Footer } from '../../components';

function UsPg() {
  return (
    <>  
        <div className = 'analyzeweb__usPg-navbar'>
            <Navbar />
        </div>
        <div className = 'analyzeweb__usPg'>
            <h1>UsPg</h1>
        </div>
        <div className = 'analyzeweb__usPg-footer'>
            <Footer />
        </div>
    </>
  )
}

export default UsPg