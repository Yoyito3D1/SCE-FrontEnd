import React, { useState } from 'react';
import './LoginPage.css'; // Importa els estils de App.css
import { Link } from 'react-router-dom';

function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = () => {
      // Aquí pots afegir la lògica per validar el log in, com enviar una sol·licitud al servidor
      console.log('Usuari:', username, 'Contrasenya:', password);
    };
  
    const handleForgotPassword = () => {
      // Aquí pots afegir la lògica per gestionar l'oblit de contrasenya
      console.log('He oblidat la contrasenya');
    };
  
    const handleUsernameChange = (e) => {
      setUsername(e.target.value);
    };
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };
  
    return (
      <div className="container">
        <div className="login-box">
          <h2>Login</h2>
          <div>
            <input
              type="text"
              value={username}
              onChange={handleUsernameChange}
              className={!username ? "empty" : ""}
              placeholder={!username ? "Usuari" : ""}
            />
          </div>
          <div>
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              className={!password ? "empty" : ""}
              placeholder={!password ? "Contrasenya" : ""}
            />
          </div>
          <div>
            <a href="#" onClick={handleForgotPassword} className="forgot-password-link">He oblidat la contrasenya</a>
          </div>
          <div>
            <button onClick={handleLogin}>Iniciar sessió</button>
          </div>
          <div>
            <Link to="/">Torna a la Home</Link>
          </div>
        </div>
      </div>
    );
}

export default LoginPage;
