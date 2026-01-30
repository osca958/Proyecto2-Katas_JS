/*
Contador de repeticiones: Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.

Por ejemplo, que devuelva: code:4, repeat: 1, eat: 1,...

Podéis conformar el formato que queráis para la devolución del resultado siempre y cuando sea claro.

Puedes usar este array para probar tu función:
*/

const words = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code'
];
function repeatCounter(list) {
  let contador = {};// creo un objeto para guardar clave valor donde la clave es la palabra y el valor el número de veces que se repite

  for ( let i = 0; i < list.length ; i++) { // recorro el array
    if (!contador[list[i]]) { // si la palabra no está en el objeto la creo con valor 1
        contador[list[i]] = 1;
    } else {
        contador[list[i]]++; // si está suma 1 al contador de esa palabra
    }
  }
  return contador;
}

console.log(repeatCounter(words));