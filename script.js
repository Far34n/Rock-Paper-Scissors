function getComputerChoice(choices) {
    let index = Math.floor(Math.random() * choices.length);
    return choices[index]
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    computerSelection = computerSelection.toLowerCase()
    if (computerSelection === 'rock') {
        if (playerSelection === 'rock') {
            return '='
        } else if (playerSelection === 'paper') {
            return 'you win'
        } else if (playerSelection === 'scissors') {
            return 'you lose'
        }
    } else if (computerSelection == 'paper') {
        if (playerSelection === 'rock') {
            return 'you lose'
        } else if (playerSelection === 'paper') {
            return '='
        } else if (playerSelection === 'scissors') {
            return 'you win'
        }
    } else if (computerSelection === 'scissors') {
        if (playerSelection === 'rock') {
            return 'you win'
        } else if (playerSelection === 'paper') {
            return 'you lose'
        } else if (playerSelection === 'scissors') {
            return '='
        }
    }


}

const playerSelection = 'rock';
const computerSelection = getComputerChoice(['rock', 'paper', 'scissors']);
console.log(computerSelection)
console.log(playRound(playerSelection, computerSelection));