/*
Dado el siguiente código usa for...of para recorrer el array de películas, genera un nuevo array con las
categorías de las películas e imprime por consola el array de categorías.

Ten en cuenta que las categorías no tienen que repetirse.

Es decir, const categorias = ["comedia", "aventura", "acción", "thriller", "animación"]

Para filtrar las categorías puedes ayudarte de la función .includes().
*/

const movies = [
  {
    title: "Bracula: Condemor II",
    duration: 192,
    categories: ["comedia", "aventura"],
  },
  {
    title: "Spider-Man: No Way Home",
    duration: 122,
    categories: ["aventura", "acción"],
  },
  {
    title: "The Voices",
    duration: 223,
    categories: ["comedia", "thriller"],
  },
  {
    title: "Shrek",
    duration: 111,
    categories: ["comedia", "aventura", "animación"],
  },
];
let categorias = [];// creo un array vacio
for (const movie of movies) {// recorro todas las películas
  for (const categorie of movie.categories) { // recorro también todas las categorias dentro de las películas
    if (!categorias.includes(categorie)) {// si el categorias no tiene aún la categoría que estoy leyendo 
      categorias.push(categorie); // la incluyo en el array evitando duplicados
    }
  }
}
console.log(categorias);
