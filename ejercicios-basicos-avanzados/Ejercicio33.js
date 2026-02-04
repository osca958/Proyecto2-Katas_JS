/*
Desarrolla una función que reciba un país por parámetro y devuelva su capital.

Utiliza un objeto para almacenar los países y sus capitales.

La función debe manejar casos en los que el país no esté en la lista, devolviendo un mensaje adecuado.
*/

const capitals = {
  Spain: 'Madrid',
  France: 'Paris',
  Italy: 'Rome',
  Germany: 'Berlin',
  Portugal: 'Lisbon',
  Poland: 'Warsaw',
  Greece: 'Athens',
  Austria: 'Vienna',
  Hungary: 'Budapest',
  Ireland: 'Dublin'
};

function getCapital(country) {
  const capital = capitals[country]; // creo una constante llamada capital que es lo que hay en la posicion countre de el objeto
  if (capital) { // si existe
    return capital; // devuelvo la capital de ee pais
  } else {
    return "Ese país no está en la lista";
  }
}

console.log(getCapital("Spain"));
console.log(getCapital("Ireland"));
console.log(getCapital("Argentina"));