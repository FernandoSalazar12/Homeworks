// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { PantallaLibros } from './paginas/PantallaLibros';

export const App = () => {
  return (
    <Router>
      <nav>
        <Link to="/libros">Pila de Libros</Link>
      </nav>
      <Routes>
        <Route path="/libros" element={<PantallaLibros />} />
      </Routes>
    </Router>
  );
};
