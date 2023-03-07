const RPSARRAY = ["rock", "paper", "scissor"];
// Tracks who wins
let userWin = 0;
let computerWin = 0;
// Start the game
game();
console.log("You win: " + userWin + " times.\nComputer win: " + computerWin);

function getComputerChoice() {
    return RPSARRAY[Math.floor(Math.random() * RPSARRAY.length)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie"
    } else if (playerSelection === "rock") {
        // Rock beats scissor and lose to paper
        if (computerSelection === "scissor") {
            userWin++;
            return "You win! Rock beats scissor."
        } else {
            computerWin++;
            return "You lose! Paper beats Rock."
        }
    } else if (playerSelection === "paper") {
        // Paper beats rock and lose to scissor
        if (computerSelection === "rock") {
            userWin++;
            return "You win! Paper beats rock."
        } else {
            computerWin++;
            return "You lose! Scissor beats paper."
        }
    } else if (playerSelection === "scissor") {
        // Scissor beats paper and lose to rock
        if (computerSelection === "paper") {
            userWin++;
            return "You win! Scissor beats paper"
        } else {
            computerWin++;
            return "You lose! Rock bears scissor"
        }
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        // Ask for user input
        let playerSelection = prompt("rock, paper or scissor");
        // case-insensitive the parameter
        playerSelection = playerSelection.toLowerCase();
        // Gets random selection for computer
        let computerSelection = getComputerChoice();

        // Debugging
        console.log("Player: " + playerSelection + "\nComputer: " + computerSelection);
        // Returns who wins or not
        console.log(playRound(playerSelection, computerSelection));
    }
}