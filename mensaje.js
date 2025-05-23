const palabras = ["Amor", "Sonrisas", "Felicidad", "Bendiciones", "Te Amo", "Caricias", "Abrazos", "Besitos"];
const contenedor = document.querySelector(".floating-palabras");

function crearPalabra() {
  const palabra = document.createElement("span");
  palabra.textContent = palabras[Math.floor(Math.random() * palabras.length)];
  palabra.classList.add("flotante");
  palabra.style.left = Math.random() * 100 + "vw";
  palabra.style.animationDuration = 5 + Math.random() * 3 + "s";
  contenedor.appendChild(palabra);

  setTimeout(() => {
    palabra.remove();
  }, 8000);
}

setInterval(crearPalabra, 1000);

