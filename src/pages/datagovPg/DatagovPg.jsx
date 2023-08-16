import React from 'react';
import './datagovPg.css';
import { Navbar, Footer } from '../../components';

function DatagovPg() {
  return (
    <>
      <div className = 'analyzeweb__datagovPg-navbar'>
        <Navbar />
      </div>
      <div className = 'analyzeweb__datagovPg'>
        <div className = 'analyzeweb__datagovPg-content'>

        </div>
      </div>
      <div className = 'analyzeweb__datagovPg-footer'>
        <Footer />
      </div>
    </>

  )
}

export default DatagovPg