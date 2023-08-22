import React, { useState, useEffect, useRef } from 'react';
import './navbar.css';
import { HashLink as Link } from 'react-router-hash-link';
import logo_color from '../../rsrc/logo/logo_color.png';
import logo_dark from '../../rsrc/logo/logo_dark.png';
import { IoMdMenu, IoMdFingerPrint } from 'react-icons/io';
import { RiHome6Line } from 'react-icons/ri';
import { HiOutlineCubeTransparent, HiOutlinePaperAirplane } from 'react-icons/hi';
import { Bounce } from 'react-awesome-reveal';

import { useLocation } from 'react-router-dom';

const scrollToTop = () => {
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
};  

const Menu = () => (
  <>
    <Link to = '/' onClick={scrollToTop}>
      <RiHome6Line />
    </Link>
    <p>
      <Link to = '/' onClick={scrollToTop}>
        Inicio
      </Link>
    </p>
    <Link to = '/UsPg' onClick={scrollToTop}>
      <IoMdFingerPrint />
    </Link>
    <p>
      <Link to = '/UsPg' onClick={scrollToTop}>
        Nosotros
      </Link>
    </p>
    <Link to = '/ServicesPg' onClick={scrollToTop}>
      <HiOutlineCubeTransparent />
    </Link>
    <p>
      <Link to = '/ServicesPg' onClick={scrollToTop}>
        Servicios
      </Link>
    </p>
    <Link to = '/ContactPg' onClick={scrollToTop}>
      <HiOutlinePaperAirplane />
    </Link>
    <p>
      <Link to = '/ContactPg' onClick={scrollToTop}>
        Contacto
      </Link>  
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
  //change logo on scroll
  const [logo, setLogo] = useState(false);
  const location = useLocation();
  const changeLogo = () => {
  const locationArray = ["/ContactPg", "/UsPg", "/ServicesPg", "/DatagovPg", 
                         "/DatastratPg", "/DesarrolloPg", "/ModelosPg", 
                         "/OptimizacionPg", "/BiPg"]
    // console.log(window.scrollY)
    if(location.pathname === '/UsPg') {
      const vhEquivalent = 0.35 * window.innerHeight;
      if(window.scrollY >= vhEquivalent){
        setLogo(false)
      }
      else {
        setLogo(true)
      }
    }
    else if(locationArray.includes(location.pathname)){
      setLogo(false)
    }
    else {
      const vhEquivalent = 2 * window.innerHeight;
      if(window.scrollY >= vhEquivalent){
        setLogo(true)
      }
      else {
        setLogo(false)
      }
    }
    // console.log('vhEquivalent', vhEquivalent)
    // console.log('innerHeight', window.innerHeight)
    // console.log('totalHeight', window.document.body.offsetHeight)
    // const vhEquivalent = 2 * window.innerHeight;
    // if(window.scrollY >= vhEquivalent){
    //   setLogo(true)
    // }
    // else {
    //   setLogo(false)
    // }
  };

  window.addEventListener('scroll', changeLogo);

  return (
    <div className = 'analyzeweb__navbar'>
      <div className="analyzeweb__navbar-logo">
        {logo ? (
          <>
            <Link to = '/'onClick={scrollToTop}>
              <img 
                src={logo_dark} 
                alt="logo img for analyzeweb" 
                id="logo_dark"
                className={logo ? 'show' : ''} 
              />
            </Link>
            <p id='logoText'><Link to = '/'>analyzeweb</Link></p>
          </>
        ) : (
          <>
            <Link to = '/' onClick={scrollToTop}>
              <img 
                src={logo_color} 
                alt="logo for analyzeweb" 
                id="logo" 
                className={logo ? 'show' : ''}
              />
            </Link>
            <p id='logoText'><Link to = '/' onClick={scrollToTop}>analyzeweb</Link></p>
          </>
        )}
      </div>
      <div className = 'analyzeweb__navbar-links'>
        <Menu />
      </div>
      <div className = 'analyzeweb__navbar-menu2' ref = {menuRef}>
        <button className={logo ? 
          'analyzeweb__navbar-menu2_trigger icon_color' 
          : 'analyzeweb__navbar-menu2_trigger'} 
          onClick={() => setOpen(!open)}>
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