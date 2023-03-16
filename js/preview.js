let categories = ['Action', 'Adventure', 'Role-Playing', 'Simulation', 'Strategy', 'fantasy' ];

for(let i=0; i < categories.length; i++){
    
}


const smallpictures = [
    "images/GameHub_covers.jpeg",
    "images/GameHub_covers2.jpeg",
    "images/GameHub_covers3.jpeg",
    "images/GameHub_covers4.jpeg",
    "images/GameHub_covers5.jpeg",
    "images/GameHub_covers6.jpeg",
    "images/GameHub_covers7.jpeg",
    "images/GameHub_covers8.jpeg",
    "images/GameHub_covers9.jpeg",
    "images/GameHub_covers10.jpeg",
];

for(let i=0; i<smallpictures.length; i++){
    
}

const largePicture = [
    "images/assassin.jpeg",
    "images/boxer.jpeg",
    "images/cyberpunk.jpeg",
    "images/furious.jpeg",
    "images/pingpong.jpg",
    "images/racing.jpg",
    "images/spacewars.png",
    "images/superduper.jpg",
    "images/black.jpeg",
    "images/forgeLegend.jpg",
];

for(let i=0; i < largePicture.length; i++){ 
};

const consoles = ["PS5", "PC", "Xbox", "Nintendo", "PS4"];


const games = [
    {
        name: "Forge Legend",
        year: 2015,
        smallPicture: smallpictures[9],
        largePicture: largePicture[9],
        price: 99.99,
        description: "As you explore the forest, you’ll encounter mystical forges that allow you to create legendary weapons of immense power. These weapons are not only incredibly powerful, but also carry a piece of your own story, imbued with your triumphs and defeats. Each time you wield one of these weapons, you’ll feel the weight of your own legend.",
        categories: [categories[0], categories[2], categories[5]],
        consoles: [consoles[0], consoles[1], consoles[2]],
        id: "forgelegend",
    },
    {
        name: "Ping Pong",
        year: 2020,
        smallPicture: smallpictures[0],
        largePicture: largePicture[4],
        price: 5.99,
        description: "As you explore the forest, you’ll encounter mystical forges that allow you to create legendary weapons of immense power. These weapons are not only incredibly powerful, but also carry a piece of your own story, imbued with your triumphs and defeats. Each time you wield one of these weapons, you’ll feel the weight of your own legend.",
        categories: [categories[3]],
        consoles: [consoles[0], consoles[1], consoles[2]],
        id: "pingpong"
    },
    {
        name: "Super Duper",
        year: 2015,
        smallPicture: smallpictures[1],
        largePicture: largePicture[7],
        price: 50.00,
        description: "As you explore the forest, you’ll encounter mystical forges that allow you to create legendary weapons of immense power. These weapons are not only incredibly powerful, but also carry a piece of your own story, imbued with your triumphs and defeats. Each time you wield one of these weapons, you’ll feel the weight of your own legend.",
        categories: [categories[0], categories[4],],
        consoles: [consoles[0], consoles[1], consoles[2]],
        id: "superduper"
    },
    {
        name: "Black",
        year: 2018,
        smallPicture: smallpictures[2],
        largePicture: largePicture[8],
        price: 40.00,
        description: "As you explore the forest, you’ll encounter mystical forges that allow you to create legendary weapons of immense power. These weapons are not only incredibly powerful, but also carry a piece of your own story, imbued with your triumphs and defeats. Each time you wield one of these weapons, you’ll feel the weight of your own legend.",
        categories: [categories[0], categories[1], categories[5]],
        consoles: [consoles[0], consoles[1], consoles[2]],
        id: "black"
    },
    {
        name: "Furious",
        year: 2023,
        smallPicture: smallpictures[3],
        largePicture: largePicture[3],
        price: 99.99,
        description: "As you explore the forest, you’ll encounter mystical forges that allow you to create legendary weapons of immense power. These weapons are not only incredibly powerful, but also carry a piece of your own story, imbued with your triumphs and defeats. Each time you wield one of these weapons, you’ll feel the weight of your own legend.",
        categories: [categories[0], categories[1]],
        consoles: [consoles[0], consoles[1], consoles[2]],
        id: "furious"
    },
    {
        name: "Assassin",
        year: 2010,
        smallPicture: smallpictures[4],
        largePicture: largePicture[0],
        price: 99.99,
        description: "As you explore the forest, you’ll encounter mystical forges that allow you to create legendary weapons of immense power. These weapons are not only incredibly powerful, but also carry a piece of your own story, imbued with your triumphs and defeats. Each time you wield one of these weapons, you’ll feel the weight of your own legend.",
        categories: [categories[0], categories[2], categories[5]],
        consoles: [consoles[0], consoles[1], consoles[2]],
        id: "assassin"
    },
    {
        name: "Space War",
        year: 2019,
        smallPicture: smallpictures[5],
        largePicture: largePicture[6],
        price: 35.50,
        description: "As you explore the forest, you’ll encounter mystical forges that allow you to create legendary weapons of immense power. These weapons are not only incredibly powerful, but also carry a piece of your own story, imbued with your triumphs and defeats. Each time you wield one of these weapons, you’ll feel the weight of your own legend.",
        categories: [categories[0], categories[1], categories[5]],
        consoles: [consoles[0], consoles[1], consoles[2]],
        id: "spacewar"
    },
    {
        name: "Racing",
        year: 2015,
        smallPicture: smallpictures[6],
        largePicture: largePicture[5],
        price: 99.99,
        description: "As you explore the forest, you’ll encounter mystical forges that allow you to create legendary weapons of immense power. These weapons are not only incredibly powerful, but also carry a piece of your own story, imbued with your triumphs and defeats. Each time you wield one of these weapons, you’ll feel the weight of your own legend.",
        categories: [categories[0], categories[3]],
        consoles: [consoles[0], consoles[1], consoles[2]],
        id: "racing"
    },
    {
        name: "Boxer",
        year: 2020,
        smallPicture: smallpictures[7],
        largePicture: largePicture[1],
        price: 99.99,
        description: "As you explore the forest, you’ll encounter mystical forges that allow you to create legendary weapons of immense power. These weapons are not only incredibly powerful, but also carry a piece of your own story, imbued with your triumphs and defeats. Each time you wield one of these weapons, you’ll feel the weight of your own legend.",
        categories: [categories[0], categories[2], categories[4]],
        consoles: [consoles[2], consoles[3], consoles[4]],
        id: "boxer"
    },
    {
        name: "Cyberpunk",
        year: 2021,
        smallPicture: smallpictures[8],
        largePicture: largePicture[2],
        price: 80.00,
        description: "As you explore the forest, you’ll encounter mystical forges that allow you to create legendary weapons of immense power. These weapons are not only incredibly powerful, but also carry a piece of your own story, imbued with your triumphs and defeats. Each time you wield one of these weapons, you’ll feel the weight of your own legend.",
        categories: [categories[0], categories[1], categories[5]],
        consoles: [consoles[1], consoles[2], consoles[3]],
        id: "cyberpunk"
    },
]

const gameId = new URLSearchParams(window.location.search).get("id");
const selectedGame = games.find(game => game.id === gameId);

const heroPreview = document.querySelector(".heroPreview");
heroPreview.style.backgroundImage = `url(${selectedGame.largePicture})`;
heroPreview.style.backgroundSize = "cover";
heroPreview.style.backgroundPosition = "top";

const heroContainerPreview = document.querySelector(".heroCointainer");
const heroChategory = document.querySelector(".heroChategory");

selectedGame.categories.forEach((category) => {
  const categoryElem = document.createElement("p");
  categoryElem.textContent = category;
  categoryElem.classList.add("buttonChategory");
  heroChategory.appendChild(categoryElem);
});

const containerItem = document.querySelector(".containerBtn1");
selectedGame.consoles.forEach((console) => {
  const consoleElem = document.createElement("p");
  consoleElem.classList.add("buttonChategory");
  consoleElem.textContent = console;
  containerItem.appendChild(consoleElem);
});

const previewImgs = document.querySelectorAll(".previewImg");
previewImgs.forEach((previewImg, i) => {
  previewImg.src = selectedGame.smallPicture;
  previewImg.alt = selectedGame.name;
});

const heroHeading = document.querySelector("#heroHeading");
heroHeading.textContent = selectedGame.name;


const previewText = document.querySelector(".containerText");
previewText.textContent = selectedGame.description;

const heroBtnContainer = document.querySelector(".containerBtn");
const heroBtn = document.querySelector(".button2");
heroBtn.textContent = `Buy for $${selectedGame.price}`;
heroBtn.href = "gamebuy.html?id=" + selectedGame.id;





















