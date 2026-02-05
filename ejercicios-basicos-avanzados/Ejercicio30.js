/*
Dada una lista de canciones, clasifícalas en un objeto donde las claves sean los géneros y los valores sean arrays de canciones de ese género.

Utiliza bucles para estructurar este objeto e imprime el resultado por consola.
*/

const tracks = [
  { title: "Enter Sandman", genre: "Metal" },
  { title: "Back in Black", genre: "Rock" },
  { title: "Bohemian Rhapsody", genre: "Rock" },
  { title: "Blinding Lights", genre: "Pop" },
  { title: "Old Town Road", genre: "Country" },
  { title: "Smells Like Teen Spirit", genre: "Grunge" },
  { title: "Bad Guy", genre: "Pop" },
  { title: "Thunderstruck", genre: "Rock" },
  { title: "Hotel California", genre: "Rock" },
  { title: "Stairway to Heaven", genre: "Rock" },
];

const cancionesPorGenero = {}; // creo un objeto vacio
for (const track of tracks) { // recorro las canciones sin ordenar
  const genero = track.genre;
  if (!cancionesPorGenero[genero]) { // si el genero no existe
    cancionesPorGenero[genero] = []; // creo un array vacio dentro del objeto
  }
  cancionesPorGenero[genero].push(track); // añado la cancion a ese mismo genero
}

console.log("Cancione ordenadas por género:", cancionesPorGenero);
