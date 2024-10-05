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


function playGame() {

    function playRound() {

        let pc = getHumanChoice();
        let npc = getComputerChoice();

        if (pc === "rock" && npc === "paper") {
            computerScore++;
            return "You lose! Paper Beats Rock!";
        }
        else if (pc === "rock" && npc === "scissors") {
            humanScore++;
            return "You win! Rock Beats Scissors!";
        }
        else if (pc === "rock" && npc === "rock") {
            return "It's a tie! Both players chose Rock!";
        }
        else if (pc === "paper" && npc === "rock") {
            humanScore++;
            return "You win! Paper Beats Rock!";
        }
        else if (pc === "paper" && npc === "scissors") {
            computerScore++;
            return "You lose! Scissors beats Paper!"
        }
        else if (pc === "paper" && npc === "paper") {
            return "It's a tie! Both players chose Paper!"
        }
        else if (pc === "scissors" && npc === "rock") {
            computerScore++;
            return "You lose! Rock beats Scissors!"
        }
        else if (pc === "scissors" && npc === "paper") {
            humanScore++;
            return "You win! Scissors beats Paper!"
        }
        else if (pc === "scissors" && npc === "scissors") {
            return "It's a tie! Both players chose Scissors!"
        }
    }

    // Variables for Player's Scores
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i <= 5; i++) {
        if (i < 5) {
            let round = playRound();
        }
        else if (i === 5) {
            if (humanScore > computerScore) {
                console.log("You Win");
                console.log(`Your Score: ${humanScore}`);
                console.log(`Computer Score: ${computerScore}`);
            }
            else if (computerScore > humanScore) {
                console.log("You lose");
                console.log(`Your Score: ${humanScore}`);
                console.log(`Computer Score: ${computerScore}`);
            }
            else if (computerScore === humanScore) {
                console.log("There is a tie!");
            }
        }
    }
}

let round = playGame();