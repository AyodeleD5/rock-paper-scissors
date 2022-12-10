
function getComputerChoice() {
    let computerSelection = ['rock', 'scissors', 'paper']
    return computerSelection[Math.floor(Math.random() * computerSelection.length)]
}

function playRound(playerSelection, computerSelection) {
    if(computerSelection == playerSelection) {
        return "Draw";
    }else if(computerSelection == 'rock'){
        if(playerSelection == "paper"){
            return "You Won! paper beats rock";
        }else if(playerSelection == "scissors"){
            return "You Lost! rock beats scissors";
        }
    }else if(computerSelection == 'scissors'){
        if(playerSelection == 'paper') {
            return "You Lost! scissors beats paper";
        }else if(playerSelection == 'rock'){
            return "You Won! rock beats scissors";
        }
    }else if(computerSelection == 'rock'){
        if(playerSelection == 'paper') {
            return "You Won! paper beats rock";
        }else if(playerSelection == 'scissors'){
            return "You Lost! rock beats scissors"
        }
    }
}  

const computerSelection = getComputerChoice();
const playerSelection = prompt().toLocaleLowerCase();
console.log(computerSelection,playerSelection);
console.log()

/*
let playerSelectFrom = prompt();
if computerSelectFrom == playerSelectFrom {
    console.log('Draw');
}else if computerSelectFrom {

}


    if(computerSelectFrom === playerSelectFrom) {
        return "You draw"
    } else if(computerSelectFrom === 'rock' && playerSelectFrom === 'scissors') {
        return "You Lose! Rock beats Scissors";
    }else if(computerSelectFrom === 'Scissors' && playerSelectFrom === 'Rock') {
        return "You win! Rock beats Scissors";
    } else if(computerSelectFrom === 'paper' && playerSelectFrom === 'scissors') {
        return "You win! Scissors beats paper";
    } else if(computerSelectFrom === 'rock' && playerSelectFrom === 'paper') {
        return "You Win! Paper beat rock";
    } else if(computerSelectFrom === 'scissors' && playerSelectFrom === 'paper') {
        return "You Lose! Scissors beats Paper";
    } else if(computerSelectFrom === 'paper' && playerSelectFrom === 'rock') {
        return "You Lose! Paper beats rock";
    }
        


const playerSelectFrom = ["rock", "scissors", "paper"];
computerSelectFrom = getComputerChoice();
console.log(playRound(computerSelectFrom, playerSelectFrom)); 

function game() {
    for(let i = 0; i < 5; i++) {
        return playRound()
    }
}
console.log(game())







console.log(getComputerChoice());

*/
