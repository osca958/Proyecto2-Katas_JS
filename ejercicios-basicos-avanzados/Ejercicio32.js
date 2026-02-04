/*
Crea una función que reciba un array de objetos representando a varios miembros de los X-Men y su año de aparición.
La función debe retornar el miembro más antiguo.

Utiliza este array para probar tu función.
*/

const xMen = [
  { name: 'Wolverine', year: 1974 },
  { name: 'Cyclops', year: 1963 },
  { name: 'Storm', year: 1975 },
  { name: 'Phoenix', year: 1963 },
  { name: 'Beast', year: 1963 },
  { name: 'Gambit', year: 1990 },
  { name: 'Nightcrawler', year: 1975 },
  { name: 'Magneto', year: 1963 },
  { name: 'Professor X', year: 1963 },
  { name: 'Mystique', year: 1978 }
];

function findOldestXMen(xMen) {
    let masAntiguo = Infinity;
    let heroeMasAntiguo = "";
    for (const hero of xMen) {
        if(hero.year < masAntiguo) {
            masAntiguo = hero.year;
            heroeMasAntiguo = hero.name;
        }
    }
    return "El heroe más antiguo es: " + heroeMasAntiguo + " y apareció en el año: " + masAntiguo;
}

console.log(findOldestXMen(xMen))


// como hay varios personajes con el mismo año voy a hacer otra version

function encontrarMasAntiguos(xMen) {
    let heroesMasViejos = []; // creo una rray vacio
    let añoMasViejo = Infinity;
    for (const hero of xMen){
        if(hero.year < añoMasViejo) {// si el año es más pequño que el infinito
            añoMasViejo = hero.year; // convierto el año más antiguo en ese mismo
            heroesMasViejos = []; // vacio el array porque he encontrado un nuevo más antiguo que el anterior
            heroesMasViejos.push(hero.name); // añado al array ese nombre que ahora es el más antiguo
        }else if (hero.year === añoMasViejo) { // si los años coinciden
            heroesMasViejos.push(hero.name); // añado el nombre directamente
        }
    }
    return "Los heroes más antiguos son: " + heroesMasViejos.join(", ") + " y son del año: "+ añoMasViejo; 
    // hago el return separando por comas los elementos del array
}

console.log (encontrarMasAntiguos(xMen));