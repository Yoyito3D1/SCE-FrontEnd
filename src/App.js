// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import CartPage from './CartPage'; // Importa el component de la pàgina del carret de compra

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cart" element={<CartPage />} /> {/* Afegeix una nova ruta per a la pàgina del carret de compra */}
      </Routes>
    </Router>
  );
}

export default App;