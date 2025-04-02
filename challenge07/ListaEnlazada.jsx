// ListaEnlazada.js
class Nodo {
    constructor(valor) {
      this.valor = valor;
      this.siguiente = null;
    }
  }
  
  export class ListaEnlazada {
    constructor() {
      this.cabeza = null;
      this.actual = null;
    }
  
    agregar(valor) {
      const nuevoNodo = new Nodo(valor);
      if (!this.cabeza) {
        this.cabeza = nuevoNodo;
        this.actual = this.cabeza;
      } else {
        let temp = this.cabeza;
        while (temp.siguiente) {
          temp = temp.siguiente;
        }
        temp.siguiente = nuevoNodo;
      }
    }
  
    siguiente() {
      if (this.actual && this.actual.siguiente) {
        this.actual = this.actual.siguiente;
      }
    }
  }
  