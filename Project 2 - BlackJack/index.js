const message = document.querySelector('#message')
const cards = document.querySelector('#cards')
const sumDisplay = document.querySelector('#sum')
const startButton = document.querySelector('#startButton')
const newCardButton = document.querySelector('#newCardButton')

let sum = 0;
let finished = false;
let cardsArray = []

function newCard() {
    let num = Math.floor(Math.random() * 13) + 1

    return num > 10 ? 10 : num === 1 ? 11 : num;
}

function drawCard() {
    if(finished) return
    let card = newCard()

    sum += card;
    finished = sum >= 21;

    cardsArray.push(card)

    textRender()
}

function startGame() {
    cardsArray = []
    sum = 0;
    finished = false;

    textRender()
}

function textRender() {
    newCardButton.style.background = finished ? "grey" : "yellow"
    newCardButton.style.color = finished ? "black" : "green"
    startButton.textContent = finished ? 'retry?' : 'start game'
    cards.textContent = 'Cards: ' + cardsArray.map(x => ' ' + x)
    sumDisplay.textContent = "Sum of cards: " + sum
    message.textContent = sum === 21 ? "You have a blackjack"
                        : sum > 21 ? "You are out of the game!" 
                        : "Please draw a new card"
}