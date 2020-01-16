let playerChoice;
let computerChoice;
let playerScore = 0;
let computerScore = 0;

let playerBoard = document.querySelector("#player-score");
let computerBoard = document.querySelector("#computer-score");
let gameResults = document.querySelector("#game-results");
let buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playerChoice = button.value;
    getComputerChoice();
    compareChoices(playerChoice, computerChoice);
});
});

function getComputerChoice () {
  let choice = Math.floor(Math.random() * 3);
  if (choice === 0) {
    computerChoice = 'rock';
  } else if (choice === 1) {
    computerChoice = 'paper';
  } else {
    computerChoice = 'scissors';
  }
}

function compareChoices (playerChoice, computerChoice) {
  if (playerChoice == computerChoice) {
    gameResults.textContent = `${playerChoice} and ${computerChoice} are tied!`;
  } else if (computerChoice == 'paper') {
    switch (playerChoice) {
      case 'scissors':
        gameResults.textContent = `${playerChoice} beats ${computerChoice}!`;
        playerScore++;
        break;

      case 'rock':
        gameResults.textContent = `${computerChoice} beats ${playerChoice}!`;
        computerScore++;
        break;
      }
    } else if (computerChoice == 'rock') {
      switch (playerChoice) {
        case 'paper':
          gameResults.textContent = `${playerChoice} beats ${computerChoice}!`;
          playerScore++;
          break;

        case 'scissors':
          gameResults.textContent = `${computerChoice} beats ${playerChoice}!`;
          computerScore++;
          break;
      }
    } else if (computerChoice == 'scissors') {
      switch (playerChoice) {
        case 'rock':
          gameResults.textContent = `${playerChoice} beats ${computerChoice}`;
          playerScore++;
          break;

        case 'paper':
          gameResults.textContent = `${computerChoice} beats ${playerChoice}!`;
          computerScore++;
          break;
      }
    }
    updateScores(playerScore, computerScore);
  }

  function updateScores () {
    playerBoard.innerHTML = `Player Score: ${playerScore}`;
    computerBoard.innerHTML = `Computer Score: ${computerScore}`;
  }
