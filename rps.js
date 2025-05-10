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

function playRound(humanChoice){
    const computerChoice = getComputerChoice()
    let outcome = document.createElement("p")
    if (humanChoice === computerChoice){
        text = ("You tied! Try again!");
    } else if (humanChoice === "rock" && computerChoice === "paper"){
        text = ("You lose! Paper beats rock.");
        computerScore++;
    } else if (humanChoice === "rock" && computerChoice === "scissors"){
        text = ("You win! Rock beats scissors.");
        humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "scissors"){
        text = ("You lose! Scissors beats paper.");
        computerScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock"){
        text = ("You win! Paper beats rock.");
        humanScore++;
    } else if (humanChoice === "scissors" && computerChoice === "rock"){
        text = ("You lose! Rock beats scissors.");
        computerScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper"){
        text = ("You win! scissors beats scissors.");
        humanScore++;
    }
    outcome.textContent = text
    resultsSection.appendChild(outcome)
    runningScore.textContent = ("You: " + humanScore + " Computer: " + computerScore)
    if(humanScore == 5 || computerScore == 5){
        checkWinner()
    }
}

function checkWinner(){
    if (humanScore == computerScore){
        winText.textContent = ("You tied the match!")
    } else if (humanScore > computerScore){
        winText.textContent = ("You won the match!")
    } else {
        winText.textContent = ("You lost the match!")
    }
    buttonRock.remove()
    buttonPaper.remove()
    buttonScissors.remove()
}


const buttonRock = document.getElementById("rock")
const buttonPaper = document.getElementById("paper")
const buttonScissors = document.getElementById("scissors")
const resultsSection = document.getElementById("results")
const runningScore = document.getElementById("score")
const winText = document.getElementById("winner")

buttonRock.addEventListener("click", function() {
    playRound("rock")
})

buttonPaper.addEventListener("click", function() {
    playRound("paper")
})

buttonScissors.addEventListener("click", function() {
    playRound("scissors")
})