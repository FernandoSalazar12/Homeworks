class ColaPersonas {
    constructor() {
      this.cola = [];
    }
  
    agregarPersona(persona) {
      this.cola.push(persona);
    }
  
    obtenerPersonas() {
      return [...this.cola];
    }
  
    atenderPersona() {
      return this.cola.shift(); // Elimina a la primera persona de la cola
    }
  }
  
  export const colaATM = new ColaPersonas();
  
  // Datos de prueba
  colaATM.agregarPersona({ nombre: 'Juan Pérez', monto: 100 });
  colaATM.agregarPersona({ nombre: 'Ana Gómez', monto: 200 });
  colaATM.agregarPersona({ nombre: 'Carlos López', monto: 50 });
  