/*
    Crea una función llamada findArrayIndex que reciba como parametros un array de textos y un texto y devuelve
    la posición del array cuando el valor del array sea igual al valor del texto que enviaste como parámetro.

Haz varios ejemplos y compruébalos.
*/
function findArrayIndex(array, text) {
    for(let i = 0; i < array.length; i++) { // recorro el array
        if(array[i] === text) { // si lo que contiene la posicion es lo mismo que el texto introducido
            return i // devuelvo la posicion
        } 
    }
     return "No se ha encontrado."
}

const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];

console.log(findArrayIndex(mainCharacters, "Luke"));
console.log(findArrayIndex(mainCharacters, "Leia"));
console.log(findArrayIndex(mainCharacters, "Anakin"));

/*    Usando la función anterior benefíciate de poder conocer el indice del array para crear una función llamada removeItem que,
pasándole un array y un texto como parámetros (los mismos parámetros que en el anterior ejercicio), llame a la función anteriormente
creada findArrayIndex y obtén el indice para posteriormente usar la función de javascript .splice() para eliminar el elemento del array.

Es decir, tienes que crear una función que elimine elementos del array y retorne el nuevo array sin el elemento, apoyándote en findArrayIndex.

Finalmente retorna el array.

De nuevo haz varios ejemplos para practicar y comprueba que funcionan correctamente.

*/
function removeItem(array, text) {
    
    if (!array.includes(text)){ // si el array no incluye el texto introducido
        return array; // devuelvo el array tal cual
    } else {
        array.splice(findArrayIndex(array, text), 1) // sino elimino esa posicion
    }
    return array;
}

console.log(removeItem(mainCharacters,"Han Solo"));
console.log(removeItem(mainCharacters,"Luke"));
console.log(removeItem(mainCharacters,"Oscar"));



