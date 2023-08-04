import React from 'react';
import './usPg.css';
import { Navbar, Footer } from '../../components';
import img_bg from '../../rsrc/imgs/frontend_bg.jpg';

function UsPg() {
  return (
    <>  
        <div className = 'analyzeweb__usPg-navbar'>
            <Navbar />
        </div>
        <div className = 'analyzeweb__usPg'>
            <div className = 'analyzeweb__usPg-header'>
                <div className = 'analyzeweb__usPg-header_overlay'></div>
                <img src = {img_bg} alt = 'background image for header'
                    id = 'header_bg'  />
                <div className='analyzeweb__usPg-header_content'>
                    <h1>Sobre Nosotros</h1>
                    <p>
                        Somos la empresa que busca proveerte de contenido 
                        digital, optimizacion de finanzas y modelos 
                        estadisticos predictivos al precio que mereces
                    </p>
                </div>    
            </div>
            <div className = 'analyzeweb__usPg-content'>
                <div className = 'analyzeweb__usPg-content_space'>
                    <h3>Nosotros encontraremos tu espacio perfecto</h3>
                    <p>
                        Cuando decimos espacio, nos referimos al espacio 
                        en la web o en tus datos, donde podemos ayudarte a 
                        alcanzar el máximo potencial de tu negocio.
                    </p>
                    <p>
                        En AnalyzeWeb.tech, somos una empresa líder en el 
                        campo de la gobernanza de datos, desarrollo web 
                        de alta gama, modelos predictivos y optimización 
                        de modelos de negocio. Nuestro enfoque se centra 
                        en brindarte las soluciones perfectas para tu 
                        presencia en línea y el manejo eficiente de tus datos.
                    </p>
                </div>
                <div className = 'analyzeweb__usPg-content_mision'>
                    <h3>Como podemos ayudarte?</h3>
                    <p>
                        Nuestra misión es proporcionar a nuestros clientes las 
                        mejores soluciones en términos de gobernanza de datos, 
                        desarrollo web, modelos predictivos y optimización de 
                        modelos de negocio. Trabajamos en estrecha colaboración 
                        con nuestros clientes para entender sus necesidades 
                        específicas y ofrecerles herramientas y soluciones a la 
                        medida. Nuestro enfoque en la excelencia técnica y la 
                        comprensión profunda de los objetivos de nuestros clientes 
                        nos permite lograr resultados sobresalientes y contribuir 
                        al éxito de sus empresas.
                    </p>
                </div>
                <div className = 'analyzeweb__usPg-content_promise'>
                    <h3>Nuestra promesa hacia ti</h3>
                    <p>
                        En AnalyzeWeb.tech, estamos comprometidos con la innovación, 
                        la calidad y la satisfacción del cliente. Valoramos la ética 
                        en todos nuestros procesos y buscamos siempre superar las 
                        expectativas de nuestros clientes. Nuestro equipo altamente 
                        capacitado y experimentado está listo para enfrentar cualquier 
                        desafío y ayudarte a impulsar tu negocio hacia el éxito.
                    </p>
                </div>
            </div>
        </div>
        <div className = 'analyzeweb__usPg-footer'>
            <Footer />
        </div>
    </>
  )
}

export default UsPg