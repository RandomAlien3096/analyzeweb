import React from 'react'

import './app.css';
import { Navbar, Maps, ScrollToTop, Footer } from './components';
import { Contact, Services, Header } from './containers';

import { ParallaxProvider } from 'react-scroll-parallax';

const App = () => {
  return (
    <ParallaxProvider scrollAxis = 'horizontal'>
      <div className = 'App'>
        <div className = 'landing__pg'>
          <Navbar />
          <Header />
        </div>
        <Services />
        <Contact />
        <Footer />
      </div>
    </ParallaxProvider>
  )
}

export default App