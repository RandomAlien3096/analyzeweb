import React, { useEffect, useRef } from 'react';
import './servicesPg.css';
import { Link } from 'react-router-dom';
import { Navbar, Footer } from '../../components';


const rand = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

  const uniqueRand = (min, max, prev) => {
    let next = prev;
    while(prev === next) next = rand(min, max);
    
    return next;
  }
  const combinations = [
    { configuration: 1, roundness: 1 },
    { configuration: 1, roundness: 2 },
    { configuration: 1, roundness: 3 },
    { configuration: 2, roundness: 2 },
    { configuration: 2, roundness: 3 }
  ];

  let prev = 0;


const ServicesPg = () => {

  const handleClick = (event, shapeNum) => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    console.log(event.currentTarget);
    console.log('shape clicked: ' + shapeNum);
  };


  const wrapperRef = useRef();
  const interval = useRef();
  //const wrapper = document.getElementById("wrapper");

  useEffect(() => {
    let wrapper = wrapperRef.current;

    if (interval.current) {
      clearInterval(interval.current);
    }

    interval.current = setInterval(() => {
      const index = uniqueRand(0, combinations.length - 1, prev),
        combination = combinations[index];

      wrapper.dataset.configuration = combination.configuration;
      wrapper.dataset.roundness = combination.roundness;

      console.log({
        configuration: wrapper.dataset.configuration,
        roundness: wrapper.dataset.roundness
      });
      prev = index;
    }, 3000);
  }, []);

  return (
    <> 
        <div className = 'analyzeweb__servicesPg-navbar'>
            <Navbar />
        </div>
        <div className = 'analyzeweb__servicesPg'>
            
          <div 
            className = 'analyzeweb__servicesPg-content'
            data-roundness = '1'
            data-configuration = '1'
            id = 'wrapper'
            ref={wrapperRef}
          >

            <Link className='analyzeweb__servicesPg-content_shape' onClick={event => handleClick(event, '1')} to = '/datagovPg'>
              <div className='analyzeweb__servicesPg-content_shape'><h2>Gobernación de Datos</h2></div>
            </Link>

            <Link className='analyzeweb__servicesPg-content_shape' onClick={event => handleClick(event, '2')} to = '/DatastratPg'>
              <div className='analyzeweb__servicesPg-content_shape'><h2>Estrategia de Información</h2></div>
            </Link>
            
            <Link className='analyzeweb__servicesPg-content_shape' onClick={event => handleClick(event, '3')} to = '/desarrolloPg'>
              <div className='analyzeweb__servicesPg-content_shape'><h2>Desarrollo Web</h2></div>
            </Link>

            <Link className='analyzeweb__servicesPg-content_shape' onClick={event => handleClick(event, '4')} to = '/biPg'>
              <div className='analyzeweb__servicesPg-content_shape'><h2>Inteligencia de Negocios</h2></div>
            </Link>

            <Link className='analyzeweb__servicesPg-content_shape' onClick={event => handleClick(event, '5')} to = '/OptimizacionPg'>
              <div className='analyzeweb__servicesPg-content_shape'><h2>Optimización Economica</h2></div>
            </Link>

            <Link className='analyzeweb__servicesPg-content_shape' onClick={event => handleClick(event, '6')} to = '/ModelosPg'>
              <div className='analyzeweb__servicesPg-content_shape'><h2>Modelos Predictivos</h2></div>
            </Link>

            <Link className='analyzeweb__servicesPg-content_shape' onClick={event => handleClick(event, '7')} to = '/ContactPg'>
              <div className='analyzeweb__servicesPg-content_shape'><h2>Contáctanos</h2></div>
            </Link>
            

          </div>

        </div>
        <div className = 'analyzeweb__services-footer'>
            <Footer />
        </div>
    </>
  )
}

export default ServicesPg