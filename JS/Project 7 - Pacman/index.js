 const width = 28
 const grid = document.querySelector(".grid")
 const scoreText = document.querySelector(".score")

 let squares = []
 let currentPacmanIndex = 490
 let score = 0

 const layout = [
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1, 
    1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1, 
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1, 
    1,3,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,3,1, 
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1, 
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1, 
    1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1, 
    1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1, 
    1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1, 
    1,1,1,1,1,1,0,1,1,4,4,4,4,4,4,4,4,4,4,1,1,0,1,1,1,1,1,1, 
    1,1,1,1,1,1,0,1,1,4,1,1,1,2,2,1,1,1,4,1,1,0,1,1,1,1,1,1, 
    1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1, 
    4,4,4,4,4,4,0,0,0,4,1,2,2,2,2,2,2,1,4,0,0,0,4,4,4,4,4,4, 
    1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1, 
    1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1, 
    1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1, 
    1,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,1, 
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1, 
    1,3,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,3,1,
    1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1, 
    1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1, 
    1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,
    1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1, 
    1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1, 
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1, 
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
 ]

 function createBoard() {
     for (let index = 0; index < layout.length; index++) {
        const square = document.createElement("div")
        grid.appendChild(square)
        squares.push(square)

        if(layout[index] === 0) {
            square.classList.add("pac-dot")
        }
        else if(layout[index] === 1) {
            square.classList.add("wall")
        }
        else if(layout[index] === 3) {
            square.classList.add("power-pellet")
        }
        else if(layout[index] === 2) {
            square.classList.add("ghost-lair")
        }
     }
 }

 createBoard()

squares[currentPacmanIndex].classList.add('pacman')

function control(e) {
    squares[currentPacmanIndex].classList.remove("pacman")

    if(e.key == "ArrowDown") {
        // console.log("pressed down")
        if(
            currentPacmanIndex < width * width - width 
            && !squares[currentPacmanIndex + width].classList.contains("wall")
            && !squares[currentPacmanIndex + width].classList.contains("ghost-lair")
        ) 
            currentPacmanIndex += width
    } 
    else if(e.key === "ArrowUp") {
        // console.log("pressed up")
        if(
            currentPacmanIndex > width
            && !squares[currentPacmanIndex - width].classList.contains("wall")
            && !squares[currentPacmanIndex - width].classList.contains("ghost-lair")
        ) 
            currentPacmanIndex -= width
    }
    else if(e.key === "ArrowLeft") {
        // console.log("pressed left")
        if(
            currentPacmanIndex % width !== 0
            && !squares[currentPacmanIndex - 1].classList.contains("wall")
            && !squares[currentPacmanIndex - 1].classList.contains("ghost-lair")
        )
            currentPacmanIndex --
        if(currentPacmanIndex === 364) {
            currentPacmanIndex = 391
        }
    }
    else if(e.key === "ArrowRight") {
        // console.log("pressed right")
        if(
            currentPacmanIndex % width !== width - 1
            && !squares[currentPacmanIndex + 1].classList.contains("wall")
            && !squares[currentPacmanIndex + 1].classList.contains("ghost-lair")
        ) 
            currentPacmanIndex ++
        if(currentPacmanIndex === 391) {
            currentPacmanIndex = 364
        }
    }

    squares[currentPacmanIndex].classList.add("pacman")
    pointEaten()
    powerPelletEaten()
    checkGameOver()
    checkGameWon()
}

document.addEventListener('keydown', control)

function pointEaten() {
    if(squares[currentPacmanIndex].classList.contains("pac-dot")) {
        squares[currentPacmanIndex].classList.remove("pac-dot")
        score ++
        scoreText.textContent = score
    }
}

class Ghost {
    constructor(name, speed, startIndex) {
        this.name = name
        this.speed = speed
        this.startIndex = startIndex
        this.currentIndex = startIndex
        this.isScared = false
        this.timerID = NaN
    }
}

const ghosts = [
    new Ghost('blinky', 250, 348),
    new Ghost('pinky', 400, 376),
    new Ghost('inky', 300, 351),
    new Ghost('clyde', 500, 379)
]

// drawing ghosts onto the grid
ghosts.map(ghost => squares[ghost.startIndex].classList.add(ghost.name, 'ghost'))

// moving the ghosts
ghosts.map(ghost => moveGhosts(ghost))

function moveGhosts(ghost) {
    ghost.timerID = setInterval(() => {
    // console.log('moved ghosts')
    const directions = [-1, 1, -width, width]
    let direction = directions[Math.floor(Math.random() * directions.length)]
    // console.log(direction)
        if(
            !squares[ghost.currentIndex + direction].classList.contains("wall")
            && !squares[ghost.currentIndex + direction].classList.contains("ghost")
        ) {
            squares[ghost.currentIndex].classList.remove(ghost.name, "ghost", "scared")
            ghost.currentIndex += direction
            squares[ghost.currentIndex].classList.add(ghost.name, "ghost")
        }
        else {
            direction = directions[Math.floor(Math.random() * directions.length)]
        }

        if(ghost.isScared) {
            squares[ghost.currentIndex].classList.add('scared')
        }

         if(ghost.isScared && squares[ghost.currentIndex].classList.contains('pacman')) {
             squares[currentPacmanIndex].classList.remove(ghost.name, 'scared', 'ghost')

             score += 100

             ghost.currentIndex = ghost.startIndex

            squares[ghost.currentIndex].classList.add(ghost.name, 'ghost');
         }
    }, ghost.speed)
}

function powerPelletEaten() {
    if(squares[currentPacmanIndex].classList.contains("power-pellet")) {
        console.log('eaten power pellet')
        squares[currentPacmanIndex].classList.remove("power-pellet")
        score += 10;
        ghosts.forEach(ghost => ghost.isScared = true)
        setInterval(unScareGhosts, 10000)
    }
}

function unScareGhosts() {
    ghosts.map(ghost => ghost.isScared = false)
}

function checkGameOver() {
     if(squares[currentPacmanIndex].classList.contains('ghost') && !squares[currentPacmanIndex].classList.contains('scared')) {
         ghosts.forEach((ghost) => clearInterval(ghost.timerID))
         document.removeEventListener('keydown', control)
         scoreText.textContent = score + ', Game Over'
         console.log('game over')
     }
}

function checkGameWon() {
    if(score === 374) {
        scoreText.textContent = score + ', You Won!'
        ghosts.map(ghost => clearInterval(ghost.timerID))
        document.removeEventListener('keydown', control)
        console.log('game won')
    }
}

function restartGame() {
    // createBoard()
    // document.addEventListener('keydown', control)
    // currentPacmanIndex = 490
    // score = 0
    // ghosts.map(ghost => squares[ghost.startIndex].classList.add(ghost.name, 'ghost'))
}