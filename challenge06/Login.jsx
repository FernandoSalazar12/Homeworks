// Login.jsx
import React, { useState } from 'react';
import { useAuth } from './Authcontext';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const [nombre, setNombre] = useState('');
  const { iniciarSesion } = useAuth();
  const navegar = useNavigate();

  const manejarLogin = () => {
    if (nombre.trim()) {
      iniciarSesion(nombre);
      navegar('/privado');
    }
  };

  return (
    <div>
      <h2>Iniciar Sesión</h2>
      <input 
        type="text" 
        placeholder="Usuario" 
        value={nombre} 
        onChange={(e) => setNombre(e.target.value)} 
      />
      <button onClick={manejarLogin}>Entrar</button>
    </div>
  );
};
