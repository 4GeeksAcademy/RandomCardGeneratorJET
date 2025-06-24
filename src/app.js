import "bootstrap";
import "./style.css";

window.onload = () => {
  //write your code here
  const suits = generateRandomSuit()
  const number = generateRandomNumber()
  
  document.querySelector(".top-suit").innerHTML=suits;
    document.querySelector(".number").innerHTML=number;
    document.querySelector(".bottom-suit").innerHTML=suits;
};

function generateRandomNumber () {
  let number = ["A","2","3","4","5","6","7","8","9","10","K","Q","J"];
  let indexNumbers = Math.floor(Math.random() * number.length);
  console.log(indexNumbers)
  return number[indexNumbers];
};
function generateRandomSuit () {
  let suits = ["♦", "♥", "♠", "♣"];
  let indexSuit = Math.floor(Math.random() * suits.length);
  return suits[indexSuit];
}
