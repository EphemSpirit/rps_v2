let playerChoice;
let computerChoice;
let playerScore = 0;
let computerScore = 0;
let ties = 0;

let newGame = document.querySelector(".reset-button");
let playerBoard = document.querySelector("#player-score");
let computerBoard = document.querySelector("#computer-score");
let gameResults = document.querySelector("#game-results");
let tieGames = document.querySelector("#tie-score");
let buttons = document.querySelectorAll("button");

let resetButton = document.createElement("button");
resetButton.setAttribute("class", "reset-btn");
resetButton.textContent = "New Game";

resetButton.addEventListener("click", () => {
  playerScore = 0;
  computerScore = 0;
  ties = 0;
  playerBoard.innerHTML = "Player Score: ";
  computerBoard.innerHTML = "Computer Score: ";
  tieGames.innerHTML = "Ties: ";
  gameResults.textContent = "";
});

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
    ties++;
  } else if (computerChoice == 'paper') {
    switch (playerChoice) {
      case 'scissors':
        gameResults.textContent = `${playerChoice} beats ${computerChoice}! You won!`;
        playerScore++;
        break;

      case 'rock':
        gameResults.textContent = `${computerChoice} beats ${playerChoice}! The computer won!`;
        computerScore++;
        break;
      }
    } else if (computerChoice == 'rock') {
      switch (playerChoice) {
        case 'paper':
          gameResults.textContent = `${playerChoice} beats ${computerChoice}! You won!`;
          playerScore++;
          break;

        case 'scissors':
          gameResults.textContent = `${computerChoice} beats ${playerChoice}! The computer won!`;
          computerScore++;
          break;
      }
    } else if (computerChoice == 'scissors') {
      switch (playerChoice) {
        case 'rock':
          gameResults.textContent = `${playerChoice} beats ${computerChoice}! You won!`;
          playerScore++;
          break;

        case 'paper':
          gameResults.textContent = `${computerChoice} beats ${playerChoice}! The computer won!`;
          computerScore++;
          break;
      }
    }
    updateScores(playerScore, computerScore);
    endGame();
  }

  function updateScores () {
    playerBoard.innerHTML = `Player Score: ${playerScore}`;
    computerBoard.innerHTML = `Computer Score: ${computerScore}`;
    tieGames.innerHTML = `Ties: ${ties}`;
  }

  function endGame () {
    if (playerScore == 5) {
      gameResults.textContent = "You won 5 games! I hope it filled the void in your life."
      newGame.appendChild(resetButton);
    } else if (computerScore == 5 ) {
      gameResults.textContent = "You got beat by a machine, how does that feel."
      newGame.appendChild(resetButton);
    } else {
      return;
    }
  }
