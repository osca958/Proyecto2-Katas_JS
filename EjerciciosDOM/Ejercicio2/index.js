// 2.1 Inserta dinamicamente en un html un div vacio con javascript.
const divAñadido = document.createElement("div");
divAñadido.classList.add("divAñadidoPorMi");
document.body.appendChild(divAñadido);

// 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

const divConP = document.createElement("div");
const p = document.createElement("p");
divConP.appendChild(p);
divConP.classList.add("divConP");
document.body.appendChild(divConP);

// 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.

const divCon6P = document.createElement("div");

for (let i = 0; i < 6; i++) {
  const p = document.createElement("p");
  p.textContent = "Parrafo número: " + (i + 1);
  divCon6P.appendChild(p);
}
divCon6P.classList.add("divCon6P");

document.body.appendChild(divCon6P);

// 2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.

const pDinamico = document.createElement("p");
pDinamico.textContent = " Soy dinámico!!";
p.classList.add("pDinamico");
document.body.appendChild(pDinamico);

// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

document.querySelector("h2.fn-insert-here").textContent = "Wubba Lubba dub dub";

// 2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ["Facebook", "Netflix", "Instagram", "Snapchat", "Twitter"];

const ul = document.createElement("ul");

for (const app of apps) {
  const li = document.createElement("li");
  li.textContent = app;
  ul.appendChild(li);
}

document.body.appendChild(ul);

// 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

const elementos = document.querySelectorAll(".fn-remove-me");

elementos.forEach((elemento) => {
  elemento.remove();
});


// 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div.
	//Recuerda que no solo puedes insertar elementos con .appendChild.
const divs = document.querySelectorAll("div");
const pEntreDiv = document.createElement("p");
pEntreDiv.textContent = "Voy en medio!";

divs[0].parentNode.insertBefore(pEntreDiv,divs[1]);

// 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase
	//.fn-insert-here
const divsConClase = document.querySelectorAll(".fn-insert-here");
divsConClase.forEach(div => {
    const pDentro = document.createElement("p");
    pDentro.textContent = "Voy dentro!";
    div.appendChild(pDentro);});


