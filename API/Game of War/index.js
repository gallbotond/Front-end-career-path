let deckId = ''
let remaining = true
let drawCount = 2

const drawBtn = document.getElementById('draw-button')
const imageHolder = document.getElementById('image-holder')
const dataBtn = document.getElementById('data-button')

drawBtn.classList.add('blocked')

const fetchData = () => {
    fetch('https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/')
        .then(res => res.json())
        .then(data => {
            deckId = data.deck_id
            console.log(deckId)
            drawBtn.style.display = "block"
            drawBtn.addEventListener('click', drawCard)
            drawBtn.classList.remove('blocked')
        })
}

const drawCard = () => {
    fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=${drawCount}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            cardImages = ''
            data.cards.map(card => cardImages += `<img src=${card.image} alt="poker card" /><br>`)
            imageHolder.innerHTML = cardImages
            if(data.remaining <= 0 || drawCount > data.remaining)
            {
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
