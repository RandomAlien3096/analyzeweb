import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import './app.css';
import { Navbar, Maps, ScrollToTop, Footer } from './components';
import { Contact, Services, Header } from './containers';
import { ContactPg, DatagovPg, DatastratPg, 
        DesarrolloPg, ModelosPg, OptimizacionPg, 
        UsPg, ServicesPg } from './pages';

import { ParallaxProvider } from 'react-scroll-parallax';

const App = () => {
  // State to track if JavaScript is enabled or not
  const [isJavaScriptEnabled, setIsJavaScriptEnabled] = useState(true);

  // useEffect hook to check if JavaScript is enabled on mount
  useEffect(() => {
    setIsJavaScriptEnabled(true);
  }, []);

  return (
    <ParallaxProvider>
      {isJavaScriptEnabled ? (
        // Render the app content when JavaScript is enabled
        <Routes>
          <Route
            path="/"
            element={
              <div className="App">
                <div className="landing__pg">
                  <Navbar />
                  <Header />
                </div>
                <Services />
                <Contact />
                <Footer />
              </div>
            }
          />
          <Route path="/ContactPg" element={<ContactPg />} />
          <Route path="/UsPg" element={<UsPg />} />
          <Route path="/ServicesPg" element={<ServicesPg />} />
          <Route path="/DatagovPg" element={<DatagovPg />} />
          <Route path="/DatastratPg" element={<DatastratPg />} />
          <Route path="/DesarrolloPg" element={<DesarrolloPg />} />
          <Route path="/ModelosPg" element={<ModelosPg />} />
          <Route path="/OptimizacionPg" element={<OptimizacionPg />} />
        </Routes>
      ) : (
        // Fallback content for when JavaScript is disabled
        <div>
          <h1>You need to enable JavaScript to run this app.</h1>
          {/* You can provide more specific instructions or alternative content here */}
        </div>
      )}
    </ParallaxProvider>
  );
};

export default App;
