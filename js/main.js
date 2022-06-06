/*----- constants -----*/
const CARD_DECK = [];
const MAX_SUM = 21
const DEALER_MAX = 17

/*----- app's state (variables) -----*/


const gameButtons = document.querySelectorAll("button");


/*----- cached element references -----*/
let dealerSum = document.getElementById("d-sum");
let playerSum = document.getElementById("p-sum");
let gameStatus = document.getElementById("game-status")

/*----- event listeners -----*/
// newgame button
// hit button
// stand button

// gameButtons.addEventlistener("click", handleClick)

// // /*----- functions -----*/
// getNewCard
// newGame
// initGame
// handleClick
// checkWin
// checkTie
function handleClick(evt) {
    if (evt.target.innerText === "HIT") {

    } else if (evt.target.innerText === "STAND") {

    } else if (evt.target.innerText === "NEW GAME") {
        newGame()
    }




}


console.log(gameStatus)
console.log(dealerSum)
console.log(playerSum)
console.log(gameButtons)