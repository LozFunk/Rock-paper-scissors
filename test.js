function getComputerChoice(){
    let output = Math.floor(Math.random()*3)
    if (output == 0){
        return "rock"
    }else if (output == 1){
        return "paper"
    }else{
        return "scissors"
    }
}

const playerSelection = document.querySelectorAll("button");
const results = document.querySelector("#results")
const pScore = document.querySelector("#pScore")
const cScore = document.querySelector("#cScore")

let humanScore = 0
let computerScore = 0

playerSelection.forEach(button => {
    button.addEventListener("click", ()=>{
        const humanChoice = button.textContent.toLowerCase()
        const computerChoice = getComputerChoice()
        playGame(humanChoice, computerChoice)
    })
})



function playGame(humanChoice, computerChoice){

if (
    (humanChoice === computerChoice)
){
    results.textContent = `It's a tie! Computer chose ${computerChoice}`;
} else if (
    (humanChoice === "rock" && computerChoice === "scissors") || 
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
){
    humanScore++;
    results.textContent = `You win! Computer chose ${computerChoice}`;
} else {
    computerScore++;
    results.textContent = `You lose! Computer chose ${computerChoice}`;
}


    pScore.textContent = humanScore
    cScore.textContent = computerScore

    function resetGame(){
        humanScore = 0
        pScore.textContent = humanScore
        computerScore = 0
        cScore.textContent = computerScore

    }

    if (humanScore >= 5) {
        results.textContent += " You won the game!";
        resetGame()
    } else if (computerScore >= 5) {
        results.textContent += " You lost the game!";
        resetGame()
    }

}