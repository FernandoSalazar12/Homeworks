"use client"

import { useState, useEffect } from "react"
import { autenticacion } from "./firebase/config"
import { onAuthStateChanged } from "firebase/auth"
import Autenticacion from "./componentes/Autenticacion"
import Chat from "./componentes/Chat"
import "./App.css"

const App = () => {
  const [usuarioActual, establecerUsuarioActual] = useState(null)
  const [cargando, establecerCargando] = useState(true)

  useEffect(() => {
    const desuscribir = onAuthStateChanged(autenticacion, (usuario) => {
      establecerUsuarioActual(usuario)
      establecerCargando(false)
    })

    return () => desuscribir()
  }, [])

  if (cargando) {
    return <div className="cargando">Cargando...</div>
  }

  return (
    <div className="app">
      <header className="cabecera">
        <h1>Chalenge 13</h1>
      </header>
      <main className="contenido-principal">
        <Autenticacion usuarioActual={usuarioActual} establecerUsuarioActual={establecerUsuarioActual} />
        {usuarioActual ? (
          <Chat usuario={usuarioActual} />
        ) : (
          <div>
          </div>
        )}
      </main>
    </div>
  )
}

export default App
