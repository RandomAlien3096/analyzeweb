import React, { useState, useEffect, useMemo } from 'react';
import './modelosPg.css';
import { Navbar, Footer } from '../../components';
import { AiOutlineCheck } from "react-icons/ai";
import { HashLink as Link } from 'react-router-hash-link';

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

function ModelosPg() {

  const deadline = new Date('September, 30, 2023').toString();

  const parsedDeadline = useMemo(() => Date.parse(deadline), [deadline]);
  const [time, setTime] = useState(parsedDeadline - Date.now());

  useEffect(() => {
      const interval = setInterval(
          () => setTime(parsedDeadline - Date.now()),
          1000,
      );

      return () => clearInterval(interval);
  }, []);


  return (
    <>
      <div className = 'analyzeweb__modelosPg-navbar'>
        <Navbar />
      </div>

      <div className='RO__ComingSoonP1'>
        <div className='RO__ComingSoon-content'>
          <p>Pagina esta bajo mantenimiento</p>
          <h1>Lanzando pronto este repertorio</h1>
        </div>
        <div className='RO__ComingSoon-timer'>
              {Object.entries({
                  Dias: time / DAY,
                  Horas: (time / HOUR) % 24,
                  Minutos: (time / MINUTE) % 60,
                  Segundos: (time / SECOND) % 60,
              }).map(([label, value]) => (
                  <div key={label} className="col-4">
                      <div className="RO__ComingSoon-timer_box">
                          <p>{`${Math.floor(value)}`.padStart(2, "0")}</p>
                          <span className="text">{label}</span>
                      </div>
                  </div>
              ))}
        </div>
        <div className='RO__ComingSoon-button'>
          <Link to='/'>
            <button type='button'>Regreso a Pagina Inicio</button>
          </Link>
        </div>
      </div>

      <div className = 'analyzeweb__modelosPg-footer'>
        <Footer />
      </div>
    </>

  )
}

export default ModelosPg