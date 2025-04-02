// Contador.jsx
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementar, decrementar, incrementarPor } from '../redux/store';

export const Contador = () => {
  const valor = useSelector((state) => state.contador.valor);
  const dispatch = useDispatch();
  const [incremento, setIncremento] = useState(0);

  return (
    <div>
      <h2>Contador: {valor}</h2>
      <button onClick={() => dispatch(incrementar())}>Incrementar</button>
      <button onClick={() => dispatch(decrementar())}>Decrementar</button>
      <input
        type="number"
        value={incremento}
        onChange={(e) => setIncremento(Number(e.target.value))}
      />
      <button onClick={() => dispatch(incrementarPor(incremento))}>
        Incrementar por valor
      </button>
    </div>
  );
};
    