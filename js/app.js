/* -------------- Constants --------------*/
const choice = ['rock', 'paper', 'scissors']


/* -------------- Variables --------------*/
let msg
let playerChoice
let computerChoice



/* -------------- Cached Element References --------------*/
const rockBtnEl = document.querySelector('#rock')
console.log(rockBtnEl)
const paperBtnEl = document.querySelector('#paper')
console.log(paperBtnEl)
const scissorsBtnEl = document.querySelector('#scissors')
console.log(scissorsBtnEl)

/* -------------- Functions --------------*/

function getComputerChoice() {
    // generate a random number 0-2
    const randomIndex = Math.floor(Math.random() * choice.length)
 
    // select the item from the array
    return choice[randomIndex]
}

// initialize game state
function play() {
    computerChoice = getComputerChoice()
console.log(computerChoice)
    // after updating state, render to html
    render()

}

play()

// updates our UI/html directly
function render() {

}




/* -------------- Event Listeners --------------*/