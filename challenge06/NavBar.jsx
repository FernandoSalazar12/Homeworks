import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './Authcontext';

export const Navbar = () => {
  const { usuario, cerrarSesion } = useAuth();

  return (
    <nav>
      <Link to="/">Inicio</Link>
      {usuario ? (
        <>
          <span>Bienvenido, {usuario.nombre}</span>
          <button onClick={cerrarSesion}>Cerrar Sesión</button>
        </>
      ) : (
        <Link to="/login">Iniciar Sesión</Link>
      )}
    </nav>
  );
};
