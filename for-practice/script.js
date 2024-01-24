const gallery = [
  {
    name: "Andres Iniesta",
    nacionality: "Spain",
    foot: "right",
    img: "./assets/images/image-gallery-1.jpeg",
  },
  {
    name: "Carlos Tevez",
    nacionality: "Argentina",
    foot: "right",
    img: "./assets/images/image-gallery-2.jpeg",
  },
  {
    name: "Andrea Pirlo",
    nacionality: "Italy",
    foot: "right",
    img: "./assets/images/image-gallery-3.jpeg",
  },
  {
    name: "Paul Pogba",
    nacionality: "France",
    foot: "right",
    img: "./assets/images/image-gallery-4.jpeg",
  },
  {
    name: "Ruud Van Nistelrooy",
    nacionality: "Netherlands",
    foot: "right",
    img: "./assets/images/image-gallery-5.jpeg",
  },
  {
    name: "Patrice Evra",
    nacionality: "France",
    foot: "right",
    img: "./assets/images/image-gallery-6.jpeg",
  },
];

const container = document.querySelector(".gallery");

gallery.forEach((el) => {
  container.innerHTML += `
        <div class="gallery-card">
            <img src="${el.img}" alt="${el.name}"
            <h2>Player: ${el.name}</h2>
            <p>Nation: ${el.nacionality}</p>
            <p>Habil Foot: ${el.foot}</p>
        </div>
    `;
});
