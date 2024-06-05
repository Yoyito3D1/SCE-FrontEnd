// HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HomePage.css';
import myImage from '../images/foto-logo-boxa.webp';

function GuantsTab() {
    return (
        <div className="homepage-container">
          <Link to="/">
            <img src={myImage} alt="Descripció de la imatge" className="homepage-image" />
          </Link>
          <div>
            <input type="text" placeholder="Què busques? Vendes? Bucals? Roba?" className="search-input" />
          </div>
          <div className="button-container">
            <div className="empty-space"></div> {/* Espai buit a l'esquerra */}
            <div>
              <Link to="/boxa">
                <button className="login-button">Boxa</button>
              </Link>
            </div>
            <div>
              <Link to="/sacs">
                <button className="login-button">Sacs</button>
              </Link>
            </div>
            <div>
              <Link to="/guants">
                <button className="login-button">Guants</button>
              </Link>
            </div>
            <div>
              <Link to="/altres">
                <button className="login-button">Altres</button>
              </Link>
            </div>
            <div className="empty-space"></div> {/* Espai buit a la dreta */}
          </div>
          <div className="cart-container">
            <Link to="/cart" className="cart-link">Les meves compres</Link> {/* Botó de Carrito */}
          </div>
          <div className="new-container">
            {Array(8).fill().map((_, i) => (
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

export default GuantsTab;