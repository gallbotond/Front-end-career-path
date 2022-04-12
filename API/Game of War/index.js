let deckId = ''
let remaining = true
let drawCount = 7

const drawBtn = document.getElementById('draw-button')
const imageHolder = document.getElementById('image-holder')

const fetchData = () => {
    fetch('https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/')
        .then(res => res.json())
        .then(data => {
            deckId = data.deck_id
            console.log(deckId)
            if(deckId && remaining) {
                drawBtn.style.display = "block"
            }
        })
}

const logger = () => {
    console.log("I finally ran!")
}

const drawCard = () => {
    fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=${drawCount}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            cardImages = ''
            data.cards.map(card => cardImages += `<img src=${card.image} alt="poker card" />`)
            imageHolder.innerHTML = cardImages
            if(data.remaining <= 0 || drawCount > data.remaining)
            {
                remaining = false
                drawBtn.style.display = "none"
                return
            }
        })
}

document.getElementById('data-button').addEventListener('click', fetchData)
setTimeout(logger, 2000)

drawBtn.addEventListener('click', drawCard)

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
