// PaginaListaEnlazada.jsx
import React, { useState } from 'react';
import { ListaEnlazada } from '../listas/ListaEnlazada';

const listaCanciones = new ListaEnlazada();
['Canción 1', 'Canción 2', 'Canción 3'].forEach(c => listaCanciones.agregar(c));

export const PaginaListaEnlazada = () => {
  const [cancionActual, setCancionActual] = useState(listaCanciones.actual.valor);

  const siguienteCancion = () => {
    listaCanciones.siguiente();
    setCancionActual(listaCanciones.actual.valor);
  };

  return (
    <div>
      <h2>Reproduciendo: {cancionActual}</h2>
      <button onClick={siguienteCancion}>Siguiente</button>
    </div>
  );
};
