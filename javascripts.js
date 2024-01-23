let playerScore = 0;
let computerScore = 0;
let computerSelection;
let playerSelection;
const CHOICELIST = ["ROCK", "PAPER", "SCISSORS"];


// Generate Random Computer Choice
function getComputerChoice() {
    computerSelection = CHOICELIST[(Math.floor(Math.random() * CHOICELIST.length))];
}


// Get Player Choice
function getPlayerChoice() {
    playerSelection = prompt("Enter Rock, Paper or Scissors").toUpperCase();
    // Check invalid input
    if (!(CHOICELIST.includes(playerSelection))) {
        console.warn("Invalid Input! Try Again.");
        return getPlayerChoice()
    } 
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
function game(){
    // Loop the game 5 times
    for (let i=0; i < 5; i++) {
        getComputerChoice();
        getPlayerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
    // Report winner
    if (playerScore > computerScore) {
        console.log("You are the WINNER!");
    }
    else if (computerScore > playerScore) {
        console.log("You are the LOSER!");
    }
    else {
        console.log("It is a TIE!");
    }
}


game()