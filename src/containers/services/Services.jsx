import React from 'react';
import './services.css';
import { JackInTheBox } from 'react-awesome-reveal';
import { AiOutlineCheck } from "react-icons/ai";
import { HashLink as Link } from 'react-router-hash-link';

const Services = () => {

  const desarrolloWeb = [
    'Paquetes a tu medida',
    'Dominio web Propio',
    'Correos electronicos',
    'Posicionamiento SEO',
    'Analisis Estadistico Interno',
    'Tecnologias BI aplicadas',
  ];

  const inteligenciaNegocio = [
    'Modelos de gestion',
    'Modelos Predictivos',
    'Dahsboards Corporativos',
    'Tendencias de mercado Interno',
    'Plataformas interactivas',
    'Analisis en nube',
  ];

  const dataGov = [
    'Almacenamiento en nube',
    'Tablas relacionales',
    'Manual de mantenimiento',
    'Acceso informacion remota',
    'Procesamiento de datos',
    'Dashboard Interactivo de data',
    'Implementacion de Pipeline',
  ];

  const scrollTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <div className = 'analyzeweb__services'>
      <div className = 'analyzeweb__services-title'>
        <h2>TU FUTURO A LA MEDIDA</h2>
      </div>
      <div className = 'analyzeweb__services-content'>
        <div id = 'card'>
          <div id = 'card-top'>
            <h3>Desarrollo</h3>
            <h4>Paginas Web</h4> 
            <h5>Dede $199</h5>
            <Link to = '/DesarrolloPg' onClick = {scrollTop}>
              <button type = 'button' onClick = {scrollTop}>
                <span>Conoce mas</span>
              </button>
            </Link>
          </div>
          <hr></hr>
          <div id = 'card-description'>
            <h5>Planes incluyen</h5>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              {desarrolloWeb.map((item, index) => (
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
            <h3>Estudios</h3>
            <h4>Inteligencia de Negocios</h4> 
            <h5>Dede $399</h5>
            <Link to = '/biPg' onClick = {scrollTop}>
              <button type = 'button' onClick = {scrollTop}>
                <span>Conoce mas</span>
              </button>
            </Link>
          </div>
          <hr></hr>
          <div id = 'card-description'>
            <h5>Planes incluyen</h5>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              {inteligenciaNegocio.map((item, index) => (
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
            <h3>Big Data</h3>
            <h4>Gobernacion de Datos</h4> 
            <h5>Dede $149</h5>
            <Link to = '/DatagovPg' onClick = {scrollTop}>
              <button type = 'button' onClick = {scrollTop}>
                <span>Conoce mas</span>
              </button>
            </Link>
          </div>
          <hr></hr>
          <div id = 'card-description'>
            <h5>Planes incluyen</h5>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              {dataGov.map((item, index) => (
                <li key={index} style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                  <AiOutlineCheck style={{ marginRight: '5px' }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
      {/* <div className = 'analyzeweb__services-carousel'>
        <div id='card'>
          <div className='overlay_card' ></div>
          <img src = {pred} className='image_card' draggable = 'false' />
        </div>
        <div id = 'card'>
          <div className='overlay_card'></div>
          <img src = {des_web} className='image_card' draggable = 'false' />
          
        </div>
        <div id = 'card'>
          <div className='overlay_card'></div>
          <img src = {opt} className='image_card' draggable = 'false' />
        
        </div>
        <div id = 'card'>
          <div className='overlay_card'></div>
          <img src = {data_gov} className='image_card' draggable = 'false' />
        
        </div>
        <div id = 'card'>
          <div className='overlay_card'></div>
          <img src = {data_strat} className='image_card' draggable = 'false' />
          
        </div> 
      </div>    */}

    </div>
  )
}

export default Services