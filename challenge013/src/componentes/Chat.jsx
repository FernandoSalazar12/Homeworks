"use client"

import { useState, useEffect, useRef } from "react"
import { baseDeDatos } from "../firebase/config"
import { ref, push, onValue, set, serverTimestamp } from "firebase/database"

const Chat = ({ usuario }) => {
  const [mensajes, establecerMensajes] = useState([])
  const [nuevoMensaje, establecerNuevoMensaje] = useState("")
  const finDeMensajesRef = useRef(null)

  useEffect(() => {
    const mensajesRef = ref(baseDeDatos, "mensajes")

    const desuscribir = onValue(mensajesRef, (snapshot) => {
      const datos = snapshot.val()
      if (datos) {
        const listaMensajes = Object.entries(datos).map(([id, valor]) => ({
          id,
          ...valor,
        }))

        listaMensajes.sort((a, b) => a.hora - b.hora)
        establecerMensajes(listaMensajes)
      } else {
        establecerMensajes([])
      }
    })

    return () => desuscribir()
  }, [])

  useEffect(() => {
    desplazarAlFinal()
  }, [mensajes])

  const desplazarAlFinal = () => {
    finDeMensajesRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const enviarMensaje = (e) => {
    e.preventDefault()

    if (nuevoMensaje.trim() === "") return

    const mensajesRef = ref(baseDeDatos, "mensajes")
    const nuevoMensajeRef = push(mensajesRef)

    set(nuevoMensajeRef, {
      texto: nuevoMensaje,
      autor: usuario.email,
      autorId: usuario.uid,
      hora: serverTimestamp(),
    })

    establecerNuevoMensaje("")
  }

  return (
    <div className="contenedor-chat">
      <div className="mensajes">
        {mensajes.map((mensaje) => (
          <div
            key={mensaje.id}
            className={`mensaje ${mensaje.autorId === usuario.uid ? "mensaje-propio" : "mensaje-otro"}`}
          >
            <div className="contenido-mensaje">
              <p className="texto-mensaje">{mensaje.texto}</p>
              <p className="autor-mensaje">{mensaje.autor}</p>
            </div>
          </div>
        ))}
        <div ref={finDeMensajesRef} />
      </div>
      <form onSubmit={enviarMensaje} className="formulario-mensaje">
        <input
          type="text"
          value={nuevoMensaje}
          onChange={(e) => establecerNuevoMensaje(e.target.value)}
          placeholder="Escribe un mensaje..."
          className="entrada-mensaje"
        />
        <button type="submit" className="boton-enviar">
          Enviar
        </button>
      </form>
    </div>
  )
}

export default Chat
