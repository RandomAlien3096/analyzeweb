import React from 'react';
import './desarrolloPg.css';
import { Navbar, Footer } from '../../components';
import { AiOutlineCheck } from "react-icons/ai";


function DesarrolloPg() {

  const listBasico = [
    '1 pagina web landing',
    'Dominio web',
    '2 correos electronicos',
    'Posicionamiento SEO',
  ];

  const listCompleto = [
    '2 Paginas web landing',
    '3 Secciones por pagina',
    'Dominio web',
    '5 correos electronicos',
    'Posicionamiento SEO',
    'Analisis Estadistico Interno',
  ];

  const listPremium = [
    '3 Paginas web landing',
    '3 Secciones por pagina',
    'Dominio web',
    '5 correos electronicos/pagina',
    'Posicionamiento SEO',
    'Analisis estadistico interno',
    'Analisis perfiles clientes',
    'Tendencia mercado interna',
    'Tecnologias BI aplicadas',
  ];

  return (
    <>
      <div className = 'analyzeweb__desarrolloPg-navbar'>
        <Navbar />
      </div>
      <div className = 'analyzeweb__desarrolloPg'>
        <div className = 'analyzeweb__desarrolloPg-header'>
          <h1>Desarrollo Paginas Web</h1>
          <h3>Empieza tu huella en linea con nuestros planes</h3>
        </div>
        <div className = 'analyzeweb__desarrolloPg-content'>

          <div id = 'card'>
            <div id = 'card-top'>
              <h4>Basico</h4>
              <h5>1 Pagina Web</h5>
              <h3>$ 199</h3>
              <p>Pago unico *</p>
              <button>
                <span>Inicia Hoy</span>
              </button>
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
              <h5>2 Paginas Web</h5>
              <h3>$ 299</h3>
              <p>Pago unico *</p>
              <button>
                <span>Inicia Hoy</span>
              </button>
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
              <h5>3 Paginas Web</h5>
              <h3>$ 499</h3>
              <p>Pago unico *</p>
              <button>
                <span>Inicia Hoy</span>
              </button>
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
      <div className = 'analyzeweb__desarrolloPg-footer'>
        <Footer />
      </div>
    </>
  )
}

export default DesarrolloPg