const computerChoiceDisplay = document.getElementById('computer-choice')  //declaring the variable computerChoice by the id in the html doc file that is computer choice
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')

//
const possibleChoices = document.querySelectorAll('button')

//For user choice
let userChoice
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (event) =>{

    userChoice = event.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

//For computer Choice
let computerChoice
function generateComputerChoice() {
    const randomNum = Math.floor(Math.random() * 3) + 1 // or you can use possibleChoices.length which is 3 b/c 3 buttons
    if( randomNum === 1) {
        computerChoice = 'rock'
    }
    if(randomNum === 2) {
        computerChoice = 'paper'
    }
    if(randomNum === 3) {
        computerChoice = 'scissors'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

//results 
let result

function getResult() {
    if(computerChoice === userChoice) {
        result = 'Its a Draw!'
    }
    if(computerChoice === 'rock' && userChoice === "scissors") {
        result = 'you lost!'
    }
    if(computerChoice === 'rock' && userChoice === "paper") {
        result = 'you won!'
    }
    if(computerChoice === 'paper' && userChoice === "rock") {
        result = 'you lost!'
    }
    if(computerChoice === 'paper' && userChoice === "scissors") {
        result = 'you won!'
    }
    if(computerChoice === 'scissors' && userChoice === "paper") {
        result = 'you lost!'
    }
    if(computerChoice === 'scissors' && userChoice === "rock") {
        result = 'you won!'
    }

    resultDisplay.innerHTML = result
}