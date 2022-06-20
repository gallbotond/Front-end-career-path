import React from 'react'
import useWordGame from './useWordGame'

export default function App() {

    const {inputRef, isRunning, words, time, handleChange, resetGame, calculateWordCount} = useWordGame()

    return (
        <div>
            <h1>Speed typing game</h1>
            <textarea ref={inputRef} disabled={!isRunning} onChange={handleChange} value={words} />
            <h4>Remaining time: {time}s</h4>
            <button disabled={isRunning} onClick={resetGame}>Start</button>
            <h1>Word count: {!time ? calculateWordCount(words) : '...'}</h1>
        </div>
    )
}
