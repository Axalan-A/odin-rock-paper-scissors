function getRandomInt(max){
    return Math.floor(Math.random() * max)
}

function getComputerChoice(){
    const choice = getRandomInt(3);
    let decision;
    switch(choice){
        case 0:
            decision = "Rock";
            break;
        case 1:
            decision = "Paper";
            break;
        case 2:
            decision = "Scisors"
            break;
    }
    return decision
}

console.log(getComputerChoice())