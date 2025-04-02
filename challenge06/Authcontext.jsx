// AuthContext.jsx
import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null);

  const iniciarSesion = (nombreUsuario) => {
    setUsuario({ nombre: nombreUsuario });
  };

  const cerrarSesion = () => {
    setUsuario(null);
  };

  return (
    <AuthContext.Provider value={{ usuario, iniciarSesion, cerrarSesion }}>
      {children}
    </AuthContext.Provider>
  );
};
