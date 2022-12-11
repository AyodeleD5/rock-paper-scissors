
function getComputerChoice() {
    let computerSelection = ['rock', 'scissors', 'paper'];
    return computerSelection[Math.floor(Math.random() * computerSelection.length)];
}

function playRound(playerSelection, computerSelection) {
    if(computerSelection === playerSelection) {
        return "Draw";
    }else if(computerSelection === 'rock'){
        if(playerSelection === "paper"){
            return "You Won! paper beats rock";
        }else if(playerSelection === "scissors"){
            return "You Lost! rock beats scissors";
        }
    }else if(computerSelection === 'scissors'){
        if(playerSelection === 'paper') {
            return "You Lost! scissors beats paper";
        }else if(playerSelection === 'rock'){
            return "You Won! rock beats scissors";
        }
    }else if(computerSelection === 'rock'){
        if(playerSelection === 'paper') {
            return "You Won! paper beats rock";
        }else if(playerSelection === 'scissors'){
            return "You Lost! rock beats scissors";
        }
    }
}  

const computerSelection = getComputerChoice();
const playerSelection = prompt().toLocaleLowerCase();

//for(let i = 0; i < 5; i++){
  //  function game(){
    //    return playRound(playerSelection, computerSelection);
    //}
//}
//console.log(game())


console.log(playRound(playerSelection, computerSelection));
