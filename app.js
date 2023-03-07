const RPSARRAY = ["rock", "paper", "scissor"];
// Start the game
game();

function getComputerChoice() {
    return RPSARRAY[Math.floor(Math.random() * RPSARRAY.length)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie"
    } else if (playerSelection === "rock") {
        // Rock beats scissor and lose to paper
        if (computerSelection === "scissor") {
            return "You win! Rock beats scissor."
        } else {
            return "You lose! Paper beats Rock."
        }
    } else if (playerSelection === "paper") {
        // Paper beats rock and lose to scissor
        if (computerSelection === "rock") {
            return "You win! Paper beats rock."
        } else {
            return "You lose! Scissor beats paper."
        }
    } else if (playerSelection === "scissor") {
        // Scissor beats paper and lose to rock
        if (computerSelection === "paper") {
            return "You win! Scissor beats paper"
        } else {
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