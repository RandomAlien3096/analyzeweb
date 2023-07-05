import React from 'react'

import './app.css';
import { Navbar, Maps, ScrollToTop, Footer } from './components';
import { Contact, Services, Header } from './containers';

const App = () => {
  return (
    <div className = 'App'>
      <div className = 'landing__pg'>
        <Navbar />
        <Header />
      </div>
      <Services />
      <Contact />
      <Footer />
    </div>
  )
}

export default App