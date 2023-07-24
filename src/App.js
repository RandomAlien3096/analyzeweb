import React from 'react'
import { Routes, Route } from 'react-router-dom';

import './app.css';
import { Navbar, Maps, ScrollToTop, Footer } from './components';
import { Contact, Services, Header } from './containers';
import { ContactPg, DatagovPg, DatastratPg, 
        DesarrolloPg, ModelosPg, OptimizacionPg } from './pages';

import { ParallaxProvider } from 'react-scroll-parallax';

const App = () => {
  return (
    <ParallaxProvider>
      <Routes>
        <Route path = '/' element={
          <div className = 'App'>
            <div className = 'landing__pg'>
              <Navbar />
              <Header />
            </div>
            <Services />
            <Contact />
            <Footer />
          </div> } />
        <Route path = '/ContactPg' element = { <ContactPg /> } />
        <Route path = '/DatagovPg' element = { <DatagovPg /> } />
        <Route path = '/DatastratPg' element = { <DatastratPg /> } />
        <Route path = '/DesarrolloPg' element = { <DesarrolloPg /> } />
        <Route path = '/ModelosPg' element = { <ModelosPg /> } />
        <Route path = '/OptimizacionPg' element = { <OptimizacionPg /> } />
      </Routes>
    </ParallaxProvider>
  )
}

export default App