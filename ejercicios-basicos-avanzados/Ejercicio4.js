/*
Ejercicio 4

//Dado el siguiente array:
const aldeanos = ["Fibrilio", "Narciso", "Vacarena", "Tendo", "Nendo"];
//4.1 - Saca a "Tendo" por consola atacando su posición.
//4.2 - Coloca en el último lugar de este array a "Cervasio".
//4.3 - Cambia el primer elemento de este array por "Bambina".
//4.4 - Dale la vuelta a este array.
//4.5 - Cambia a "Narciso" por "Canela" haciendo uso de un método de array.
//4.6 - Imprime por consola el último elemento de este array sin atacar a la posición explicitamente
// Pista: puedes usar el método length con algo más para ello.
*/

const aldeanos = ["Fibrilio", "Narciso", "Vacarena", "Tendo", "Nendo"];
console.log("Array original:", aldeanos);

console.log("El aldeano en la posición 4 es:", aldeanos[3]);

aldeanos.push("Cervasio");
/* console.log(aldeanos); */

let primerNombre = aldeanos.shift();
console.log("Array eliminado el primer nombre", aldeanos);
aldeanos.unshift("Bambina");
console.log("Array añadiendo un nombre nuevo en la primera posicion:" ,aldeanos);
console.log("Array dado la vuelta:", aldeanos.reverse())


let indiceNar = aldeanos.indexOf("Narciso");
if (indiceNar != -1) {
    aldeanos.splice(indiceNar, 1, "Canela");
}
console.log("Array cambiando Narciso por Canela:", aldeanos);

console.log("El último elemento del Array es:", aldeanos[aldeanos.length -1]);