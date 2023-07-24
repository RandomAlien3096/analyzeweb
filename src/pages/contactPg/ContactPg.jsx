import React from "react";
import './contactPg.css';
import emailjs from '@emailjs/browser';

function DatagovPg() {
    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;

    return (
        <div>
            <h1>{serviceID}</h1>
        </div>
    )
  }
  
  export default DatagovPg