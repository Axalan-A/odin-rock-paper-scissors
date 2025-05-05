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
            decision = "scisors"
            break;
    }
    return decision
}

function getHumanChoice(){
    let playerChoice = prompt("Will you throw rock, paper, or scissors?");
    return playerChoice.toLowerCase()
}

console.log(getHumanChoice())