import React from 'react';
import './services.css';

const Services = () => {
  return (
    <div className = 'analyzeweb__services'>
      <div className = 'analyzeweb__services-title'>
        <h2>TU FUTURO A LA MEDIDA</h2>
      </div>
      <div className = 'analyzeweb__services-carousel'>
        <div id = 'card'>
          <h4>Modelos Predictivos</h4>
        </div>
        <div id = 'card'>
          <h4>Desarrollo Web</h4>
        </div>
        <div id = 'card'>
          <h4>Optimizacion Financiera BI</h4>
        </div>
        <div id = 'card'>
          <h4>Gobernacion de Data</h4>
        </div>
        <div id = 'card'>
          <h4>Estrategias de Informacion</h4>
        </div>
      </div>   
    </div>
  )
}

export default Services