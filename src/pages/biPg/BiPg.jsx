import React from 'react';
import './biPg.css';
import { Navbar, Footer } from '../../components';
import { AiOutlineCheck } from "react-icons/ai";
import { HashLink as Link } from 'react-router-hash-link';

function BiPg() {
    const scrollTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      };
    
      const listBasico = [
        'Modelos de gestion',
        'Dashboards Corporativos',
        'Plataformas Interactivas',
        'Tecnologias BI, SAP',
        'Analisis en nube',
      ];
    
      const listCompleto = [
        'Limpieza de datos',
        'Modelos de gestion',
        'Modelos predictivos',
        'Dashboards Corporativos',
        'Plataformas Interactivas',
        'Tecnologias BI, SAP',
        'Analisis en nube',
        'Tendencias de mercado interno',
      ];
    
      const listPremium = [
        'Limpieza de datos',
        'Modelos con Inteligencia Artificial',
        'Dashboards Corporativos',
        'Plataformas Interactivas',
        'Tecnologias BI, SAP',
        'Analisis en nube',
        'Tendencias de mercado interno',
        'Estrategias optimizacion recursos',
      ];

  return (
    <>
      <div className = 'analyzeweb__biPg-navbar'>
        <Navbar />
      </div>
      <div className = 'analyzeweb__biPg'>
        <div className = 'analyzeweb__biPg-header'>
          <h1>Inteligencia de Negocios</h1>
          <h3>Utiliza tu data acumulada en formas inimaginables</h3>
        </div>
        <div className = 'analyzeweb__biPg-content'>

          <div id = 'card'>
            <div id = 'card-top'>
              <h4>Basico</h4>
              <h5>Modelos Gestion</h5>
              <h3>$ 399</h3>
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
              <h5>Modelos Predictivos</h5>
              <h3>$ 499</h3>
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
              <h5>Inteligencia Artificial</h5>
              <h3>$ 699</h3>
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
      <div className = 'analyzeweb__biPg-footer'>
        <Footer />
      </div>
    </>
  )
}

export default BiPg