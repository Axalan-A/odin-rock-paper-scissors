function getRandomInt(max){
    return Math.floor(Math.random() * max)
}

function getComputerChoice(){
    const choice = getRandomInt(3);
    let decision;
    switch(choice){
        case 0:
            decision = "rock";
            break;
        case 1:
            decision = "paper";
            break;
        case 2:
            decision = "scissors"
            break;
    }
    return decision
}

function getHumanChoice(){
    let playerChoice = prompt("Will you throw rock, paper, or scissors?");
    return playerChoice.toLowerCase()
}

let humanScore = 0
let computerScore = 0

function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice){
        console.log("You tied! Try again!");
    } else if (humanChoice === "rock" && computerChoice === "paper"){
        console.log("You lose! Paper beats rock.");
        computerScore++;
    } else if (humanChoice === "rock" && computerChoice === "scissors"){
        console.log("You win! Rock beats scissors.");
        humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "scissors"){
        console.log("You lose! Scissors beats paper.");
        computerScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock"){
        console.log("You win! Paper beats rock.");
        humanScore++;
    } else if (humanChoice === "scissors" && computerChoice === "rock"){
        console.log("You lose! Rock beats scissors.");
        computerScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper"){
        console.log("You win! scissors beats scissors.");
        humanScore++;
    }
}