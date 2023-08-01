import React, { useState, useRef } from "react";
import './contactPg.css';
import { Footer, Navbar } from '../../components';
import emailjs from '@emailjs/browser';

function DatagovPg() {
    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_ebesa9d', 
                         'template_846mobc', 
                         form.current, 
                         '1oviDjIxcKzRsgPPd')
 
          .then((result) => {
              console.log(result.text);
              console.log("message sent");
              alert("Message sent succesfully");
              window.location.reload(false);
          }, (error) => {
              console.log(error.text);
              alert("Oops, something went wrong");
          });
      };

    return (
        <div className = "analyzeweb__contactPg">
            <div className = "analyzeweb__contactPg-navbar">
                <Navbar />
            </div>
            <div className = "analyzeweb__contactPg-content">
                <div className = "analyzeweb__contactPg-content_title">
                    <h1>Hablemos con un cafe.</h1>
                    <h1>Platicanos sobre tu proyecto</h1>
                    <h4>Creemos algo juntos</h4>
                </div>
            </div>
            <div className = "analyzeweb__contactPg-form">
                <div className = "analyzeweb__contactPg-form_title">
                    <h2>Dinos, como podemos ayudar?</h2>
                </div>
                <form 
                    className = "analyzeweb__contactPg-form_form" 
                    ref={form} 
                    onSubmit={sendEmail}>
                    <div id = "name_title">
                        <h5>Nombre Completo</h5>
                    </div>
                    <input 
                        id = "name_input" 
                        type = 'text' 
                        name = 'name_input' required 
                    />
                </form>
            </div>
            <div className = "analyzeweb__contactPg-footer">
                <Footer />
            </div>
        </div>
    )
  }
  
  export default DatagovPg