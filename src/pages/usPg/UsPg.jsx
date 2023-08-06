import React from 'react';
import './usPg.css';
import { Navbar, Footer } from '../../components';
import img_bg from '../../rsrc/imgs/frontend_bg.jpg';
import graph_web from '../../rsrc/imgs/us_graph.png';
import graph_flow from '../../rsrc/imgs/datagov_flow.png';

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
                {/* ----------------------------------------------------------- */}
                <div className = 'analyzeweb__usPg-content_space'>
                    <div className = 'analyzeweb__usPg-content_space-text'>
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
                    <div className = 'analyzeweb__usPg-content_space-graph'>
                        <div id = 'graph_text'>
                            <h3>20 +</h3>
                            <p>Proyectos Exitosos</p>
                        </div>
                        <img 
                            src = {graph_web} 
                            id = 'space_graph'
                            alt = 'analytics of website engagement' 
                        />
                    </div>
                </div>
                {/* ----------------------------------------------------------- */}
                <div className = 'analyzeweb__usPg-content_mision'>
                    <div className = 'analyzeweb__usPg-content_mision-graph'>
                        <div id = 'graph_text'>
                            <h3>Arma tu paquete</h3>
                        </div>
                        <div id='graph_tiles'>
                            <div id='tile'>
                                <h4>Web</h4>
                                <p>1 - 7 - correo</p>
                            </div>
                            <div id='tile'>
                                <h4>Analitica</h4>
                                <p>mes - ct/act - 3</p>
                            </div>
                            <div id='tile'>
                                <h4>Almacen</h4>
                                <p>100 Gb - Estatico</p>
                            </div>
                            <div id='tile'>
                                <h4>+</h4>
                            </div>
                        </div>
                    </div>
                    <div className = 'analyzeweb__usPg-content_mision-text'>
                        <h3>¿Como podemos ayudarte?</h3>
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
                </div>
                {/* ----------------------------------------------------------- */}
                <div className = 'analyzeweb__usPg-content_promise'>
                    <div className = 'analyzeweb__usPg-content_promise-text'>
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
                    <div className = 'analyzeweb__usPg-content_promise-graph'>
                        <div id = 'promise_text'>
                            <h3>4 +</h3>
                            <p>Años de Experiencia</p>
                        </div>
                        <img 
                            src = {graph_flow} 
                            id = 'promise_graph'
                            alt = 'data goverment flow and pipeline'
                        />
                    </div>
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