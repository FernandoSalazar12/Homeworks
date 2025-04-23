"use client"

import { useState } from "react"
import { autenticacion } from "../firebase/config"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth"

const Autenticacion = ({ usuarioActual, establecerUsuarioActual }) => {
  const [email, establecerEmail] = useState("")
  const [contrasena, establecerContrasena] = useState("")
  const [error, establecerError] = useState("")
  const [estaRegistrando, establecerEstaRegistrando] = useState(false)

  const manejarAutenticacion = async (e) => {
    e.preventDefault()
    establecerError("")

    try {
      if (estaRegistrando) {
        await createUserWithEmailAndPassword(autenticacion, email, contrasena)
      } else {
        await signInWithEmailAndPassword(autenticacion, email, contrasena)
      }
    } catch (error) {
      establecerError("Error: " + error.message)
    }
  }

  const manejarCerrarSesion = async () => {
    try {
      await signOut(autenticacion)
    } catch (error) {
      establecerError("Error al cerrar sesión: " + error.message)
    }
  }

  if (usuarioActual) {
    return (
      <div className="contenedor-autenticacion">
        <p>Conectado como: {usuarioActual.email}</p>
        <button onClick={manejarCerrarSesion} className="boton-cerrar-sesion">
          Cerrar Sesión
        </button>
      </div>
    )
  }

  return (
    <div className="contenedor-autenticacion">
      <h2>{estaRegistrando ? "Registrarse" : "Iniciar Sesión"}</h2>
      <form onSubmit={manejarAutenticacion}>
        <div className="campo-formulario">
          <label>Correo Electrónico:</label>
          <input type="email" value={email} onChange={(e) => establecerEmail(e.target.value)} required />
        </div>
        <div className="campo-formulario">
          <label>Contraseña:</label>
          <input type="password" value={contrasena} onChange={(e) => establecerContrasena(e.target.value)} required />
        </div>
        {error && <p className="mensaje-error">{error}</p>}
        <button type="submit" className="boton-principal">
          {estaRegistrando ? "Registrarse" : "Iniciar Sesión"}
        </button>
      </form>
      <button onClick={() => establecerEstaRegistrando(!estaRegistrando)} className="boton-secundario">
        {estaRegistrando ? "¿Ya tienes una cuenta? Inicia Sesión" : "¿No tienes una cuenta? Regístrate"}
      </button>
    </div>
  )
}

export default Autenticacion
