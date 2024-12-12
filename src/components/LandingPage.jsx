// LandingPage.js
import React, { useState } from 'react';
import Navbar from './LandingPage/Navbar';
import Hero from './LandingPage/Hero';
import Features from './LandingPage/Features';
import Pricing from './LandingPage/Pricing';
import Footer from './LandingPage/Footer';

function LandingPage() {
  const [theme, setTheme] = useState('light'); // Manage theme state (light/dark)

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark');
  };

  const handleGetStartedClick = () => {
    // Handle Get Started click
  };

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Hero handleGetStartedClick={handleGetStartedClick} />
      <Features />
      <Pricing />
      <Footer />
    </div>
  );
}

export default LandingPage;
