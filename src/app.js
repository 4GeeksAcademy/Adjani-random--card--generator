/* eslint-disable */
import "./style.css";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here
  document.querySelector(".card").classList.add(generateRandomSuit());
  document.querySelector(".card").innerHTML = generateRandomNumber();
};

let card = document.querySelector(".card");

// Este code genera aleatoriamente el numero de la card
const generateRandomNumber = () => {
  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let indexNumbers = Math.floor(Math.random() * numbers.length);
  return numbers[indexNumbers];
};

// Este code genera aleatoriamente el palo o figura de la card
const generateRandomSuit = () => {
  let suit = ["spade", "hearts", "clubs", "diams"];
  let indexSuit = Math.floor(Math.random() * suit.length);
  return suit[indexSuit];
};

// Este code hace que se genere cada 3seg una carta nueva aleatoria, utilizando los dos codes anteriores
setInterval(() => {
  card.innerHTML = generateRandomNumber();
  card.classList.add(generateRandomSuit());
}, 3000);

//Este es el funcionamiento del botón para una carta nueva
let button = document.querySelector("#button");
button.addEventListener("click", () => {
  window.location.reload();
  button.style.background = "red";
});

// Code para que reciba(input) el alto y el ancho y lo ejecute con la tecla Enter
let ancho = document.querySelector("#ancho");
ancho.addEventListener("keydown", event => {
  if (event.key == "Enter") {
    card.style.width = `${ancho.value}px`;
  }
});

let alto = document.querySelector("#alto");
alto.addEventListener("keydown", event => {
  if (event.key == "Enter") {
    card.style.height = `${alto.value}px`;
  }
});
card.style.width = "250px";
card.style.height = "225px";
