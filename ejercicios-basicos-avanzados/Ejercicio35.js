/*
Desarrolla una función que busque en un array de objetos representando mutantes si existe alguno con un poder específico y
retorne un mensaje indicando si fue encontrado o no.

Considera el caso de múltiples mutantes con el mismo poder.
*/

const mutants = [
  { name: "Wolverine", power: "regeneration" },
  { name: "Magneto", power: "magnetism" },
  { name: "Professor X", power: "telepathy" },
  { name: "Jean Grey", power: "telekinesis" },
  { name: "Rogue", power: "power absorption" },
  { name: "Storm", power: "weather manipulation" },
  { name: "Mystique", power: "shape-shifting" },
  { name: "Beast", power: "superhuman strength" },
  { name: "Colossus", power: "steel skin" },
  { name: "Nightcrawler", power: "teleportation" },
];

function findMutantByPower(mutants, power) {
  let encontrados = []; // creo un array vacio donde guardo los mutantes que coinciden con el poder indicado
  for (const mutant of mutants) {
    if (power === mutant.power) { // si el poder coincide con el del mutante
      encontrados.push(mutant.name); // lo añado al array de encontrados
    }
  }
  if (encontrados.length > 0) {
    return "Se han encontrado mutantes con esos poderes -> " + encontrados.join(", "); // si tiene elementos dentro los muestro separados por comas
  } else {
    return "No se han encontrado mutantes con esos poderes";
  }
}

console.log(findMutantByPower(mutants, "teleportation"));
console.log(findMutantByPower(mutants, "telequinesis"));
