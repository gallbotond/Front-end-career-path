const startButton = document.querySelector("#start")
const score = document.querySelector("#score")
const grid = document.querySelector(".grid")

let gridElments = []

function createGrid() {
    for (let i = 0; i < 100; i++) {
        const square = document.createElement('div')
        square.classList.add("tile")
        grid.appendChild(square)
        gridElments.push(square)
    }
}

console.log(gridElments)

createGrid()