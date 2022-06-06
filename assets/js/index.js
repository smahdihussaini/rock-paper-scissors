const userChoiceDisplay = document.getElementById("user-choice");
const computerChoiceDisplay = document.getElementById("computer-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
const userImage = document.getElementById("user-image");
const computerImage = document.getElementById("computer-image");
let userChoice;
let computerChoice;

possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    userChoice = e.currentTarget.id;
    userChoiceDisplay.innerHTML = userChoice;
    userChoiceDisplay.className = "capitalize";
    userImage.src = `assets/images/${userChoice}.png`;
    generateComputerChoice();
    showResult();
  })
);

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  computerChoice =
    randomNumber === 1 ? "rock" : randomNumber === 2 ? "paper" : "scissors";
  computerChoiceDisplay.innerHTML = computerChoice;
  computerChoiceDisplay.className = "capitalize";
  computerImage.src = `assets/images/${computerChoice}.png`;
}

function showResult() {
  let winner;
  if (userChoice === computerChoice) {
    winner = "draw";
  } else if (userChoice === "rock" && computerChoice === "paper") {
    winner = "computer";
  } else if (userChoice === "rock" && computerChoice === "scissors") {
    winner = "user";
  } else if (userChoice === "paper" && computerChoice === "scissors") {
    winner = "computer";
  } else if (userChoice === "paper" && computerChoice === "rock") {
    winner = "user";
  } else if (userChoice === "scissors" && computerChoice === "rock") {
    winner = "computer";
  } else if (userChoice === "scissors" && computerChoice === "paper") {
    winner = "user";
  }
  addPoint(winner);
  resultDisplay.innerHTML =
    winner === "draw" ? "DRAW" : winner === "computer" ? "LOSE" : "WIN";
}

function addPoint(winner) {
  let scoreBoard;
  if (winner === "computer") {
    scoreBoard = document.getElementById("computer-score");
  } else if (winner === "user") {
    scoreBoard = document.getElementById("user-score");
  }
  if (scoreBoard) {
    let currentScore = parseInt(scoreBoard.innerText);
    currentScore += 1;
    scoreBoard.innerText = currentScore;
    if (currentScore === 5) {
      if (winner === "computer") {
        alert("You Lose!");
      } else if (winner === "user") {
        alert("You Win!");
      }
      location.reload();
    }
  }
}
