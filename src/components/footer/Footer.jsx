import React from 'react';
import './footer.css';
import logo_dark from '../../rsrc/logo/logo_dark.png';

import { BsFacebook, BsTwitter, BsInstagram, 
        BsLinkedin, BsYoutube, BsWhatsapp } from 'react-icons/bs';

import { FaTiktok } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className = 'analyzeweb__footer'>
      <div className = 'analyzeweb__footer-content'>
        <div className = 'analyzeweb__footer-content_nosotros'>
          <h2>Sobre Nosotros</h2>
          <p>Somos la empresa que busca proveerte de contenido digital,
             optimizacion de finanzas y modelos estadisticos predictivos 
             al precio que mereces
          </p>
          <div className = 'analyzeweb__footer-content_nosotros-icons'>
            <BsFacebook />
            <BsTwitter />
            <BsInstagram />
            <BsLinkedin />
            <BsYoutube />
            <FaTiktok />
          </div>
        </div>
        <div className = 'analyzeweb__footer-content_servicio'>
          <h2>Servicio al Cliente</h2>
          <p>Politica de retorno</p>
          <p>atencioncliente@analyzeweb.com.gt</p>
          <div className = 'analyzeweb__footer-content_servicio-wp'>
            <BsWhatsapp />
            <p>(+502) 5533 - 6688</p>
          </div>
        </div>
        <div className = 'analyzeweb__footer-content_contacto'>
          <h2>Contactanos</h2>
          <p>Avenida La Reforma 3-87 Edificio Plaza Corporativa, 
            Zona 9, Ciudad de Guatemala</p>
          <p>ventas@analyzeweb.com.gt</p>
          <p>(+502) 5533 - 6688</p>
        </div>
      </div> 
      <div className = 'analyzeweb__footer-logo'>
        <img src={logo_dark} id = 'dark_logo' />
        <h2>analyzeweb</h2>
      </div>
    </div>
  )
}

export default Footer