function getComputerChoice() {

    let RNG = Math.random();
    let compChoice;

    if (RNG < .33) {
        return compChoice = "Rock";
    }
    else if (RNG > .33 && RNG < .66) {
        return compChoice = "Paper";
    }
    else {
        return compChoice = "Scissors";
    }

}

function getHumanChoice() {
    let humanChoice;
    return humanChoice = prompt("Enter your selection:");
}


function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toUpperCase();
        computerChoice = computerChoice.toUpperCase();

        if (humanChoice === computerChoice) {
            console.log("It is a tie!")
        }
        else if (humanChoice == "ROCK" && computerChoice == "SCISSORS") {
            console.log("You win this round! Rock beats Scissors!");
            humanScore++;
        }
        else if (humanChoice == "PAPER" && computerChoice == "ROCK") {
            console.log("You win! Paper beats rock!");
            humanScore++;
        }
        else if (humanChoice == "SCISSORS" && computerChoice == "PAPER") {
            console.log("You win! Scissors beats paper!");
            humanScore++;
        }
        else {
            console.log("You lost! " + computerChoice + " beats " + humanChoice + "!");
            computerScore++;
        }
    }

    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }

    if (humanScore > computerScore) {
        console.log("You win!");
        console.log("Your Score: " + humanScore);
        console.log("Computer Score: " + computerScore);
    }
    else if (computerScore > humanScore) {
        console.log("You lose!");
        console.log("Your Score: " + humanScore);
        console.log("Computer Score: " + computerScore);
    }
    else {
        console.log("It is a tie!");
        console.log("Your Score: " + humanScore);
        console.log("Computer Score: " + computerScore);
    }
}

playGame();