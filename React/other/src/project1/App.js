import React, { useEffect, useRef } from 'react'

export default function App() {

    const REMAINING_TIME = 5

    const [words, setWords] = React.useState('')
    const [time, setTime] = React.useState(REMAINING_TIME)
    const [isRunning, setIsRunning] = React.useState(false)
    const inputRef= useRef()

    const handleChange = e => setWords(e.target.value)

    const calculateWordCount = text => text.trim().split(' ').filter(word => word !== '').length

    const resetGame = () => {
        setWords('')
        setIsRunning(true)
        setTime(REMAINING_TIME)
        // console.log(inputRef)
        inputRef.current.disabled = false
        inputRef.current.focus()
    }

    useEffect(() => {
        isRunning && time > 0 && setTimeout(() => setTime(time => time - 1), 1000)
        !time && setIsRunning(false)
    }, [time, isRunning])

    return (
        <div>
            <h1>Speed typing game</h1>
            <textarea ref={inputRef} disabled={!isRunning} onChange={handleChange} value={words} />
            <h4>Remaining time: {time}s</h4>
            <button disabled={isRunning} onClick={time ? () => setIsRunning(true) : resetGame}>Start</button>
            <h1>Word count: {!time ? calculateWordCount(words) : '...'}</h1>
        </div>
    )
}
