/*
Crea una función llamada swap que reciba un array y dos parametros que sean indices del array.

La función deberá intercambiar la posición de los valores de los indices que hayamos enviado como parametro.
Es decir, intercambiar el lugar de un elemento por otro dentro del array.

Retorna el array resultante.
*/

function swap (array,number1, number2) {
   let indiceACambiar= array[number1];
   array[number1] = array[number2];
   array[number2]= indiceACambiar;
   return array
}
const numeros = [1,2,3,4,5,6,7,8,9]
console.log("Array original: ", numeros);
console.log(swap(numeros,2,5));