
// TODO Ezek majd backendről fognak jönni 
const products = [
  {
    id:1,
    name: "Áfonya",
    picture: "afonya.jpg",
    description: "Kézzel termelt egészség",
    price: 3000,
    inStock: true,
  },

  {
    id:2,
    name: "Szölő",
    picture: "feher-szolo.webp",
    description: "Kézzel termelt egészség",
    price: 2000,
    inStock: true,
    variations: ["fehér", "kék"],
  },

  {
    id:3,
    name: "Paradicsom",
    picture: "paradicsom.webp",
    description: "Kézzel termelt egészség",
    price: 1000,
    inStock: true,
  },
]; 

const productSection = document.getElementById("product");

products.forEach(product => {
  productSection.innerHTML += `<div>
<h2>${product.name}</h2>
<p>${product.description}</p>
<img src="./img/${product.picture}">
<h3>${product.price} Ft</h3>
<a id="${product.id}"  class="addToCart">Kosárba</a>
</div>`
})



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

const cart = {}

const addToCratButtons = document.getElementsByClassName('addToCart');
const buttonCount = addToCratButtons.length
for (let i = 0; i < buttonCount; i ++) {
  addToCratButtons[i].addEventListener('click', function (event) {
    console.log[event.target.id] = 1
  })
}