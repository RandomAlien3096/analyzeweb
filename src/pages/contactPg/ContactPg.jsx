import React from "react";
import './contactPg.css';
import { Footer, Navbar } from '../../components';
import emailjs from '@emailjs/browser';

function DatagovPg() {
    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;

    return (
        <div className = "analyzeweb__contactPg">
            <div className = "analyzeweb__contactPg-navbar">
                <Navbar />
            </div>
            <div className = "analyzeweb__contactPg-footer">
                <Footer />
            </div>
        </div>
    )
  }
  
  export default DatagovPg