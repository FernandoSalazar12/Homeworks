// 1. push() y pop()
// Se utilizan para agregar y eliminar elementos al final del array.

// 🔹 push(elemento1, elemento2, ...)
// Añade uno o más elementos al final del array y devuelve la nueva longitud.
let numeros = [1, 2, 3];
numeros.push(4, 5);
console.log(numeros); // [1, 2, 3, 4, 5]

// 🔹 pop()
// Elimina el último elemento del array y lo devuelve.
let frutas = ["manzana", "banana", "pera"];
let ultimaFruta = frutas.pop();
console.log(frutas); // ["manzana", "banana"]
console.log(ultimaFruta); // "pera"

// 📌 2. unshift() y shift()
// Se utilizan para agregar y eliminar elementos al inicio del array.

// 🔹 unshift(elemento1, elemento2, ...)
// Añade uno o más elementos al inicio del array y devuelve la nueva longitud.
let colores = ["rojo", "verde"];
colores.unshift("azul", "amarillo");
console.log(colores); // ["azul", "amarillo", "rojo", "verde"]

// 🔹 shift()
// Elimina el primer elemento del array y lo devuelve.
let animales = ["perro", "gato", "elefante"];
let primerAnimal = animales.shift();
console.log(animales); // ["gato", "elefante"]
console.log(primerAnimal); // "perro"

// 📌 3. splice()
// Permite agregar, eliminar o reemplazar elementos en cualquier posición del array.

// 🔹 Eliminar elementos
let nombres = ["Juan", "Ana", "Pedro", "Carlos"];
nombres.splice(1, 2); // Desde la posición 1, elimina 2 elementos
console.log(nombres); // ["Juan", "Carlos"]

// 🔹 Agregar elementos
let numeros2 = [10, 20, 40];
numeros2.splice(2, 0, 30); // En la posición 2, agrega el número 30
console.log(numeros2); // [10, 20, 30, 40]

// 🔹 Reemplazar elementos
let dias = ["Lunes", "Martes", "Jueves"];
dias.splice(2, 1, "Miércoles"); // Reemplaza "Jueves" por "Miércoles"
console.log(dias); // ["Lunes", "Martes", "Miércoles"]

// 📌 4. slice()
// Extrae una porción del array sin modificar el original.
let letras = ["a", "b", "c", "d", "e"];
let subArray = letras.slice(1, 4); // Desde el índice 1 hasta 4 (sin incluirlo)
console.log(subArray); // ["b", "c", "d"]
console.log(letras); // ["a", "b", "c", "d", "e"] (se mantiene igual)

// 📌 5. concat()
// Combina dos o más arrays en uno nuevo.
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let resultado = arr1.concat(arr2);
console.log(resultado); // [1, 2, 3, 4, 5, 6]

// 📌 6. indexOf() y lastIndexOf()
// 🔹 indexOf(valor)
// Devuelve el índice de la primera aparición de un elemento o -1 si no existe.
let numeros3 = [10, 20, 30, 20];
console.log(numeros3.indexOf(20)); // 1
console.log(numeros3.indexOf(50)); // -1

// 🔹 lastIndexOf(valor)
// Devuelve el índice de la última aparición del elemento.
console.log(numeros3.lastIndexOf(20)); // 3

// 📌 7. includes()
// Verifica si un valor está presente en el array, devolviendo true o false.
let frutas2 = ["manzana", "pera", "uva"];
console.log(frutas2.includes("pera")); // true
console.log(frutas2.includes("mango")); // false

// 📌 8. find() y findIndex()
// 🔹 find(callback)
// Devuelve el primer elemento que cumple con la condición.
let edades = [15, 18, 21, 30];
let mayorDeEdad = edades.find(edad => edad >= 18);
console.log(mayorDeEdad); // 18

// 🔹 findIndex(callback)
// Devuelve el índice del primer elemento que cumple la condición.
let indice = edades.findIndex(edad => edad >= 18);
console.log(indice); // 1

// 📌 9. map()
// Crea un nuevo array aplicando una función a cada elemento.
let numeros4 = [1, 2, 3, 4];
let cuadrados = numeros4.map(num => num ** 2);
console.log(cuadrados); // [1, 4, 9, 16]

// 📌 10. filter()
// Devuelve un nuevo array con los elementos que cumplan la condición.
let edades2 = [12, 25, 17, 30, 40];
let adultos = edades2.filter(edad => edad >= 18);
console.log(adultos); // [25, 30, 40]

// 📌 11. reduce()
// Acumula valores en una sola salida.
let numeros5 = [1, 2, 3, 4];
let suma = numeros5.reduce((acumulador, num) => acumulador + num, 0);
console.log(suma); // 10

// 📌 12. sort()
// Ordena los elementos del array alfabéticamente por defecto.
let nombres2 = ["Carlos", "Ana", "Beatriz"];
nombres2.sort();
console.log(nombres2); // ["Ana", "Beatriz", "Carlos"]

// Para ordenar números, se debe proporcionar una función:
let numeros6 = [3, 1, 4, 2];
numeros6.sort((a, b) => a - b);
console.log(numeros6); // [1, 2, 3, 4]

// 📌 13. reverse()
// Invierte el orden de los elementos.
let letras2 = ["a", "b", "c", "d"];
letras2.reverse();
console.log(letras2); // ["d", "c", "b", "a"]

// 📌 14. join()
// Convierte un array en un string con un separador.
let palabras = ["Hola", "mundo"];
let frase = palabras.join(" ");
console.log(frase); // "Hola mundo"

// 📌 15. forEach()
// Ejecuta una función por cada elemento del array.
let numeros7 = [1, 2, 3];
numeros7.forEach(num => console.log(num * 2));
// 2
// 4
// 6

