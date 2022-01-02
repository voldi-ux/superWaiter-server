/** @format */

export const products = [
  {
    name: "beef skewer large",
    category: "main",
    price: 75,
    description: "",
    addOns: [
      { name: "fried chips", price: 20 },
      { name: "salad", price: 35},
      { name: "sauce", price: 35 }
    ], // or null if the product does not need an add on
    hot: false,
    imagePath: "/products/beef-skewer-large.png"
  },
  {
    name: "full chicken",
    category: "main",
    price: 100,
    description: "",
    addOns: [
      { name: "boiled potato", price: 20 },
      { name: "salad", price: 35 },
      { name: "soupe", price: 20 }
    ], // or null if the product does not need an add on
    hot: false,
    imagePath: "/products/chicken1-large.png"
  },
  {
    name: "drum sticks",
    category: "main",
    price: 55,
    description: "",
    addOns: [
      { name: "fried rice", price: 20 },
      { name: "salad", price: 35 }
    ], // or null if the product does not need an add on
    hot: false,
    imagePath: "/products/chicken2-large.png"
  },
  {
    name: "chicken pieces & rice",
    category: "main",
    price: 55,
    description: "",
    addOns: null, // or null if the product does not need an add on
    hot: false,
    imagePath: "/products/chicken3-large.png"
  },
  {
    name: "tilapia",
    category: "main",
    price: 55,
    description: "",
    addOns: [
      { name: "cooked rice", price: 20 },
      { name: "salad", price: 35 }
    ], // or null if the product does not need an add on
    hot: false,
    imagePath: "/products/fish1-large.png"
  },
  {
    name: "Spotted tilapia",
    category: "main",
    price: 55,
    description: "",
    addOns: [
      { name: "fried chips", price: 20 },
      { name: "salad", price: 35 }
    ], // or null if the product does not need an add on
    hot: false,
    imagePath: "/products/fish2-large.png"
  },
  {
    name: "salmon",
    category: "main",
    price: 70,
    description: "",
    addOns: [{ name: "salad", price: 35 }], // or null if the product does not need an add on
    hot: false,
    imagePath: "/products/fish3-large.png"
  },
  {
    name: "beef steak",
    category: "main",
    price: 70,
    description: "",
    addOns: [{ name: "freid chips", price: 35 }], // or null if the product does not need an add on
    hot: false,
    imagePath: "/products/steak2-large.png"
  },
  {
    name: "roasted pork",
    category: "main",
    price: 75,
    description: "",
    addOns: [
      { name: "soup", price: 35 },
      { name: "salad", price: 35 }
    ], // or null if the product does not need an add on
    hot: false,
    imagePath: "/products/steak3-large.png"
  },

  //drinksimages products starts here.
  {
    name: "amarula",
    category: "drinks",
    price: 120,
    description: "",
    addOns: null, // or null if the product does not need an add on
    hot: false,
    imagePath: "/products/amarula.png"
  },
  {
    name: "Aperol Bellini",
    category: "drinks",
    price: 120,
    description: "",
    addOns: null, // or null if the product does not need an add on
    hot: false,
    imagePath: "/products/Aperol-Bellini-Wine.png"
  },
  {
    name: "Chicha morada",
    category: "drinks",
    price: 60,
    description: "",
    addOns: null, // or null if the product does not need an add on
    hot: false,
    imagePath: "/products/Chicha-morada.png"
  },
  {
    name: "cosmopolitan",
    category: "drinks",
    price: 60,
    description: "",
    addOns: null, // or null if the product does not need an add on
    hot: false,
    imagePath: "/products/cosmopolitan.png"
  },
  {
    name: "jack",
    category: "drinks",
    price: 50,
    description: "",
    addOns: null, // or null if the product does not need an add on
    hot: false,
    imagePath: "/products/jack.png"
  },
  {
    name: "jameson",
    category: "drinks",
    price: 50,
    description: "",
    addOns: null, // or null if the product does not need an add on
    hot: false,
    imagePath: "/products/jameson.png"
  },
  {
    name: "Lanson",
    category: "drinks",
    price: 150,
    description: "",
    addOns: null, // or null if the product does not need an add on
    hot: false,
    imagePath: "/products/Lanson-champagne.png"
  },
  {
    name: "Malibu",
    category: "drinks",
    price: 150,
    description: "",
    addOns: null, // or null if the product does not need an add on
    hot: false,
    imagePath: "/products/Malibu.png"
  },
  {
    name: "run & coke",
    category: "drinks",
    price: 20,
    description: "",
    addOns: null, // or null if the product does not need an add on
    hot: false,
    imagePath: "/products/rum-and-coke.png"
  },
  {
    name: "sea breeze",
    category: "drinks",
    price: 20,
    description: "",
    addOns: null, // or null if the product does not need an add on
    hot: false,
    imagePath: "/products/sea-breeze.png"
  },
  {
    name: "sky vodka",
    category: "drinks",
    price: 80,
    description: "",
    addOns: null, // or null if the product does not need an add on
    hot: false,
    imagePath: "/products/sky-vodka.png"
  },
  {
    name: "Smoothie juice",
    category: "drinks",
    price: 80,
    description: "",
    addOns: null, // or null if the product does not need an add on
    hot: false,
    imagePath: "/products/Smoothie-juice.png"
  },

  //saladsimages products begin here.
  {
    name: "beef salad",
    category: "salads",
    price: 45,
    description: "",
    addOns: null, // or null if the product does not need an add on
    hot: false,
    imagePath: "/products/beef-salad.png"
  },
  {
    name: "chicken salad",
    category: "salads",
    price: 50,
    description: "",
    addOns: null, // or null if the product does not need an add on
    hot: false,
    imagePath: "/products/chicken-salad.png"
  },
  {
    name: "fruite salad",
    category: "salads",
    price: 30,
    description: "",
    addOns: null, // or null if the product does not need an add on
    hot: false,
    imagePath: "/products/fruite-salad.png"
  },
  {
    name: "greek salad",
    category: "salads",
    price: 30,
    description: "",
    addOns: null, // or null if the product does not need an add on
    hot: false,
    imagePath: "/products/greek-salad.png"
  },
  {
    name: "pasta salad",
    category: "salads",
    price: 50,
    description: "",
    addOns: null, // or null if the product does not need an add on
    hot: false,
    imagePath: "/products/pasta-salad.png"
  },
  {
    name: "romain salad",
    category: "salads",
    price: 40,
    description: "",
    addOns: null, // or null if the product does not need an add on
    hot: false,
    imagePath: "/products/Romain-salad.png"
  },
  {
    name: "vegetable-salad",
    category: "salads",
    price: 25,
    description: "",
    addOns: null, // or null if the product does not need an add on
    hot: false,
    imagePath: "/products/vegetable-salad.png"
  },

  //starters
  {
    name: "burrito",
    category: "starters",
    price: 35,
    description: "",
    addOns: null, // or null if the product does not need an add on
    hot: false,
    imagePath: "/products/burrito.png"
  },
  {
    name: "frence fries",
    category: "starters",
    price: 35,
    description: "",
    addOns: null, // or null if the product does not need an add on
    hot: false,
    imagePath: "/products/french-fries.png"
  },
  {
    name: "fried cheese",
    category: "starters",
    price: 45,
    description: "",
    addOns: null, // or null if the product does not need an add on
    hot: false,
    imagePath: "/products/fried-cheese.png"
  },
  {
    name: "nachos",
    category: "starters",
    price: 50,
    description: "",
    addOns: null, // or null if the product does not need an add on
    hot: false,
    imagePath: "/products/nachos.png"
  },
  {
    name: "samosa",
    category: "starters",
    price: 25,
    description: "",
    addOns: null, // or null if the product does not need an add on
    hot: false,
    imagePath: "/products/nachos.png"
  },
  {
    name: "slice taco",
    category: "starters",
    price: 55,
    description: "",
    addOns: null, // or null if the product does not need an add on
    hot: false,
    imagePath: "/products/slice-taco.png"
  },
  {
    name: "Totopo Nachos",
    category: "starters",
    price: 45,
    description: "",
    addOns: null, // or null if the product does not need an add on
    hot: false,
    imagePath: "/products/Totopo Nachos.png"
  },
  {
    name: "vegetable taco",
    category: "starters",
    price: 45,
    description: "",
    addOns: null, // or null if the product does not need an add on
    hot: false,
    imagePath: "/products/vegetable-taco.png"
  },

  //desserts

  {
    name: "cake strawberry",
    category: "desserts",
    price: 20,
    description: "",
    addOns: null, // or null if the product does not need an add on
    hot: false,
    imagePath: "/products/cake-strawberry.png"
  },
  {
    name: "choco cake",
    category: "desserts",
    price: 30,
    description: "",
    addOns: null, // or null if the product does not need an add on
    hot: false,
    imagePath: "/products/choco-cake.png"
  },
  {
    name: "cream choco",
    category: "desserts",
    price: 30,
    description: "",
    addOns: null, // or null if the product does not need an add on
    hot: false,
    imagePath: "/products/cream-choco.png"
  },
  {
    name: "cupcake icing",
    category: "desserts",
    price: 35,
    description: "",
    addOns: null, // or null if the product does not need an add on
    hot: false,
    imagePath: "/products/cupcake-icing.png"
  },
  {
    name: "ice cream",
    category: "desserts",
    price: 25,
    description: "",
    addOns: null, // or null if the product does not need an add on
    hot: false,
    imagePath: "/products/ice-cream.png"
  },
  {
    name: "blackberries cream",
    category: "desserts",
    price: 20,
    description: "",
    addOns: null, // or null if the product does not need an add on
    hot: false,
    imagePath: "/products/ice-cream-blackberies.png"
  },
  {
    name: "ice cream milkshak",
    category: "desserts",
    price: 45,
    description: "",
    addOns: null, // or null if the product does not need an add on
    hot: false,
    imagePath: "/products/ice-cream-milkshak.png"
  },
  {
    name: "Smoothie Milkshake",
    category: "desserts",
    price: 50,
    description: "",
    addOns: null, // or null if the product does not need an add on
    hot: false,
    imagePath: "/products/Smoothie-Milkshake.png"
  },
  {
    name: "pona cota",
    category: "desserts",
    price: 25,
    description: "",
    addOns: null, // or null if the product does not need an add on
    hot: false,
    imagePath: "/products/pona-cota.png"
  },
  {
    name: "sundae-strawberry",
    category: "desserts",
    price: 25,
    description: "",
    addOns: null, // or null if the product does not need an add on
    hot: false,
    imagePath: "/products/sundae-strawberry.png"
  }
];


