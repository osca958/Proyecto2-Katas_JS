/* Completa esta función para que, al recibir dos números por argumento, te devuelva por consola el más alto de los dos. */

function greaterNumber(numberOne , numberTwo) {
  if (numberOne > numberTwo) {
    return numberOne
  } else if (numberOne < numberTwo) {
  return numberTwo
  }
  return "Los números son iguales."
}
console.log("EL número mayor es:",greaterNumber(30,10));
console.log("El número nayor es:",greaterNumber(20,40));
console.log(greaterNumber(10,10));