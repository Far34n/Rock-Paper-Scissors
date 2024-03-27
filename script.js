let playerScore = 0;
let ComputerScore = 0;

function getComputerChoice(choices) {
    let index = Math.floor(Math.random() * choices.length);
    return choices[index]
}

function playRound(playerSelection, computerSelection) {
    if (computerSelection === 'rock') {
        if (playerSelection === 'rock') {
            return 'Draw';
        } else if (playerSelection === 'paper') {
            playerScore++;
            return 'Won';
        } else if (playerSelection === 'scissors') {
            ComputerScore++;
            return 'Lose';
        }
    } else if (computerSelection == 'paper') {
        if (playerSelection === 'rock') {
            ComputerScore++;
            return 'Lose';
        } else if (playerSelection === 'paper') {
            return 'Draw';
        } else if (playerSelection === 'scissors') {
            playerScore++;
            return 'Won';
        }
    } else if (computerSelection === 'scissors') {
        if (playerSelection === 'rock') {
            playerScore++;
            return 'Won';
        } else if (playerSelection === 'paper') {
            ComputerScore++;
            return 'Lose';
        } else if (playerSelection === 'scissors') {
            return 'Draw';
        }
    }


}

function playGame(button) {
    if (playerScore >= 5 || ComputerScore >= 5) {
        score.textContent = `You : ${playerScore} Comp: ${ComputerScore} (Finished!) `;
    } else {
        let res = playRound(button, getComputerChoice(['rock', 'paper', 'scissors']))
        score.textContent = `You : ${playerScore} Comp: ${ComputerScore} (${res})`;
    }
}

const score = document.createElement("p")
const scoreBoard = document.querySelector('#scoreBoard')
const buttons = document.querySelectorAll('img');
score.textContent = `You : ${playerScore} Comp: ${ComputerScore}`;
scoreBoard.appendChild(score)


buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playGame(button.id);
    });
});
