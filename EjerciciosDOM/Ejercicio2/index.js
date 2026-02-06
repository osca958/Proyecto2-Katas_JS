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

for (let i= 0; i < 6; i++) {
    const p = document.createElement("p");
    p.textContent= "Parrafo número: " + (i+1);
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
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];


