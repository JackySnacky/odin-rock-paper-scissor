const RPSARRAY = ["rock", "paper", "scissor"];
const playerSelection = "rock";
const computerSelection = getComputerChoice();

// Debugging
console.log("Player: " + playerSelection + "\nComputer: " + computerSelection);
console.log(playRound(playerSelection, computerSelection));

function getComputerChoice(){
    return RPSARRAY[Math.floor(Math.random() * RPSARRAY.length)];
}

function playRound(playerSelection, computerSelection){
    // case-insensitive the parameter
    playerSelection = playerSelection.toLowerCase();
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