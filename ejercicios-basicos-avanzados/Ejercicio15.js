/*Includes: Haz un bucle y muestra por consola todos aquellos valores del array que incluyan la palabra "Camiseta".

Usa la función .includes de javascript.

*/
const products = [
  "Camiseta de Metallica",
  "Pantalón vaquero",
  "Gorra de beisbol",
  "Camiseta de Basket",
  "Cinturón de Orión",
  "AC/DC Camiseta",
];

for (let i = 0; i < products.length ; i++) { // recorro el array
    if (products[i].toLowerCase().includes("Camiseta".toLowerCase())){// si el elemento del array contiene la palabra camiseta lo muestra
        console.log(products[i]); // lo paso todo a minusculas para evitar errores
    }
    
}

