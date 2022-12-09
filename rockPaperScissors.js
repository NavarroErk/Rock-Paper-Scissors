

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"]
    let randomChoice = choices[Math.floor(Math.random() * choices.length)]
    return randomChoice
}
getComputerChoice()

function singleRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice().toLowerCase()
    if (playerSelection == computerSelection) {
        console.log("It's a tie");
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        console.log("You lose. Paper beats rock.");
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        console.log("You win. Scissors beats paper.");
    }else if (playerSelection == "scissors" && computerSelection == "rock") {
        console.log("You lose. Rock beats scissors.");
    }else if (playerSelection == "paper" && computerSelection == "rock") {
        console.log("You win. Paper beats rock.");
    }else if (playerSelection == "rock" && computerSelection == "scissors") {
        console.log("You win. Rock beats scissors.");
    }else if (playerSelection == "paper" && computerSelection == "scissors") {
        console.log("You lose. Scissors beats paper.");
    }
}
let playerSelection = prompt("Please choose rock, paper, or scissors")
playerSelection = playerSelection.toLowerCase()
singleRound(playerSelection, getComputerChoice())