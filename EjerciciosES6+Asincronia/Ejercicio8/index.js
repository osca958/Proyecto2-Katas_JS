const select = document.querySelector("#character-list");
const img = document.querySelector(".character-image");

fetch("https://thronesapi.com/api/v2/Characters")
  .then((response) => response.json())
  .then((characters) => {
    characters.forEach((character) => {
      const option = document.createElement("option");
      option.value = character.imageUrl;
      option.textContent = character.fullName;
      select.appendChild(option);
    });

    select.addEventListener("change", () => {
      img.src = select.value;
    });
  });
