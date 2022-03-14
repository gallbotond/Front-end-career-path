const player1Score = document.querySelector("#player1-score")
const player2Score = document.querySelector("#player2-score")
const player1Dice = document.querySelector("#player1-dice")
const player2Dice = document.querySelector("#player2-dice")
const rollButton = document.querySelector("#roll-button")
const resetButton = document.querySelector("#reset-button")
const playerTurnText = document.querySelector("#player-turn")

// console.log(player1Dice, player1Score, player2Dice, player2Score, rollButton, playerTurnText)

let score1 = 0,
    score2 = 0,
    playerTurn = true;

function reset() {
    score1 = score2 = rolled1 = rolled2 = 0;
    player1Score.textContent = "Score: 0"
    player2Score.textContent = "Score: 0"
    player1Dice.textContent = "-"
    player2Dice.textContent = "-"
    rollButton.textContent = "Roll Dice 🎲"
    resetButton.style.display = "none"
    rollButton.style.display = "block"
    playerTurnText.textContent = playerTurn ? "Player 1 begins" : "Player 2 begins"
}

function roll() {
    let rolledValue = Math.floor(Math.random() * 6 + 1)

    if(playerTurn) {
        player2Dice.classList.remove("highlight")
        player1Dice.classList.add("highlight")
        player1Dice.textContent = rolledValue
        score1 += rolledValue
        player1Score.textContent = "Score: " + score1
        playerTurnText.textContent = "Player 2 turn"
    }
    else {
        player1Dice.classList.remove("highlight")
        player2Dice.classList.add("highlight")
        player2Dice.textContent = rolledValue
        score2 += rolledValue
        player2Score.textContent = "Score: " + score2
        playerTurnText.textContent = "Player 1 turn"
    }

    playerTurn = !playerTurn

    if(score1 >= 20 || score2 >= 20) {
        playerTurnText.textContent = score1 >= 20 ? "Player 1 won!" : "Player 2 won!";
        rollButton.style.display = "none"
        resetButton.style.display = "block"
    }
}