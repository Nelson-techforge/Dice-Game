// Define player names
var player1 = "Player 1";
var player2 = "Player 2";

// First dice
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage1 = "images/dice" + randomNumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", randomDiceImage1);

// Second dice
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);

// Change the <h1> depending on who wins
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").textContent = "🚩 " + player1 + " Wins!";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").textContent = player2 + " Wins! 🚩";
} else {
  document.querySelector("h1").textContent = "Draw!";
}
