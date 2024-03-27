let playerScore = 0;
let ComputerScore = 0;

function getComputerChoice(choices) {
    let index = Math.floor(Math.random() * choices.length);
    return choices[index]
}

function playRound(playerSelection, computerSelection) {
    if (computerSelection === 'rock') {
        if (playerSelection === 'rock') {
            return 0;
        } else if (playerSelection === 'paper') {
            return ++playerScore;
        } else if (playerSelection === 'scissors') {
            return ++ComputerScore;
        }
    } else if (computerSelection == 'paper') {
        if (playerSelection === 'rock') {
            return ++ComputerScore;
        } else if (playerSelection === 'paper') {
            return 0;
        } else if (playerSelection === 'scissors') {
            return ++playerScore;
        }
    } else if (computerSelection === 'scissors') {
        if (playerSelection === 'rock') {
            return ++playerScore;
        } else if (playerSelection === 'paper') {
            return ++ComputerScore;
        } else if (playerSelection === 'scissors') {
            return 0;
        }
    }


}

function playGame(button) {
    if (playerScore >= 5 || ComputerScore >= 5) {
        score.textContent = `You: ${playerScore}\n Computer: ${ComputerScore} Finishd!`;
    } else {
        playRound(button, getComputerChoice(['rock', 'paper', 'scissors']))
        score.textContent = `You: ${playerScore}\n Computer: ${ComputerScore}`;
    }
}

const score = document.createElement("p")
const scoreBoard = document.querySelector('#scoreBoard')
const buttons = document.querySelectorAll('button');
score.textContent = `You: ${playerScore}
Computer: ${ComputerScore}`;
scoreBoard.appendChild(score)


buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playGame(button.id);
    });
});
