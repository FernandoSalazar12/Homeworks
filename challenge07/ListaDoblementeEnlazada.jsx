class NodoDoble {
    constructor(valor) {
      this.valor = valor;
      this.anterior = null;
      this.siguiente = null;
    }
  }
  
  export class ListaDoblementeEnlazada {
    constructor() {
      this.cabeza = null;
      this.actual = null;
    }
  
    agregar(valor) {
      const nuevoNodo = new NodoDoble(valor);
      if (!this.cabeza) {
        this.cabeza = nuevoNodo;
      } else {
        let temp = this.cabeza;
        while (temp.siguiente) {
          temp = temp.siguiente;
        }
        temp.siguiente = nuevoNodo;
        nuevoNodo.anterior = temp;
      }
      this.actual = nuevoNodo;
    }
  
    adelante() {
      if (this.actual.siguiente) {
        this.actual = this.actual.siguiente;
      }
    }
  
    atras() {
      if (this.actual.anterior) {
        this.actual = this.actual.anterior;
      }
    }
  }
  