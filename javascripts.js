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
        return "It's a Tie!"
    }
    // Check if player won
    else if ((playerSelection === "ROCK" && computerSelection === "SCISSORS") ||
    (playerSelection === "PAPER" && computerSelection === "ROCK") ||
    (playerSelection === "SCISSORS" && computerSelection === "PAPER")) {
        playerScore++;
        return `You Won! ${playerSelection} beats ${computerSelection}`
    }
    // Else return player lost
    else {
        computerScore++;
        return `You Lose! ${computerSelection} beats ${playerSelection}`
    }
}

// Main function
function game(playerSelection){
    displayPlayerChoice(playerSelection)
    getComputerChoice();
    displayComputerChoice(computerSelection);
    // console.log(playRound(playerSelection, computerSelection));
    // // Report winner
    // if (playerScore > computerScore) {
    //     console.log("You are the WINNER!");
    // }
    // else if (computerScore > playerScore) {
    //     console.log("You are the LOSER!");
    // }
    // else {
    //     console.log("It is a TIE!");
    // }
}

function displayPlayerChoice(playerSelection) {
    const playerChoice = document.querySelector(".choices .player .choice")
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
    const computerChoice = document.querySelector(".choices .computer .choice")
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

const rockBtn = document.querySelector("#rock-btn");
rockBtn.addEventListener("click", e => game("ROCK"));

const paperBtn = document.querySelector("#paper-btn");
paperBtn.addEventListener("click", e => game("PAPER"));

const scissorsBtn = document.querySelector("#scissors-btn");
scissorsBtn.addEventListener("click", e => game("SCISSORS"));