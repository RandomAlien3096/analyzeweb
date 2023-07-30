import React from 'react';
import './services.css';
import pred from '../../rsrc/imgs/modelos_pred.jpg';
import des_web from '../../rsrc/imgs/desarrollo_web.jpg';
import opt from '../../rsrc/imgs/Optimizacion_bi.jpg';
import data_gov from '../../rsrc/imgs/data_gov.jpg';
import data_strat from '../../rsrc/imgs/data_strat.jpg';
import { Circle, CircleRings } from '../../rsrc/icons';

import { Parallax } from 'react-scroll-parallax';

const Services = () => {
  return (
    <div className = 'analyzeweb__services'>
      <div className = 'analyzeweb__services-overlap'>
        <Parallax
          translateY={[-90, 90]}
          translateX={[-50, 100]}>
            <Circle className = 'overlap_circle' />
        </Parallax>
        <Parallax
          translateY={[-90, 90]}
          translateX={[50, -100]}
          rotate={[-360, 0]}>
            <CircleRings className = 'overlap_circleRings' />
        </Parallax>
      </div>

      <div className = 'analyzeweb__services-title'>
        <h2>TU FUTURO A LA MEDIDA</h2>
      </div>
      <div className = 'analyzeweb__services-carousel'>
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
      </div>   

    </div>
  )
}

export default Services