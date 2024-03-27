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
function playGame() {
    let computerScore = 0;
    let playerScore = 0;
    let playerSelection = ''
    let computerSelection = ''

    for (let count = 1; count <= 5; count++) {
        playerSelection = prompt(`select rock,paper or scissors \nRound : ${count} of 5 \n your_score : ${playerScore} \ncomputer_score : ${computerScore}`)
        computerSelection = getComputerChoice(['rock', 'paper', 'scissors']);
        let tempScore = playRound(playerSelection, computerSelection)
        if (tempScore === 1) {
            playerScore += 1;
            console.log(`You won round ${count}  \nyou_select : ${playerSelection} \ncomputer_select : ${computerSelection}`)
        } else if (tempScore === -1) {
            computerScore += 1;
            console.log(`You losed round ${count} \nyou_select : ${playerSelection} \ncomputer_select : ${computerSelection} `)
        } else {
            console.log(`round ${count} is equal \nthe same select : ${playerSelection}`)
        }
    }
    if (playerScore > computerScore) {
        console.log(`You're winner \nyour_score : ${playerScore}\ncomputer_score : ${computerScore}`)
    } else if (playerScore < computerScore) {
        console.log(`You're loser \nyour_score : ${playerScore}\ncomputer_score : ${computerScore}`)
    } else {
        console.log("the score is same :  ${playerScore} ")
    }
}
const playerSelectionButtons = document.querySelectorAll('button');
playerSelectionButtons.forEach((button) =>
    button.addEventListener("click", () => alert(button.id))
);
// playGame()
