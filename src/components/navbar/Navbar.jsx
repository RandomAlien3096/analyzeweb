import React from 'react';
import './navbar.css';
import logo_color from '../../rsrc/logo/logo_color.png';


const Menu = () => (
  <>
    <p>
      Inicio
    </p>
    <p>
      Nosotros
    </p>
    <p>
      Servicios
    </p>
    <p>
      Contacto
    </p>
  </>
)


const Navbar = () => {
  return (
    <div className = 'analyzeweb__navbar'>
      <div className = 'analyzeweb__navbar-logo'> 
        <img src = {logo_color} alt='main logo' id='logo' />
        <p>analyzeweb</p>
      </div>
      <div className = 'analyzeweb__navbar-links'>
        <Menu />
      </div>
    </div>
  )
}

export default Navbar