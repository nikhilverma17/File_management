// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage'
import LoginPage from './components/Login/LoginPage';
import PasswordResetPage from './components/Login/PasswordResetPage';
import TwoFactorAuthPage from './components/Login/TwoFactorAuthPage';
import DashboardPage from './components/Dashboard/Dashboard';

function App() {
  return (
    // Wrap your app inside a Router to provide routing functionality
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/reset-password" element={<PasswordResetPage />} />
        <Route path="/two-factor-auth" element={<TwoFactorAuthPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </Router>
  );
}

export default App;
