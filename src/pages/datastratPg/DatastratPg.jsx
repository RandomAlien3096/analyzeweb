import React from 'react';
import './datastratPg.css';
import { Navbar, Footer } from '../../components';
import { AiOutlineCheck } from "react-icons/ai";
import { HashLink as Link } from 'react-router-hash-link';

function DatastratPg() {

  const scrollTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  const listCompleto = [
    'Arquitectura de servidores',
    'Optimizacion de base de datos',
    'Herramienta captacion datos',
    'Reportes Automaticos',
  ];
  return (
    <>
      <div className = 'analyzeweb__datastratPg-navbar'>
        <Navbar />
      </div>
      <div className = 'analyzeweb__datastratPg'>
        <div className = 'analyzeweb__datastratPg-header'>
          <h1>Estrategia de Informacion</h1>
          <h3>Capta, procesa y desarrolla un plan para tus datos</h3>
        </div>
        <div className = 'analyzeweb__datastratPg-content'>

          <div id = 'card'>
            <div id = 'card-top'>
              <h4>Completo</h4>
              <h5>Captacion Datos</h5>
              <h3>$ 439</h3>
              <p>Pago unico *</p>
              <Link to = '/ContactPg' onClick = {scrollTop}>
                <button type = 'button' onClick = {scrollTop}>
                  <span>Inicia Hoy</span>
                </button>
              </Link>
            </div>
            <hr></hr>
            <div id='card-description'>
              <h5>Plan incluye</h5>
              <ul style={{ listStyleType: 'none', padding: 0 }}>
                {listCompleto.map((item, index) => (
                  <li key={index} style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                    <AiOutlineCheck style={{ marginRight: '5px' }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>


        </div>
      </div>
      <div className = 'analyzeweb__datastratPg-footer'>
        <Footer />
      </div>
    </>
  )
}

export default DatastratPg