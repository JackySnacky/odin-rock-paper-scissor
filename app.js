const RPSARRAY = ["rock", "paper", "scissor"];

function getComputerChoice(){
    return RPSARRAY[Math.floor(Math.random() * RPSARRAY.length)];
}