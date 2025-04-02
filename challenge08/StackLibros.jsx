class PilaLibros {
    constructor() {
      this.pila = [];
    }
  
    agregarLibro(libro) {
      this.pila.push(libro);
    }
  
    obtenerLibros() {
      return [...this.pila].reverse();
    }
  }
  
  export const pilaLibros = new PilaLibros();
  
  pilaLibros.agregarLibro({ nombre: 'Usogui', isbn: '123456', autor: 'Antoine de Saint-Exupéry', editorial: 'Reynal & Hitchcock' });
  pilaLibros.agregarLibro({ nombre: 'Slam DUNK!!!', isbn: '789012', autor: 'George Orwell', editorial: 'Secker & Warburg' });
  