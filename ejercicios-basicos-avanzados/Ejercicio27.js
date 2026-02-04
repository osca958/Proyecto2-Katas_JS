/*
Utiliza un bucle para encontrar la serie de dibujos animados más antigua en el array y guarda su nombre en una variable.

Imprime el nombre por consola.
*/

const cartoons = [
  { name: 'Bugs Bunny', debut: 1938 },
  { name: 'SpongeBob SquarePants', debut: 1999 },
  { name: 'Tom and Jerry', debut: 1940 },
  { name: 'Mickey Mouse', debut: 1928 },
  { name: 'Scooby-Doo', debut: 1969 },
  { name: 'The Flintstones', debut: 1960 },
  { name: 'Batman: The Animated Series', debut: 1992 },
  { name: 'The Simpsons', debut: 1989 },
  { name: 'Pokémon', debut: 1997 },
  { name: "Dexter's Laboratory", debut: 1996 }
];
let serieAntigua = ""; // creo dos variables para comparar el nombre y el año
let año = Infinity; // comparo con el infinito porque asi el primer año siempre será mas pequeño

for (const cartoon of cartoons) {
    if(cartoon.debut < año) {
        serieAntigua = cartoon.name; // si es mas pequeño actualizo nombre y año de debut
        año = cartoon.debut;
    }
}


console.log("La serie más antigua es ", serieAntigua, " y debutó en el año ", año);
