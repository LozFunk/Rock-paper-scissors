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
console.log(getComputerChoice())

function getHumanChoice(){
    let input = prompt("Please choose your weapon. Rock, paper or scissors?").toLowerCase()
    return input
}

console.log(getHumanChoice())

let humanScore = 0
let computerScore = 0

function playRound(humanChoice, computerChoice){
    if (
        (humanChoice == "rock" && computerChoice == "rock") ||
        (humanChoice == "paper" && computerChoice == "paper") ||
        (humanChoice == "scissors" && computerChoice == "scissors")
    ){
        console.log(`It's a tie, Computer choose ${computerChoice}`)
        }else if (
        (humanChoice == "rock" && computerChoice == "scissors")|| 
        (humanChoice == "paper" && computerChoice == "rock") ||
        (humanChoice == "scissors" && computerChoice == "paper") 
    ){
        humanScore++
        console.log(`You win!! computer choose ${computerChoice}`)
        
}else {
    computerScore++
    console.log(`You lose!! Computer choose ${computerChoice}`)
}
}

const humanSelection = getHumanChoice()
const computerSelection = getComputerChoice()

playRound(humanSelection, computerSelection)
console.log(`Your score: ${humanScore} | Computer score: ${computerScore} `)

