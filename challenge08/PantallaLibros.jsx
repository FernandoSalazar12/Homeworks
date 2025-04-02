import React, { useState } from 'react';
import { pilaLibros } from '../datos/StackLibros';

export const PantallaLibros = () => {
  const [libros, setLibros] = useState(pilaLibros.obtenerLibros());
  const [nuevoLibro, setNuevoLibro] = useState({ nombre: '', isbn: '', autor: '', editorial: '' });

  const manejarCambio = (e) => {
    setNuevoLibro({ ...nuevoLibro, [e.target.name]: e.target.value });
  };

  const agregarLibro = (e) => {
    e.preventDefault();
    if (nuevoLibro.nombre && nuevoLibro.isbn && nuevoLibro.autor && nuevoLibro.editorial) {
      pilaLibros.agregarLibro(nuevoLibro);
      setLibros(pilaLibros.obtenerLibros());
      setNuevoLibro({ nombre: '', isbn: '', autor: '', editorial: '' });
    }
  };

  return (
    <div>
      <h2>Pila de Libros</h2>
      <form onSubmit={agregarLibro}>
        <input type="text" name="nombre" placeholder="Nombre" value={nuevoLibro.nombre} onChange={manejarCambio} required />
        <input type="text" name="isbn" placeholder="ISBN" value={nuevoLibro.isbn} onChange={manejarCambio} required />
        <input type="text" name="autor" placeholder="Autor" value={nuevoLibro.autor} onChange={manejarCambio} required />
        <input type="text" name="editorial" placeholder="Editorial" value={nuevoLibro.editorial} onChange={manejarCambio} required />
        <button type="submit">Agregar Libro</button>
      </form>
      <h3>Lista de Libros:</h3>
      <ul>
        {libros.map((libro, index) => (
          <li key={index}>
            <strong>{libro.nombre}</strong> - {libro.autor} ({libro.editorial}, ISBN: {libro.isbn})
          </li>
        ))}
      </ul>
    </div>
  );
};
