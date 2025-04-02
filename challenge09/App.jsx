import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { PantallaATM } from './paginas/PantallaATM';

export const App = () => {
  return (
    <Router>
      <nav>
        <Link to="/atm">Cola del ATM</Link>
      </nav>
      <Routes>
        <Route path="/atm" element={<PantallaATM />} />
      </Routes>
    </Router>
  );
};
