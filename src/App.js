// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import CartPage from './pages/CartPage';
import HelpPage from './pages/HelpPage';
import BoxingTab from './pages/BoxingTab';
import SacsTab from './pages/SacsTab';
import GuantsTab from './pages/GuantsTab';
import AltresTab from './pages/AltresTab';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="/boxa" element={<BoxingTab />} />
        <Route path="/sacs" element={<SacsTab />} />
        <Route path="/guants" element={<GuantsTab />} />
        <Route path="/altres" element={<AltresTab />} />
      </Routes>
    </Router>
  );
}

export default App;