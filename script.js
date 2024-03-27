function getComputerChoice(choices) {
    let index = Math.floor(Math.random() * choices.length);
    return choices[index]
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    computerSelection = computerSelection.toLowerCase()
    if (computerSelection === 'rock') {
        if (playerSelection === 'rock') {
            return 0
        } else if (playerSelection === 'paper') {
            return 1
        } else if (playerSelection === 'scissors') {
            return -1
        }
    } else if (computerSelection == 'paper') {
        if (playerSelection === 'rock') {
            return -1
        } else if (playerSelection === 'paper') {
            return 0
        } else if (playerSelection === 'scissors') {
            return 1
        }
    } else if (computerSelection === 'scissors') {
        if (playerSelection === 'rock') {
            return 1
        } else if (playerSelection === 'paper') {
            return -1
        } else if (playerSelection === 'scissors') {
            return 0
        }
    }


}

const playerSelectionButtons = document.querySelectorAll('button');
playerSelectionButtons.forEach((button) =>
    button.addEventListener("click", () => playRound(button.id,))
);
// playGame()
