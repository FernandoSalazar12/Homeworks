// Pila.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { agregarPila, quitarPila } from '../redux/store';

export const Pila = () => {
  const pila = useSelector((state) => state.pila);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Pila</h2>
      <button onClick={() => dispatch(agregarPila(`Elemento ${pila.length + 1}`))}>
        Agregar a la pila
      </button>
      <button onClick={() => dispatch(quitarPila())} disabled={pila.length === 0}>
        Quitar de la pila
      </button>
      <ul>
        {pila.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
