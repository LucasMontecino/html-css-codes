const gallery = [
  {
    img: "./assets/images/img-1.png",
    title: "Sao Paulo",
    description:
      "São Paulo, el dinámico centro financiero de Brasil, se encuentra entre las ciudades más pobladas del mundo, con varias instituciones culturales y una rica tradición arquitectónica.",
  },
  {
    img: "./assets/images/img-2.png",
    title: "Brasilia",
    description:
      "Brasilia es una ciudad planificada que se distingue por su arquitectura moderna blanca, cuyo diseño estuvo a cargo de Oscar Niemeyer.",
  },
  {
    img: "./assets/images/img-3.png",
    title: "Río de Janeiro",
    description:
      "Río de Janeiro es una enorme ciudad costera de Brasil, famosa por sus playas de Copacabana e Ipanema, la estatua del Cristo Redentor de 38 m de alto sobre el cerro del Corcovado y el morro Pan de Azúcar, una cima de granito con teleféricos que ascienden a su cima.",
  },
  {
    img: "./assets/images/img-4.png",
    title: "Porto Alegre",
    description:
      "Porto Alegre es la capital del estado de Río Grande del Sur, en el sur de Brasil.",
  },
  {
    img: "./assets/images/img-5.png",
    title: "Goiânia",
    description:
      "Goiânia es un municipio brasileño, y la capital del estado de Goiás.",
  },
  {
    img: "./assets/images/img-6.png",
    title: "Belo Horizonte",
    description:
      "Belo Horizonte es la capital del estado de Minas Gerais, en el sureste de Brasil.",
  },
];

const container = document.querySelector(".gallery");

function fillInContainer(array, container) {
  array.forEach((el) => {
    container.innerHTML += `
      <div class="gallery-item">
        <img src="${el.img}" alt="${el.title}" loading="lazy" class="item-img"/>
        <h2 class="item-title">City Name: ${el.title}</h2>
        <p class="item-description">Description: ${el.description}</p>
      </div>
    `;
  });
}

fillInContainer(gallery, container);


