import React, { useState } from 'react';
import { ListaDoblementeEnlazada } from '../listas/ListaDoblementeEnlazada';

const historial = new ListaDoblementeEnlazada();
['Página A', 'Página B', 'Página C'].forEach(p => historial.agregar(p));

export const PaginaListaDoble = () => {
  const [paginaActual, setPaginaActual] = useState(historial.actual.valor);

  const irAdelante = () => {
    historial.adelante();
    setPaginaActual(historial.actual.valor);
  };

  const irAtras = () => {
    historial.atras();
    setPaginaActual(historial.actual.valor);
  };

  return (
    <div>
      <h2>Página actual: {paginaActual}</h2>
      <button onClick={irAtras}>Atrás</button>
      <button onClick={irAdelante}>Adelante</button>
    </div>
  );
};
