import React, { useState } from 'react';

const Contador = ({ valorPorDefecto }) => {
  const [contador, setContador] = useState(valorPorDefecto);
  const manejarRestar = () => setContador(contador - 1);
  const manejarReiniciar = () => setContador(valorPorDefecto);
  return (
    <div>
      <p>{contador}</p>
      <button onClick={manejarRestar}>Restar</button>
      <button onClick={manejarReiniciar}>Reiniciar</button>
    </div>
  );
};

export default Contador;
