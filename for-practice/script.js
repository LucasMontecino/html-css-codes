// const gallery = [
//   {
//     img: "./assets/images/img-1.png",
//     title: "Sao Paulo",
//     description:
//       "São Paulo, el dinámico centro financiero de Brasil, se encuentra entre las ciudades más pobladas del mundo, con varias instituciones culturales y una rica tradición arquitectónica.",
//   },
//   {
//     img: "./assets/images/img-2.png",
//     title: "Brasilia",
//     description:
//       "Brasilia es una ciudad planificada que se distingue por su arquitectura moderna blanca, cuyo diseño estuvo a cargo de Oscar Niemeyer.",
//   },
//   {
//     img: "./assets/images/img-3.png",
//     title: "Río de Janeiro",
//     description:
//       "Río de Janeiro es una enorme ciudad costera de Brasil, famosa por sus playas de Copacabana e Ipanema, la estatua del Cristo Redentor de 38 m de alto sobre el cerro del Corcovado y el morro Pan de Azúcar, una cima de granito con teleféricos que ascienden a su cima.",
//   },
//   {
//     img: "./assets/images/img-4.png",
//     title: "Porto Alegre",
//     description:
//       "Porto Alegre es la capital del estado de Río Grande del Sur, en el sur de Brasil.",
//   },
//   {
//     img: "./assets/images/img-5.png",
//     title: "Goiânia",
//     description:
//       "Goiânia es un municipio brasileño, y la capital del estado de Goiás.",
//   },
//   {
//     img: "./assets/images/img-6.png",
//     title: "Belo Horizonte",
//     description:
//       "Belo Horizonte es la capital del estado de Minas Gerais, en el sureste de Brasil.",
//   },
// ];

// const container = document.querySelector(".gallery");

// function fillInContainer(array, container) {
//   array.forEach((el) => {
//     container.innerHTML += `
//       <div class="gallery-item">
//         <img src="${el.img}" alt="${el.title}" loading="lazy" class="item-img"/>
//         <h2 class="item-title">City Name: ${el.title}</h2>
//         <p class="item-description">Description: ${el.description}</p>
//       </div>
//     `;
//   });
// }

// fillInContainer(gallery, container);

const products = [
  {
    id: 1,
    name: "Vanilla Cupcakes (6 Pack)",
    price: 12.99,
    category: "Cupcake",
  },
  {
    id: 2,
    name: "French Macaroon",
    price: 3.99,
    category: "Macaroon",
  },
  {
    id: 3,
    name: "Pumpkin Cupcake",
    price: 3.99,
    category: "Cupcake",
  },
  {
    id: 4,
    name: "Chocolate Cupcake",
    price: 5.99,
    category: "Cupcake",
  },
  {
    id: 5,
    name: "Chocolate Pretzels (4 Pack)",
    price: 10.99,
    category: "Pretzel",
  },
  {
    id: 6,
    name: "Strawberry Ice Cream",
    price: 2.99,
    category: "Ice Cream",
  },
  {
    id: 7,
    name: "Chocolate Macaroons (4 Pack)",
    price: 9.99,
    category: "Macaroon",
  },
  {
    id: 8,
    name: "Strawberry Pretzel",
    price: 4.99,
    category: "Pretzel",
  },
  {
    id: 9,
    name: "Butter Pecan Ice Cream",
    price: 2.99,
    category: "Ice Cream",
  },
  {
    id: 10,
    name: "Rocky Road Ice Cream",
    price: 2.99,
    category: "Ice Cream",
  },
  {
    id: 11,
    name: "Vanilla Macaroons (5 Pack)",
    price: 11.99,
    category: "Macaroon",
  },
  {
    id: 12,
    name: "Lemon Cupcakes (4 Pack)",
    price: 12.99,
    category: "Cupcake",
  },
];

class ShoppingCart {
  constructor() {
    this.items = [];
    this.total = 0;
    this.taxRate = 8.25;
  }

  addItem(id, products) {
    const product = products.find((item) => item.id === id);

    const { name, price } = product;

    this.items.push(product);

    const totalCountPerProduct = {};
    this.items.forEach((dessert) => {
      totalCountPerProduct[dessert.id] =
        (totalCountPerProduct[dessert.id] || 0) + 1;
    });
    console.log(totalCountPerProduct);
  }
}

let carrito = new ShoppingCart();

carrito.addItem(2, products);
carrito.addItem(2, products);
carrito.addItem(5, products);
carrito.addItem(7, products);
carrito.addItem(5, products);
carrito.addItem(12, products);
console.log(carrito);
