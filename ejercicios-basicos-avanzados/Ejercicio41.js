/*
Crea una función llamada rollDice() que reciba como parámetro el numero de caras que queramos que tenga el dado que deberá
simular el codigo dentro de la función.

Que la función use el parametro para simular una tirada de dado y retornar el resultado.

Si no se te ocurre como hacer un numero aleatorio no te preocupes. Busca información sobre la función de JavaScript Math.random()
*/

function rollDice(number) {
    return Math.floor(Math.random()*number) + 1 // numero entre 0 y 1 multiplicado por el numero de caras redondeado hacia abajo y multiplicado por 1 para asegurar que nunca sea 0
}

console.log("Dado de 6 caras" ,rollDice(6));
console.log("Dado de 10 caras:", rollDice(10));