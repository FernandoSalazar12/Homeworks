import React, { useState, useCallback } from 'react';
import { Hijo } from './Hijo';

export const Padre = () => {
  const [valores, setValores] = useState([2, 4, 6, 8, 10]);
  const [total, setTotal] = useState(0);

  const incrementar = useCallback((indice) => {
    setTotal((anterior) => anterior + valores[indice]);
    setValores((prev) => {
      const nuevo = [...prev];
      nuevo[indice] = 0;
      return nuevo;
    });
  }, [valores]);

  return (
    <div>
      <h1>Total: {total}</h1>
      <hr />
      {valores.map((valor, i) => (
        <Hijo 
          key={i} 
          numero={valor} 
          incrementar={() => incrementar(i)} 
        />
      ))}
    </div>
  );
};
