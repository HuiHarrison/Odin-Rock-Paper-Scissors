const modal = document.querySelector("dialog");
const popUpText = document.querySelector("h2");
const closeBtn = document.querySelector(".close");
const againBtn = document.querySelector("#again");
const title = document.querySelector("#title");
const description = document.querySelector("#description");
const playerScoreDisplay = document.querySelector(".choices .player .score");
const computerScoreDisplay = document.querySelector(".choices .computer .score");
const playerChoice = document.querySelector(".choices .player .choice")
const computerChoice = document.querySelector(".choices .computer .choice")
const rockBtn = document.querySelector("#rock-btn");
const paperBtn = document.querySelector("#paper-btn");
const scissorsBtn = document.querySelector("#scissors-btn");

let playerScore = 0;
let computerScore = 0;
let computerSelection;
let playerSelection;
const CHOICELIST = ["ROCK", "PAPER", "SCISSORS"];

// Generate Random Computer Choice
function getComputerChoice() {
    computerSelection = CHOICELIST[(Math.floor(Math.random() * CHOICELIST.length))];
}

// Compare Computer and Player Choice
function playRound(playerSelection, computerSelection) {
    // Check if it is a tie
    if (playerSelection === computerSelection) {
        title.textContent = "It's a Tie!";
        description.textContent = `${playerSelection} ties with ${computerSelection}`;
    }
    // Check if player won
    else if ((playerSelection === "ROCK" && computerSelection === "SCISSORS") ||
    (playerSelection === "PAPER" && computerSelection === "ROCK") ||
    (playerSelection === "SCISSORS" && computerSelection === "PAPER")) {
        playerScore++;
        playerScoreDisplay.textContent = `Player: ${playerScore}`;
        title.textContent = "You Won!";
        description.textContent = `${playerSelection} beats ${computerSelection}`;
    }
    // Else return player lost
    else {
        computerScore++;
        computerScoreDisplay.textContent = `Player: ${computerScore}`;
        title.textContent = "You Lose!";
        description.textContent = `${computerSelection} beats ${playerSelection}`;
    }
}

// Main function
function game(playerSelection){
    displayPlayerChoice(playerSelection);
    getComputerChoice();
    displayComputerChoice(computerSelection);
    playRound(playerSelection, computerSelection);

    // Check Game Over
    if (playerScore > 4 || computerScore > 4) {
        showPopUp()
    }
}

function showPopUp() {
    // Report winner
    if (playerScore > computerScore) {
        popUpText.innerText = "YOU WIN!";
    }
    else if (computerScore > playerScore) {
        popUpText.innerText = "YOU LOSE!";
    }
    else {
        popUpText.innerText = "TIE!";
    }
    modal.showModal();

    // Close Button
    closeBtn.addEventListener("click", e => {
        // Disable All Button
        closeGame();
        modal.close();
    });

    // Play Again Button
    againBtn.addEventListener("click", e => {
        resetGame();
    })
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    playerScoreDisplay.textContent = `Player: ${playerScore}`;
    computerScoreDisplay.textContent = `Computer: ${computerScore}`;
    title.textContent = "Choose Your Weapon";
    description.textContent = `Fist to score 5 points wins the game`;
    modal.close();
}

function displayPlayerChoice(playerSelection) {
    if (playerSelection === "ROCK"){
        playerChoice.innerHTML = '<img src="./img/rock.png" alt="rock"/>';
    }
    else if (playerSelection === "PAPER") {
        playerChoice.innerHTML = '<img src="./img/paper.png" alt="paper"/>';
    }
    else if (playerSelection === "SCISSORS") {
        playerChoice.innerHTML = '<img src="./img/scissors.png" alt="scissors"/>';
    }
}

function displayComputerChoice(computerSelection) {
    if (computerSelection === "ROCK"){
        computerChoice.innerHTML = '<img src="./img/rock.png" alt="rock"/>';
    }
    else if (computerSelection === "PAPER") {
        computerChoice.innerHTML = '<img src="./img/paper.png" alt="paper"/>';
    }
    else if (computerSelection === "SCISSORS") {
        computerChoice.innerHTML = '<img src="./img/scissors.png" alt="scissors"/>';
    }
}

// Start game, player selected rock
function gameRock() {
    game("ROCK");
}

// Start game, player selected paper
function gamePaper() {
    game("PAPER");
}

// Start game, player selected scissors
function gameScissors() {
    game("SCISSORS");
}

rockBtn.addEventListener("click", gameRock);
paperBtn.addEventListener("click", gamePaper);
scissorsBtn.addEventListener("click", gameScissors);

// Disable all button, after clicking cross in the pop up
function closeGame() {
    rockBtn.removeEventListener("click", gameRock);
    paperBtn.removeEventListener("click", gamePaper);
    scissorsBtn.removeEventListener("click", gameScissors);
}