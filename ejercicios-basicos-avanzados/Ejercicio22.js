/*
Usa un for para remplazar todas las comidas que no sean veganas con las frutas del array de frutas.

Recuerda no usar frutas duplicadas.

Finalmente, imprime el array resultante.
*/

const fruits = ["Strawberry", "Banana", "Orange", "Apple"];

const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];

for (let i = 0; i < foodSchedule.length; i++) {
  // recorro el array que quiero modificar
  if (foodSchedule[i].isVegan === false) {
    // si no es vegano
    foodSchedule.splice(i, 1, { name: fruits.shift(), isVegan: true }); // cojo la primera fruta del array con .shift() y lo reemplazo con splice()
  }
}

console.log("Lista de alimentos veganos:", foodSchedule);
