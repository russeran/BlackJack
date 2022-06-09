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
const state = { pSum: 0, dSum: 0 }
const newGameButton = document.getElementById("new-game");
const hitButton = document.getElementById("hit-button");
const standButton = document.getElementById("stand-button");
const findA = document.querySelectorAll("img")
    /*----- cached element references -----*/
let dealerSum = document.getElementById("d-sum")
let playerSum = document.getElementById("p-sum")
let gameStatus = document.getElementById("game-status")
let playerAceCount = 0
let dealerAceCount = 0

/*----- event listeners -----*/
// newgame button
// hit button
// stand button
newGameButton.addEventListener("click", handleClick)
hitButton.addEventListener("click", handleClick)
standButton.addEventListener("click", handleClick)



// // /*----- functions -----*/

window.onload = function() {
    playerSum.innerText = parseInt(state.pSum)
    dealerSum.innerText = parseInt(state.dSum)

}

function handleClick(evt) {
    // DEAL BUTTON GETS 3 NEW CARDS 2 FOR PLAYER 1 FOR DEALER
    if (evt.target.innerText == "DEAL") {
        if (state.dSum > 0) {
            return
        } else {
            newCardForDealer()
            newCardForPlayer()
            newCardForPlayer()
            checkAceForPlayer
        }
        // HIT BUTTON GET A NEW CARD FOR PLAYER IF PLAYER SUM IS < 21
    } else if (evt.target.innerText === "HIT") {
        if (gameStatus.innerHTML == "PLAYER WINS" || gameStatus.innerHTML == "DEALER WINS" || state.pSum == 0) {
            return
        } else {
            if (playerSum.innerHTML >= MAX_SUM) {
                return
            } else {
                newCardForPlayer()
                checkAceForPlayer()
            }
            if (playerSum.innerHTML > MAX_SUM) { gameStatus.innerHTML = "DEALER WINS" }
        }

        // STAND BUTTON GET NEW CARDS FOR DEALER TILL DEALER SUM IS > 17
    } else if (evt.target.innerText === "STAND") {
        if (gameStatus.innerHTML == "DEALER WINS" || state.pSum == 0) {
            return
        } else {
            if (dealerSum.innerHTML > DEALER_MAX && dealerSum.innerHTML < MAX_SUM && dealerSum.innerHTML < playerSum.innerHTML) { checkAceForDealer() }
            if (dealerSum.innerHTML > DEALER_MAX && dealerSum.innerHTML < MAX_SUM) {
                checkWin()
                return
            }
            while (dealerSum.innerHTML < DEALER_MAX) {
                newCardForDealer()
                checkAceForDealer()
                checkWin()
            }
            if (dealerSum.innerHTML > MAX_SUM) {
                gameStatus.innerHTML = "PLAYER WINS"
            }

        }

    }
}

function checkWin() {
    if (dealerSum.innerHTML > playerSum.innerHTML) {
        gameStatus.innerHTML = "DEALER WINS"
    } else if (dealerSum.innerHTML == playerSum.innerHTML) {
        gameStatus.innerHTML = " TIE "
    } else {
        gameStatus.innerHTML = "PLAYER WINS"
    }
}

function getNewCard() {
    const randomInt = Math.floor(Math.random() * CARD_DECK.length)
    return CARD_DECK[randomInt]
}

function newCardForDealer() {
    const newCard = getNewCard()
    const newCardImg = document.createElement("img")
    newCardImg.src = newCard.img
    document.getElementById("d-cards").appendChild(newCardImg)
    state.dSum = parseInt(newCard.value + state.dSum)
    dealerSum.innerHTML = state.dSum
    if (newCard.value == 11) {
        dealerAceCount = dealerAceCount + 1
    }
}

function newCardForPlayer() {
    const newCardP = getNewCard()
    const newCardImg = document.createElement("img")
    newCardImg.src = newCardP.img
    document.getElementById("p-cards").appendChild(newCardImg)
    state.pSum = parseInt(newCardP.value + state.pSum)
    playerSum.innerHTML = state.pSum
    if (newCardP.value == 11) {
        playerAceCount = playerAceCount + 1
    }
}

function checkAceForPlayer() {
    if (playerSum.innerHTML > 21 && playerAceCount > 0) {
        playerSum.innerHTML = playerSum.innerHTML - 10
    }
}

function checkAceForDealer() {
    if (dealerSum.innerHTML > 21 && playerAceCount > 0) {
        dealerSum.innerHTML = dealerSum.innerHTML - 10
    }
}

console.log(findA)
console.log(gameStatus)
console.log(dealerSum)
console.log(playerSum)
console.log(newGameButton)
console.log(dealerAceCount)
console.log(playerAceCount)
    // console.log(getNewCard())
    // console.log(newCardForDealer())