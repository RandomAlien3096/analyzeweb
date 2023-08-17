import React from 'react';
import './datagovPg.css';
import { Navbar, Footer } from '../../components';
import { AiOutlineCheck } from "react-icons/ai";
import { HashLink as Link } from 'react-router-hash-link';

function DatagovPg() {
  const scrollTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  const listBasico = [
    '100 Gb almacenamiento',
    'Tablas estaticas',
    'Servidores en nube',
  ];

  const listCompleto = [
    '300 Gb almacenamiento',
    'Tablas relacionales',
    'Servidor en nube',
    'Manual de mantenimiento',
    'Acceso informacion remota',
    'Procesamiento de datos',
  ];

  const listPremium = [
    '600 Gb',
    'Tablas relacionales',
    'Servidor en nube',
    'Manual de mantenimiento',
    'Acceso informacion remota',
    'Procesamiento de datos',
    'Dashboard Interactivo de data',
    'Implementacion de Pipeline',
  ];

  return (
    <>
      <div className = 'analyzeweb__datagovPg-navbar'>
        <Navbar />
      </div>
      <div className = 'analyzeweb__datagovPg'>
        <div className = 'analyzeweb__datagovPg-header'>
          <h1>Gobernacion de Datos</h1>
          <h3>Optimiza tus servidores y lleva tu data a las nubes</h3>
        </div>
        <div className = 'analyzeweb__datagovPg-content'>

          <div id = 'card'>
            <div id = 'card-top'>
              <h4>Basico</h4>
              <h5>100 Gb</h5>
              <h3>$ 149</h3>
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
                {listBasico.map((item, index) => (
                  <li key={index} style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                    <AiOutlineCheck style={{ marginRight: '5px' }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div id = 'card'>
            <div id = 'card-top'>
              <h4>Completo</h4>
              <h5>300 Gb</h5>
              <h3>$ 239</h3>
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

          <div id = 'card'>
            <div id = 'card-top'>
              <h4>Premium</h4>
              <h5>600 Gb</h5>
              <h3>$ 359</h3>
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
                {listPremium.map((item, index) => (
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
      <div className = 'analyzeweb__datagovPg-footer'>
        <Footer />
      </div>
    </>

  )
}

export default DatagovPg