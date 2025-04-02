// App.jsx
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Contador } from './componentes/Contador';
import { Pila } from './componentes/Pila';

export const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <nav>
          <Link to="/contador">Contador</Link>
          <Link to="/pila">Pila</Link>
        </nav>
        <Routes>
          <Route path="/contador" element={<Contador />} />
          <Route path="/pila" element={<Pila />} />
        </Routes>
      </Router>
    </Provider>
  );
};
