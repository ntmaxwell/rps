// Global Variables for Player's Scores

let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {

    let compChoice = (Math.floor(Math.random() * 3));

    switch(compChoice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
        default:
            console.log("This should never happen");
    }
}

function getHumanChoice() {

    let userChoice = prompt("Choose Rock, Paper, or Scissors:");

    switch(userChoice.toLowerCase()) {
        case "rock":
            return "rock";
        case "paper":
            return "paper";
        case "scissors":
            return "scissors";
        default:
            console.log("Invalid choice. Please choose Rock, Paper, or Scissors.");
    }
}

function playRound(getHumanChoice, getComputerChoice) {

    if (pc === "rock" && npc === "paper") {
        return "You lose! Paper Beats Rock!";
    }
    else if (pc === "rock" && npc === "scissors") {
        return "You win! Rock Beats Scissors!";
    }
    else if (pc === "rock" && npc === "rock") {
        return "It's a tie! Both players chose Rock!";
    }
    else if (pc === "paper" && npc === "rock") {
        return "You win! Paper Beats Rock!";
    }
    else if (pc === "paper" && npc === "scissors") {
        return "You lose! Scissors beats Paper!"
    }
    else if (pc === "paper" && npc === "paper") {
        return "It's a tie! Both players chose Paper!"
    }
    else if (pc === "scissors" && npc === "rock") {
        return "You lose! Rock beats Scissors!"
    }
    else if (pc === "scissors" && npc === "paper") {
        return "You win! Scissors beats Paper!"
    }
    else if (pc === "scissors" && npc === "scissors") {
        return "It's a tie! Both players chose Scissors!"
    }
}

let pc = getHumanChoice();
let npc = getComputerChoice();
let round = playRound();

console.log(round);