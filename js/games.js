import { games } from "./gamelist.js";

const gamesContainer = document.querySelector(".gamesGrid2");
let numDisplayed = 3;

for (let i=0; i < games.length; i++){
    const game = games[i];

    const gameItem = document.createElement("div");
    gameItem.classList.add("gamesItem");

    const gameImg = document.createElement("img");
    gameImg.classList.add("gamesImg");
    gameImg.src = game.largePicture;
    gameImg.alt = game.name;

    const gameInfo = document.createElement("div");
    gameInfo.classList.add("gamesInfo");

    const gameYear = document.createElement("p");
    gameYear.classList.add("gamesYear");
    gameYear.textContent = game.year;

    const gameName = document.createElement("p");
    gameName.classList.add("gamesName");
    gameName.textContent = game.name;

    const gamePrice = document.createElement("p");
    gamePrice.classList.add("gamesPrice");
    gamePrice.textContent = "$" + game.price;

    const gameCategoryBtn = document.createElement("p");
    gameCategoryBtn.classList.add("buttonChategory");
    gameCategoryBtn.textContent = game.categories;

    gameItem.addEventListener("click", function() {
        window.location.href = "gamepreview.html?id=" + game.id;
    });
    
    gameInfo.appendChild(gameYear);
    gameInfo.appendChild(gameName);
    gameInfo.appendChild(gamePrice);
    gameInfo.appendChild(gameCategoryBtn);

    gameItem.appendChild(gameImg);
    gameItem.appendChild(gameInfo);

    gamesContainer.appendChild(gameItem);
};

const heroContainer = document.querySelector(".heroContainer");
for (let i=0; i < games.length; i++){
    const game = games[i];

const heroHeading = document.querySelector("#heroHeading");
heroHeading.textContent = games[0].name;

const heroBtn = document.querySelector(".button2");
heroBtn.textContent = "Buy for" + " " + "$" + games[0].price;
heroBtn.href = "gamepreview.html?id=forgelegend";

};

const searchInput = document.getElementById("search");
const form = document.querySelector(".searchForm");

form.addEventListener("submit", (event) => {
  event.preventDefault(); 

  const searchTerm = searchInput.value.toLowerCase();
  const matchingGame = games.find((game) =>
    game.name.toLowerCase().includes(searchTerm)
  );

  if (matchingGame) {
    const gameId = matchingGame.id;
    window.location.href = `gamepreview.html?id=${gameId}`;
  }
});








