const frases = ["Te quiero Mucho", "Feliz Cumpleaños", "Keilin"];
const container = document.querySelector(".container");

function crearBurbuja() {
  const burbuja = document.createElement("span");
  burbuja.textContent = frases[Math.floor(Math.random() * frases.length)];
  burbuja.className = "burbuja";

  burbuja.style.left = Math.random() * 100 + "vw";
  burbuja.style.animationDuration = 4 + Math.random() * 3 + "s";

  container.appendChild(burbuja);

  setTimeout(() => {
    burbuja.remove();
  }, 7000);
}

setInterval(crearBurbuja, 800);

