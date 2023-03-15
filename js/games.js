const games = [
    {
        name: "Forge Legend",
        smallPicture: "",
        largePicture: "",
        price: 99.99,
        description: "As you explore the forest, you’ll encounter mystical forges that allow you to create legendary weapons of immense power. These weapons are not only incredibly powerful, but also carry a piece of your own story, imbued with your triumphs and defeats. Each time you wield one of these weapons, you’ll feel the weight of your own legend.",
        categories: [categories[0], categories[2], categories[5]]
    },
]

let categories = ['Action', 'Adventure', 'Role-Playing', 'Simulation', 'Strategy', 'fantasy' ];

for(let i=0; i < categories.length; i++){
    console.log(categories);
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
    console.log(smallpictures);
}
