/*----- constants -----*/
const CARD_DECK = [{ cardName: "2-D", value: 2, img: "cards/2-D.svg" }, { cardName: "3-D", value: 3, img: "cards/3-D.svg" },
    { cardName: "4-D", value: 4, img: "cards/2-D.svg" }, { cardName: "5-D", value: 5, img: "cards/5-D.svg" },
    { cardName: "6-D", value: 6, img: "cards/6-D.svg" }, { cardName: "7-D", value: 7, img: "cards/7-D.svg" },
    { cardName: "8-D", value: 8, img: "cards/8-D.svg" }, { cardName: "9-D", value: 9, img: "cards/9-D.svg" },
    { cardName: "10-D", value: 10, img: "cards/10-D.svg" }, { cardName: "J-D", value: 10, img: "cards/J-D.svg" },
    { cardName: "Q-D", value: 10, img: "cards/Q-D.svg" }, { cardName: "K-D", value: 10, img: "cards/K-D.svg" },
    { cardName: "A-D", value: 11, img: "cards/A-D.svg" },
    { cardName: "2-S", value: 2, img: "cards/2-S.svg" }, { cardName: "3-S", value: 3, img: "cards/3-S.svg" },
    { cardName: "4-S", value: 4, img: "cards/4-S.svg" }, { cardName: "5-S", value: 5, img: "cards/5-S.svg" },
    { cardName: "6-S", value: 6, img: "cards/6-S.svg" }, { cardName: "7-S", value: 7, img: "cards/7-S.svg" },
    { cardName: "8-S", value: 8, img: "cards/8-S.svg" }, { cardName: "9-S", value: 9, img: "cards/9-S.svg" },
    { cardName: "10-S", value: 10, img: "cards/10-S.svg" }, { cardName: "J-S", value: 10, img: "cards/J-S.svg" },
    { cardName: "Q-S", value: 10, img: "cards/Q-S.svg" }, { cardName: "K-S", value: 10, img: "cards/K-S.svg" },
    { cardName: "A-S", value: 11, img: "cards/A-S.svg" },
    { cardName: "2-H", value: 2, img: "cards/2-H.svg" }, { cardName: "3-H", value: 3, img: "cards/3-H.svg" },
    { cardName: "4-H", value: 4, img: "cards/4-H.svg" }, { cardName: "5-H", value: 5, img: "cards/5-H.svg" },
    { cardName: "6-H", value: 6, img: "cards/6-H.svg" }, { cardName: "7-H", value: 7, img: "cards/7-H.svg" },
    { cardName: "8-H", value: 8, img: "cards/8-H.svg" }, { cardName: "9-H", value: 9, img: "cards/9-H.svg" },
    { cardName: "10-H", value: 10, img: "cards/10-H.svg" }, { cardName: "J-H", value: 10, img: "cards/J-H.svg" },
    { cardName: "Q-H", value: 10, img: "cards/Q-H.svg" }, { cardName: "K-H", value: 10, img: "cards/K-H.svg" },
    { cardName: "A-H", value: 11, img: "cards/A-H.svg" },
    { cardName: "2-C", value: 2, img: "cards/2-C.svg" }, { cardName: "3-C", value: 3, img: "cards/3-C.svg" },
    { cardName: "4-C", value: 4, img: "cards/4-C.svg" }, { cardName: "5-C", value: 5, img: "cards/5-C.svg" },
    { cardName: "6-C", value: 6, img: "cards/6-C.svg" }, { cardName: "7-C", value: 7, img: "cards/7-C.svg" },
    { cardName: "8-C", value: 8, img: "cards/8-C.svg" }, { cardName: "9-C", value: 9, img: "cards/9-C.svg" },
    { cardName: "10-C", value: 10, img: "cards/10-C.svg" }, { cardName: "J-C", value: 10, img: "cards/J-C.svg" },
    { cardName: "Q-C", value: 10, img: "cards/Q-C.svg" }, { cardName: "K-C", value: 10, img: "cards/K-C.svg" },
    { cardName: "A-C", value: 11, img: "cards/A-C.svg" }

];
console.log(CARD_DECK)
const MAX_SUM = 21
const DEALER_MAX = 17

/*----- app's state (variables) -----*/


const newGameButton = document.getElementById("new-game");


/*----- cached element references -----*/
let dealerSum = document.getElementById("d-sum");
let playerSum = document.getElementById("p-sum");
let gameStatus = document.getElementById("game-status")
let cardImg = document.createElement("img")

/*----- event listeners -----*/
newGameButton.addEventListener("click", init)
    // newgame button
    // hit button
    // stand button


// // /*----- functions -----*/
init()

function init() {
    newCardForDealer
}
// newGame() when click NEW GAme button get 3 random cards 1
// for Dealer 2
// for player,
// update playerSum and dealer sum
// hit() when hit button get a random card
// for player check player sum
// if it is more than 21 check
// if player has an AS player sum = player sum - 10
// if no AS and over 21 DEALER WINS, deactivate
// Stand() when click stand button get a dealer new random card check dealer sum
// if it is less than 17 get another card check
// if it over 21 check delaer has an AS
// if yes delaer sum = dealer sum - 10,
//     if it dealaer sum > 17 check winner
// getNewCard
function getNewCard() {
    const randomInt = Math.floor(Math.random() * CARD_DECK.length)
    return CARD_DECK[randomInt]
}
// newGame
function newCardForDealer() {
    getNewCard()
    const img = document.createElement("img")
    img.src = CARD_DECK[randomInt].img
    document.getElementById("#d-cards").appendChild(img)
}


// // initGame
// // handleClick
// // checkWin
// // checkTie
// function handleClick() {

//     newGame()

//     // } else if (evt.target.innerText === "STAND") {

//     // } else if (evt.target.innerText === "NEW GAME") {
//     //     newGame()
// }



console.log(gameStatus)
console.log(dealerSum)
console.log(playerSum)
console.log(newGameButton)
console.log(getNewCard())