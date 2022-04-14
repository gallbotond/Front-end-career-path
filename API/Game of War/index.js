let deckId = ''
let remaining = true
let drawCount = 2
let computerScore = 0
let playerScore = 0

const drawBtn = document.getElementById('draw-button')
const imageHolder = document.getElementById('image-holder')
const dataBtn = document.getElementById('data-button')
const remainingCards = document.getElementById('remaining')
const playerScoreTxt = document.getElementById('player-score')
const computerScoreTxt = document.getElementById('computer-score')

drawBtn.classList.add('blocked')

const fetchData = () => {
    fetch('https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/')
        .then(res => res.json())
        .then(data => {
            computerScore = 0
            playerScore = 0

            computerScoreTxt.textContent = computerScore
            playerScoreTxt.textContent = playerScore

            deckId = data.deck_id
            remainingCards.textContent = data.remaining
            // console.log(deckId)

            drawBtn.style.display = "block"
            drawBtn.addEventListener('click', drawCard)
            drawBtn.classList.remove('blocked')

            imageHolder.innerHTML = `
                    <div class="placeholder"></div>
                    <div class="placeholder"></div>
                `
        })
}

const drawCard = () => {
    fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=${drawCount}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)

            computerScore = calculateScore(computerScore, data.cards[0].value)
            playerScore = calculateScore(playerScore, data.cards[1].value)

            playerScoreTxt.textContent = playerScore
            computerScoreTxt.textContent = computerScore

            cardImages = ''
            remainingCards.textContent = data.remaining

            data.cards.map(card => cardImages += `<img src=${card.image} alt="poker card" /><br>`)
            imageHolder.innerHTML = cardImages

            if(data.remaining <= 0 || drawCount > data.remaining)
            {
                if(playerScore == computerScore) {
                    playerScoreTxt.textContent = playerScore + ', Draw!'
                    computerScoreTxt.textContent = computerScore + ', Draw!'
                }
                else if(playerScore > computerScore) {
                    playerScoreTxt.textContent = playerScore + ', Won the game!'
                    computerScoreTxt.textContent = computerScore + ', Lost!'
                }
                else if(playerScore < computerScore) {
                    playerScoreTxt.textContent = playerScore + ', Lost!'
                    computerScoreTxt.textContent = computerScore + ', Won the game!'
                }
                remaining = false
                drawBtn.classList.add('blocked')
                drawBtn.removeEventListener('click', drawCard)
                imageHolder.innerHTML = `
                    <div class="placeholder"></div>
                    <div class="placeholder"></div>
                `
            }
        })
}

dataBtn.addEventListener('click', fetchData)

function calculateScore(currentScore, symbol) {
    switch(symbol) {
        case "KING":
            currentScore += 13
            break
        case "QUEEN":
            currentScore += 12
            break
        case "JACK":
            currentScore += 11
            break
        case "ACE":
            currentScore += 14
            break
        default: 
            currentScore += parseInt(symbol)
    }

    return currentScore;
}

// setTimeout(logger, 2000)

// const logger = () => {
//     console.log("I finally ran!")
// }

// const people = [
//     { name: 'Jack', hasPet: true },
//     { name: 'Jill', hasPet: false },
//     { name: 'Emily', hasPet: true },
//     { name: 'Bob', hasPet: false}
// ]

// const callbackFunction = (array, item) => {
//     if(item) array.push(item)
// }

// const filterArray = (array, callback) => array.filter(item => callback(item))

// console.log(filterArray(people, person => person.hasPet))
