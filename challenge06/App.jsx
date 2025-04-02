import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './Authcontext';
import { Navbar } from './NavBar';
import { Login } from './Login';
import { RutasPrivadas } from './Rutasprivadas';

const PaginaPublica = () => <h2>Página Pública</h2>;
const PaginaPrivada = () => <h2>Página Privada</h2>;

export const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<PaginaPublica />} />
          <Route path="/login" element={<Login />} />
          <Route element={<RutasPrivadas />}>
            <Route path="/privado" element={<PaginaPrivada />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
};
