import React, { useState } from 'react';
import { colaATM } from '../datos/ColaPersonas';

export const PantallaATM = () => {
  const [personas, setPersonas] = useState(colaATM.obtenerPersonas());
  const [nuevaPersona, setNuevaPersona] = useState({ nombre: '', monto: '' });

  const manejarCambio = (e) => {
    setNuevaPersona({ ...nuevaPersona, [e.target.name]: e.target.value });
  };

  const agregarPersona = (e) => {
    e.preventDefault();
    if (nuevaPersona.nombre && nuevaPersona.monto) {
      colaATM.agregarPersona({ nombre: nuevaPersona.nombre, monto: parseFloat(nuevaPersona.monto) });
      setPersonas(colaATM.obtenerPersonas());
      setNuevaPersona({ nombre: '', monto: '' });
    }
  };

  const atenderPersona = () => {
    colaATM.atenderPersona();
    setPersonas(colaATM.obtenerPersonas());
  };

  return (
    <div>
      <h2>Cola del ATM</h2>
      <form onSubmit={agregarPersona}>
        <input type="text" name="nombre" placeholder="Nombre" value={nuevaPersona.nombre} onChange={manejarCambio} required />
        <input type="number" name="monto" placeholder="Monto a retirar" value={nuevaPersona.monto} onChange={manejarCambio} required />
        <button type="submit">Agregar a la cola</button>
      </form>
      <h3>Personas en la cola:</h3>
      <ul>
        {personas.map((persona, index) => (
          <li key={index}>
            <strong>{persona.nombre}</strong> - Retiro: ${persona.monto}
          </li>
        ))}
      </ul>
      {personas.length > 0 && <button onClick={atenderPersona}>Atender a la siguiente persona</button>}
    </div>
  );
};
