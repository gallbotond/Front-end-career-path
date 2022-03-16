const startButton = document.querySelector("#start")
const scoreText = document.querySelector("#score")
const grid = document.querySelector(".grid")

const width = 10

let gridElments = []
let currentSnake = [2, 1, 0]
let direction = 1
let appleIndex = 0
let score = 0
let delta = 1000
let timer 

function start() {
    currentSnake.map(pos => gridElments[pos].classList.remove("snake"))
    gridElments[appleIndex].classList.remove("apple")

    clearInterval(timer)
    
    currentSnake = [2, 1, 0]
    direction = 1
    score = 0
    scoreText.textContent = score
    delta = 1000

    generateApples()

    currentSnake.map(pos => gridElments[pos].classList.add("snake"))

    timer = setInterval(move, delta )
}

function createGrid() {
    for (let i = 0; i < width * width; i++) {
        const square = document.createElement('div')
        square.classList.add("tile")
        grid.appendChild(square)
        gridElments.push(square)
    }
}

createGrid()

currentSnake.map(pos => gridElments[pos].classList.add("snake"))

function move() {
    if(
        (currentSnake[0] >= width * width - width && direction === width) ||
        (currentSnake[0] <= width - 1 && direction === -width) ||
        (currentSnake[0] % width === 0 && direction === -1) ||
        (currentSnake[0] % width === width - 1 && direction === 1) ||
        gridElments[currentSnake[0] + direction].classList.contains("snake")
    ) {
        return clearInterval(timer)
    }

    const tail = currentSnake.pop()
    gridElments[tail].classList.remove("snake")

    currentSnake.unshift(currentSnake[0] + direction)

    if(gridElments[currentSnake[0]].classList.contains("apple")) {
       // remove the apple 
       gridElments[currentSnake[0]].classList.remove("apple")
       // grow snake by 1
       gridElments[tail].classList.add("snake")
       // grow snake array
       currentSnake.push(tail)
       // generate new apple
       generateApples()
       // increase the score 
       score ++
       scoreText.textContent = score
       // increase speed 
       clearInterval(timer)
       delta = delta * .9
       timer = setInterval(move, delta)
    }

    gridElments[currentSnake[0]].classList.add("snake")
}

function generateApples() {
    do {
        appleIndex = Math.floor(Math.random() * gridElments.length + 1)
    } while(gridElments[appleIndex].classList.contains("apple"))

    gridElments[appleIndex].classList.add("apple")
}

generateApples()

function control(e) {
    switch(e.keyCode) {
        case 37:
            direction = -1
            break
        case 38:
            direction = -10
            break
        case 39:
            direction = 1
            break
        case 40:
            direction = 10
            break
        default:
            console.log("invalid")
            break
    }
}

document.addEventListener("keydown", control)
startButton.addEventListener("click", start)