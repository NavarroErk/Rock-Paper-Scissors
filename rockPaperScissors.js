

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"]
    let randomChoice = choices[Math.floor(Math.random() * choices.length)]
    return randomChoice
}
getComputerChoice()
// let playerSelection = prompt("Please choose rock, paper, or scissors")
let playerSelection 
// playerSelection = playerSelection.toLowerCase()

let rock = document.getElementById("rockSelection");
    rock.addEventListener("click", () => {
    playRound("rock", getComputerChoice)
    })

let paper = document.getElementById("paperSelection");
    paper.addEventListener("click", () => {
    playRound("paper", getComputerChoice)
    })

let scissors = document.querySelector("#scissorsSelection");
    scissors.addEventListener("click", () => {
    playRound("scissors", getComputerChoice)
})

function playRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice()
    let result
    let outputDiv = document.getElementById("outputDiv")
    let para = document.createElement("p")
    para.setAttribute("id", "output")
    outputDiv.appendChild(para)
    let paraOutput = document.getElementById("output")
    if (playerSelection == computerSelection) {
        result = `It's a tie. You both selected ${playerSelection}`
        paraOutput.textContent = result
        return result
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        result = `You lose. ${computerSelection} beats ${playerSelection}`
        paraOutput.textContent = result
        return result
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        result = `You win. ${playerSelection} beats ${computerSelection}`
        paraOutput.textContent = result
        return result
    }else if (playerSelection == "scissors" && computerSelection == "rock") {
        result = `You lose. ${computerSelection} beats ${playerSelection}`
        paraOutput.textContent = result
        return result
    }else if (playerSelection == "paper" && computerSelection == "rock") {
        result = `You win. ${playerSelection} beats ${computerSelection}`
        paraOutput.textContent = result
        return result
    }else if (playerSelection == "rock" && computerSelection == "scissors") {
        result = `You win. ${playerSelection} beats ${computerSelection}`
        paraOutput.textContent = result
        return result
    }else if (playerSelection == "paper" && computerSelection == "scissors") {
        result = `You lose. ${computerSelection} beats ${playerSelection}`
        paraOutput.textContent = result
        return result
    }
}

// console.log(playRound(playerSelection, getComputerChoice()))

/* 
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
*/
