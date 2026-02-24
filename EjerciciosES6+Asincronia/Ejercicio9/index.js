const image = document.querySelector(".random-image");

const numRandom = Math.floor(Math.random() * 151) + 1;

const urlRandom = `https://pokeapi.co/api/v2/pokemon/${numRandom}`;

fetch(urlRandom)
  .then((reponse) => reponse.json())
  .then((pokemon) => {
    image.src = pokemon.sprites.other["official-artwork"].front_default;
  });
