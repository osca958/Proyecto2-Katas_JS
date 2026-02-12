/*
1.1 Basandote en el array siguiente, crea una lista ul > li
dinámicamente en el html que imprima cada uno de los paises.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
*/
const countries = ["Japón", "Nicaragua", "Suiza", "Australia", "Venezuela"];

const ul = document.createElement("ul");

for (const countrie of countries) {
  const li = document.createElement("li");
  li.textContent = countrie;
  ul.appendChild(li);
}

document.body.appendChild(ul);

//1.2 Elimina el elemento que tenga la clase .fn-remove-me.

const elemento = document.querySelector(".fn-remove-me");
elemento.remove();

/*1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos
en el div de html con el atributo data-function="printHere".
*/
const cars = ["Mazda 6", "Ford fiesta", "Audi A4", "Toyota corola"];

const listaCoches = document.createElement("ul");

for (const car of cars) {
  const item = document.createElement("li");
  item.textContent = car;
  listaCoches.appendChild(item);
}

document.querySelector('[data-function="printHere"]').appendChild(listaCoches);

/*1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento
h4 para el titulo y otro elemento img para la imagen.
*/
const paises = [
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" },
];

const listaPaises = document.createElement("div");

for (const pais of paises) {
  const divPaises = document.createElement("div");
  const h4 = document.createElement("h4");
  const img = document.createElement("img");
  const botonEliminar = document.createElement("button");
  h4.textContent = pais.title;
  img.src = pais.imgUrl;
  botonEliminar.textContent = "Elimina este mismo.";
  botonEliminar.addEventListener("click", () => divPaises.remove());
  divPaises.appendChild(h4);
  divPaises.appendChild(img);
  divPaises.appendChild(botonEliminar);

  listaPaises.appendChild(divPaises);
}

document.body.appendChild(listaPaises);

/* 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último
elemento de la serie de divs.
*/

const boton = document.createElement("button");
boton.textContent = "Eliminar último país";

boton.addEventListener("click", () => {
  listaPaises.lastChild.remove();
});
document.body.appendChild(boton);

/*
1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los
divs que elimine ese mismo elemento del html.
*/
// PONGO COMENTADO ESTE CÓDIGO PARA QUE SEA MÁS FÁCIL DAR CON ELLO Y LO INTRODUZCO DIRECTAMENTE EN EL EJERCICIO
/*const botonEliminar = document.createElement("button");
botonEliminar.textContent = "Elimina este elemento!";

botonEliminar.addEventListener("click", () => {
    divPaises.remove();
})

*/
