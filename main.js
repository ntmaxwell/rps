function getComputerChoice() {

    let compChoice = (Math.floor(Math.random() * 3));

    switch(compChoice) {
        case 0:
            console.log("Rock");
            break;
        case 1:
            console.log("Paper");
            break;
        case 2:
            console.log("Scissors");
            break;
        default:
            console.log("This should never happen");
    }
}

let ComputerChoice = getComputerChoice();

console.log(ComputerChoice);