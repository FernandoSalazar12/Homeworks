import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { PaginaListaEnlazada } from './paginas/PaginaListaEnlazada';
import { PaginaListaDoble } from './paginas/PaginaListaDoble';

export const App = () => {
  return (
    <Router>
      <nav>
        <Link to="/canciones">Lista Enlazada (Canciones)</Link>
        <Link to="/historial">Lista Doble (Historial)</Link>
      </nav>
      <Routes>
        <Route path="/canciones" element={<PaginaListaEnlazada />} />
        <Route path="/historial" element={<PaginaListaDoble />} />
      </Routes>
    </Router>
  );
};
