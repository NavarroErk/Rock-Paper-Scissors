

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"]
    let randomChoice = choices[Math.floor(Math.random() * choices.length)]
    return randomChoice
}
getComputerChoice()
// let playerSelection = prompt("Please choose rock, paper, or scissors")
let playerSelection 
// playerSelection = playerSelection.toLowerCase()

function playRound(playerSelection, computerSelection) {
    playerSelection = prompt("Please choose rock, paper, or scissors.").toLowerCase();computerSelection = getComputerChoice()
    let result = null
    if (playerSelection == computerSelection) {
        result = "It's a tie"
        console.log(result);
        return result
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        result = "You lose"
        console.log(`${result}. ${computerSelection} beats ${playerSelection}`);
        return result
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        result = "You win"
        console.log(`${result}. ${playerSelection} beats ${computerSelection}`);
        return result
    }else if (playerSelection == "scissors" && computerSelection == "rock") {
        result = "You lose"
        console.log(`${result}. ${computerSelection} beats ${playerSelection}`);
        return result
    }else if (playerSelection == "paper" && computerSelection == "rock") {
        result = "You win"
        console.log(`${result}. ${playerSelection} beats ${computerSelection}`);
        return result
    }else if (playerSelection == "rock" && computerSelection == "scissors") {
        result = "You win"
        console.log(`${result}. ${playerSelection} beats ${computerSelection}`);
        return result
    }else if (playerSelection == "paper" && computerSelection == "scissors") {
        result = "You lose"
        console.log(`${result}. ${computerSelection} beats ${playerSelection} `);
        return result
    }
}

// console.log(playRound(playerSelection, getComputerChoice()))
let playerScore = 0;
let computerScore = 0;
function game() {
    for (let i = 0; i < 5; i++) {
        let result = playRound() 
        if (result == "You win") {
            playerScore++;
        } else if (result == "You lose") {
            computerScore++;
        } else if (result == "It's a tie"){
            computerScore++
            playerScore++
        }
    }
    if (playerScore > computerScore) {
        console.log(`You win with a score of ${playerScore}. The loser has a score of ${computerScore}.`);
    } else if (playerScore < computerScore) {
        console.log(`You lose with a score of ${playerScore}. The winner has a score of ${computerScore}.`);
    } else if (playerScore == computerScore) {
        console.log(`You tie with a score of ${playerScore}.`);
    }
}
game()