import { games } from "./gamelist.js";

const gameId = new URLSearchParams(window.location.search).get("id");
const selectedGame = games.find(game => game.id === gameId);

document.title = "Gamehub –" + " " + selectedGame.name + " " + "Purchase";

const heroBuyGame = document.querySelector(".heroBuyGames");
heroBuyGame.style.backgroundImage = `url(${selectedGame.largePicture})`;
heroBuyGame.style.backgroundSize = "cover";
heroBuyGame.style.backgroundPosition = "top";

const buyContainerGridItem = document.querySelector(".buyContainerGridItem");
const buyGameName = document.querySelector("#gamename");
buyGameName.textContent = selectedGame.name;

const gridItemCategories = document.querySelector(".gridItemCategories");
selectedGame.categories.forEach(category => {
    const categoryItem = document.createElement("p");
    categoryItem.classList.add("buttonChategory");
    categoryItem.textContent = category;
    gridItemCategories.appendChild(categoryItem);
});

const itemGrid = document.querySelector(".itemGrid");
const itemImg = document.querySelector(".previewImg");
itemImg.classList.add("previewImg")
itemImg.src = selectedGame.smallPicture;
itemImg.alt = selectedGame.name;

const itemText = document.querySelector(".itemText");
const priceBuy = document.querySelector("#gamePrice");
priceBuy.textContent = "$" + selectedGame.price;

const buyText = document.querySelector(".buyDescription");
buyText.textContent = selectedGame.description;

const itemConsole = document.querySelector(".itemConsole");
selectedGame.consoles.forEach((console) => {
    const consoleItem = document.createElement("p");
    consoleItem.classList.add("buttonChategory");
    consoleItem.textContent = console;
    itemConsole.appendChild(consoleItem);
});










