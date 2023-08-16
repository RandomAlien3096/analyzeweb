import React from 'react';
import './desarrolloPg.css';
import { Navbar, Footer } from '../../components';
import { AiOutlineCheck } from "react-icons/ai";


function DesarrolloPg() {

  const listItems = [
    '1 pagina web landing',
    'Dominio web',
    '2 correos electronicos',
    'Posicionamiento SEO',
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
              <h3>$199.00</h3>
              <button>
                <span>Inicia Hoy</span>
              </button>
            </div>
            <hr></hr>
            <div id='card-description'>
              <h5>Plan incluye</h5>

              <ul style={{ listStyleType: 'none', padding: 0 }}>
                {listItems.map((item, index) => (
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