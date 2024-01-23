const gallery = [
  {
    name: "Ronaldinho",
    nacionality: "Brazil",
    foot: "right",
    img: "./assets/images/image-gallery-2.jpeg",
  },
  {
    name: "Figo",
    nacionality: "Portugal",
    foot: "right",
    img: "./assets/images/image-gallery-1.jpeg",
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
