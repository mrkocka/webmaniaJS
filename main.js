const products = [
  {
    name: "Áfonya",
    picture: "afonya.jpg",
    description: "Kézzel termelt egészség",
    price: 3000,
    inStock: true,
  },

  {
    name: "Szölő",
    picture: "feher-szolo.webp",
    description: "Kézzel termelt egészség",
    price: 2000,
    inStock: true,
    variations: ["fehér", "kék"],
  },

  {
    name: "Paradicsom",
    picture: "paradicsom.webp",
    description: "Kézzel termelt egészség",
    price: 1000,
    inStock: true,
  },
];

const productSection = document.getElementById("product");



productSection.innerHTML = `<div>
<h2>${products[0].name}</h2>
<p>${products[0].description}</p>
<img src="./img/${products[0].picture}">
<h3>${products[0].price} Ft</h3>
<a href="#">Kosárba</a>
</div>`;
