/*----- constants -----*/
const CARD_DECK = [{ value: 2, img: "cards/2-D.svg" }, { value: 3, img: "cards/3-D.svg" },
    { value: 4, img: "cards/4-D.svg" }, { value: 5, img: "cards/5-D.svg" },
    { value: 6, img: "cards/6-D.svg" }, { value: 7, img: "cards/7-D.svg" },
    { value: 8, img: "cards/8-D.svg" }, { value: 9, img: "cards/9-D.svg" },
    { value: 10, img: "cards/10-D.svg" }, { value: 10, img: "cards/J-D.svg" },
    { value: 10, img: "cards/Q-D.svg" }, { value: 10, img: "cards/K-D.svg" },
    { value: 11, img: "cards/A-D.svg" },
    { value: 2, img: "cards/2-S.svg" }, { value: 3, img: "cards/3-S.svg" },
    { value: 4, img: "cards/4-S.svg" }, { value: 5, img: "cards/5-S.svg" },
    { value: 6, img: "cards/6-S.svg" }, { value: 7, img: "cards/7-S.svg" },
    { value: 8, img: "cards/8-S.svg" }, { value: 9, img: "cards/9-S.svg" },
    { value: 10, img: "cards/10-S.svg" }, { value: 10, img: "cards/J-S.svg" },
    { value: 10, img: "cards/Q-S.svg" }, { value: 10, img: "cards/K-S.svg" },
    { value: 11, img: "cards/A-S.svg" },
    { value: 2, img: "cards/2-H.svg" }, { value: 3, img: "cards/3-H.svg" },
    { value: 4, img: "cards/4-H.svg" }, { value: 5, img: "cards/5-H.svg" },
    { value: 6, img: "cards/6-H.svg" }, { value: 7, img: "cards/7-H.svg" },
    { value: 8, img: "cards/8-H.svg" }, { value: 9, img: "cards/9-H.svg" },
    { value: 10, img: "cards/10-H.svg" }, { value: 10, img: "cards/J-H.svg" },
    { value: 10, img: "cards/Q-H.svg" }, { value: 10, img: "cards/K-H.svg" },
    { value: 11, img: "cards/A-H.svg" },
    { value: 2, img: "cards/2-C.svg" }, { value: 3, img: "cards/3-C.svg" },
    { value: 4, img: "cards/4-C.svg" }, { value: 5, img: "cards/5-C.svg" },
    { value: 6, img: "cards/6-C.svg" }, { value: 7, img: "cards/7-C.svg" },
    { value: 8, img: "cards/8-C.svg" }, { value: 9, img: "cards/9-C.svg" },
    { value: 10, img: "cards/10-C.svg" }, { value: 10, img: "cards/J-C.svg" },
    { value: 10, img: "cards/Q-C.svg" }, { value: 10, img: "cards/K-C.svg" },
    { value: 11, img: "cards/A-C.svg" }

]
console.log(CARD_DECK)
const MAX_SUM = 21
const DEALER_MAX = 17

/*----- app's state (variables) -----*/
const state = { pSum: 0, dSum: 0 }
const newGameButton = document.getElementById("new-game");
const hitButton = document.getElementById("hit-button");
const standButton = document.getElementById("stand-button");
const hiddenCard = document.getElementById("hcard").style

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

        if (state.dSum > 0 || hiddenCard.display == "inline-block") {
            return
        } else {
            hiddenCard.display = "inline-block"
            newCardForDealer()
            newCardForPlayer()
            newCardForPlayer()
            checkAceForPlayer()
        }
        // HIT BUTTON GET A NEW CARD FOR PLAYER IF PLAYER SUM IS < 21
    } else if (evt.target.innerText === "HIT") {
        if (gameStatus.innerHTML != "PLAY" || state.pSum == 0 || playerSum.innerHTML == MAX_SUM) {
            return
        }

        if (playerSum.innerHTML < MAX_SUM) {
            newCardForPlayer()
            checkAceForPlayer()
        }
        if (playerSum.innerHTML > MAX_SUM) {
            checkAceForPlayer()
            gameStatus.innerHTML = "DEALER WINS"

        }

    } else if (evt.target.innerText === "STAND") {
        if (gameStatus.innerHTML == "DEALER WINS" || state.pSum == 0) {
            return
        } else {
            hiddenCard.display = "none"
            if (dealerSum.innerHTML > DEALER_MAX && dealerSum.innerHTML <= MAX_SUM) {
                checkWin()
                return
            }
            while (dealerSum.innerHTML < DEALER_MAX) {
                newCardForDealer()
                checkAceForDealer()
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
        playerAceCount = playerAceCount - 1
    }
}

function checkAceForDealer() {
    if (dealerSum.innerHTML > 21 && dealerAceCount > 0) {
        dealerSum.innerHTML = dealerSum.innerHTML - 10
        dealerAceCount = dealerAceCount - 1
    }
}

console.log(gameStatus)
console.log(dealerSum)
console.log(playerSum)
console.log(newGameButton)
console.log(dealerAceCount)
console.log(playerAceCount)
    // console.log(getNewCard())
    // console.log(newCardForDealer())