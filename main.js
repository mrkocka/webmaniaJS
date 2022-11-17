//Változók
const menuButton = document.getElementById("menu-icon");
const cratButton = document.getElementById("crat-icon");
const nav = document.getElementById("nav");
const cratList = document.getElementById("crat-content");
const openIcon = document.getElementById("list-icon");
const cratIcon = document.getElementById("cralist-icon");

//Menü funkcióiért felelős JS kód

menuButton.addEventListener("click", function (event) {
  nav.classList.toggle("menu-active");
  if (nav.classList == "menu-active") {
    openIcon.src = "./img/close.svg";
  } else {
    openIcon.src = "./img/list.svg";
  }
});

//Kosár nyitás/Zárás funkcióiért felelős JS kód

cratButton.addEventListener("click", function (crat) {
  cratList.classList.toggle("crat-active");
  if (cratList.classList == "crat-active") {
    cratIcon.src = "./img/close.svg";
  } else {
    cratIcon.src = "./img/cart4.svg";
  }
});

// TODO Ezek majd backendről fognak jönni
const products = [
  {
    id: 1,
    name: "Áfonya",
    picture: "afonya.jpg",
    description: "Kézzel termelt egészség",
    price: 3000,
    inStock: true,
  },

  {
    id: 2,
    name: "Szölő",
    picture: "feher-szolo.webp",
    description: "Kézzel termelt egészség",
    price: 2000,
    inStock: true,
    variations: ["fehér", "kék"],
  },

  {
    id: 3,
    name: "Paradicsom",
    picture: "paradicsom.webp",
    description: "Kézzel termelt egészség",
    price: 1000,
    inStock: true,
  },
];

const productSection = document.getElementById("product");

products.forEach((product) => {
  productSection.innerHTML += `<div>
<h2>${product.name}</h2>
<p>${product.description}</p>
<img src="./img/${product.picture}">
<h3>${product.price} Ft</h3>
<a id="${product.id}"  class="addToCart">Kosárba</a>
</div>`;
});

//Ez akkor működik, ha tömb egy elemét akarom megjeleníteni
/* productSection.innerHTML = `<div>
<h2>${products[0].name}</h2>
<p>${products[0].description}</p>
<img src="./img/${products[0].picture}">
<h3>${products[0].price} Ft</h3>
<a href="">Kosárba</a>
</div>`;
 */

//------------------------------------Kosár kezelés---------------------------------------

const cart = {};

//gyűjtsök ki az addToCart css osztályú elemeket
const addToCratButtons = document.getElementsByClassName("addToCart");
//nézzük meg hogy hány darab vab belőlük
const buttonCount = addToCratButtons.length;
//lépegessünk végig rajta
for (let i = 0; i < buttonCount; i++) {
  //adjunk hozzá egyesével egy klikk figyelőt
  addToCratButtons[i].addEventListener("click", function (event) {
    //ha még nincs benne adjpn hozzá egyet
    if (cart[event.target.id] == undefined) {
      cart[event.target.id] = 1;
    } else {
      //ha már benne van akkor növejük a darabszámot
      cart[event.target.id]++;
    }
  });
}

// tegyünk rá egy kilkk figyelőt a kosár ikonra
const cartIcon = document.getElementById("crat-icon");
const cartItems = document.getElementById("cart-items");
cartIcon.addEventListener("click", function () {
  //lépegesünk végig a cart-on és a products tömmből keressük ki a terméket
  for (const id in cart) {
    //és jelenítsük meg a nevéd a cartban lévő darabszámot és a termékek árát
    const currentProduct = products.find((product) => product.id == id);
    cartItems.innerHTML += `<li>${cart[id]} db - ${currentProduct.name} * ${currentProduct.price} Ft/db</li>`;
  }
  //a végén jelenítsük meg a teljes vásárlási összeget
});
//jelenítsük meg ami a kosárban van
