/*
Dado el siguiente código usa for...of y for...in para hacer la media del volumen de todos los sonidos favoritos que tienen los usuarios.

Es decir, la media de volumen de todos los volumenes juntos.
*/

const users = [
  {
    name: "Alberto",
    favoritesSounds: {
      waves: { format: "mp3", volume: 50 },
      rain: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Antonio",
    favoritesSounds: {
      waves: { format: "mp3", volume: 30 },
      shower: { format: "ogg", volume: 55 },
      train: { format: "mp3", volume: 60 },
    },
  },
  {
    name: "Santiago",
    favoritesSounds: {
      shower: { format: "mp3", volume: 50 },
      train: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Laura",
    favoritesSounds: {
      waves: { format: "mp3", volume: 67 },
      wind: { format: "ogg", volume: 35 },
      firecamp: { format: "mp3", volume: 60 },
    },
  },
];

let sumaVolumen = 0;// creo dos variables vacias para acumular la cantidad total y el numero de volumenes
let contador = 0;

for (const user of users) { // recorro cada user del array users
    for (const sonido in user.favoritesSounds) { // recorro los sonidos dentro de cada sonidos favoritos de los usuarios
        const volumen = user.favoritesSounds[sonido].volume; // creo una variable volumen accediendo al volumen en cada vuelta
        sumaVolumen += volumen; // acumulo la cantidad de volumen
        contador ++; // sumo 1 en cada vuelta
    }
}
let media = sumaVolumen / contador; // hago la media

console.log(media);