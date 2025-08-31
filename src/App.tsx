import React from 'react';
import { Outlet } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Navbar } from './components/nav/Navbar';
import { Footer } from './components/layout/Footer';

function App() {
  return (
    <HelmetProvider>
      <div className="min-h-screen bg-gradient-soft">
        <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;