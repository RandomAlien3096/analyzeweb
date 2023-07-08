import React, { useState, useEffect, useRef } from 'react';
import './navbar.css';

import logo_color from '../../rsrc/logo/logo_color.png';
import { IoMdMenu, IoMdFingerPrint } from 'react-icons/io';
import { RiHome6Line } from 'react-icons/ri';
import { HiOutlineCubeTransparent, HiOutlinePaperAirplane } from 'react-icons/hi';


const Menu = () => (
  <>
    <RiHome6Line />
    <p>
      Inicio
    </p>
    <IoMdFingerPrint />
    <p>
      Nosotros
    </p>
    <HiOutlineCubeTransparent />
    <p>
      Servicios
    </p>
    <HiOutlinePaperAirplane />
    <p>
      Contacto
    </p>
  </>
)


const Navbar = () => {
  const [ open, setOpen ] = useState(false);

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) =>{
      if(!menuRef.current.contains(e.target)){
        setOpen(false);
        console.log(menuRef.current);
      }
    };
    document.addEventListener("mousedown", handler);

    return() => {
      document.removeEventListener("mousedown", handler);
    }
  });


  return (
    <div className = 'analyzeweb__navbar'>
      <div className = 'analyzeweb__navbar-logo'> 
        <img src = {logo_color} alt='main logo' id='logo' />
        <p>analyzeweb</p>
      </div>
      <div className = 'analyzeweb__navbar-links'>
        <Menu />
      </div>
      <div className = 'analyzeweb__navbar-menu2' ref = {menuRef}>
        <button className='analyzeweb__navbar-menu2_trigger' onClick={() => setOpen(!open)}>
          <h3>Menu</h3><IoMdMenu />
        </button>
        <div className={`analyzeweb__navbar-menu2_dropdown ${open? 'active': 'inactive'}`}>
          <div className='analyzeweb__navbar-menu2_dropdown-links'>
            <Menu />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar