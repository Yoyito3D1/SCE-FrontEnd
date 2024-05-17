// HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // Importa el fitxer CSS
import myImage from './images/foto-logo-boxa.webp';

function HomePage() {
  return (
    <div className="homepage-container">
      <img src={myImage} alt="Descripció de la imatge" className="homepage-image" /> {/* Afegeix la imatge */}
      <div>
        <input type="text" placeholder="Què busques? Vendes? Bucals? Roba?" className="search-input" />
      </div>
      <div className="button-container">
        <div className="empty-space"></div> {/* Espai buit a l'esquerra */}
        <div>
          <button className="login-button">Boxa</button>
        </div>
        <div>
          <button className="login-button">Sacs</button>
        </div>
        <div>
          <button className="login-button">Guants</button>
        </div>
        <div>
          <button className="login-button">Altres</button>
        </div>
        <div className="empty-space"></div> {/* Espai buit a la dreta */}
      </div>
      <div className="cart-container">
        <Link to="/cart" className="cart-link">Les meves compres</Link> {/* Botó de Carrito */}
      </div>
      <div className="new-container">
        {Array(16).fill().map((_, i) => (
          <button key={i} className="new-element">
            <div className="square"></div>
          </button>
        ))}
      </div>
      <div className="login-button-container">
        <Link to="/help">
          <button className="login-button">Ajuda</button>
        </Link>
        <span className="separator"> |</span> {/* Afegim el símbol "|" */}
        <Link to="/login">
          <button className="login-button">Iniciar Sessió</button>
        </Link>
        <span className="separator"> |</span> {/* Afegim el símbol "|" */}
        <Link to="/login">
          <button className="register-button">Registrar-se</button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;