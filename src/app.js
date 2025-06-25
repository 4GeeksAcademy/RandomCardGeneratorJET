import "bootstrap";
import "./style.css";

window.addEventListener("DOMContentLoaded", () => {
  //write your code here
  generateCard();
  setInterval(generateCard, 5000);

const button = document.getElementById("generateButton");
  button.addEventListener("click", generateCard);
});

function generateCard() {
  const suit = generateRandomSuit();
  const number = generateRandomNumber();

  const topSuit = document.querySelector(".top-suit");
  const bottomSuit = document.querySelector(".bottom-suit");
  const numberSpan = document.querySelector(".number");

  topSuit.innerHTML = suit;
  bottomSuit.innerHTML = suit;
  numberSpan.innerHTML = number;

  const redSuits = ["♦", "♥"];
  const color = redSuits.includes(suit) ? "red" : "black";

  console.log("topSuit:", topSuit);
  console.log("bottomSuit:", bottomSuit);
  console.log("numberSpan:", numberSpan);

  topSuit.style.color = color;
  bottomSuit.style.color = color;
  numberSpan.style.color = color;
}

function generateRandomNumber() {
  const numbers = [
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
    "K",
    "Q",
    "J",
  ];
  const index = Math.floor(Math.random() * numbers.length);
  return numbers[index];
}

function generateRandomSuit() {
  const suits = ["♦", "♥", "♠", "♣"];
  const index = Math.floor(Math.random() * suits.length);
  return suits[index];
}
