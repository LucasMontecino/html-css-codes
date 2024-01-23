const gallery = [
  {
    name: "Ronaldinho",
    nacionality: "Brazil",
    foot: "right",
  },
  {
    name: "Figo",
    nacionality: "Portugal",
    foot: "right",
  },
];

const container = document.querySelector(".gallery");

gallery.forEach((el) => {
  container.innerHTML += `
        <div class="gallery-card">
            <h2>Player: ${el.name}</h2>
            <p>Nation: ${el.nacionality}</p>
            <p>Habil Foot: ${el.foot}</p>
        </div>
    `;
});
