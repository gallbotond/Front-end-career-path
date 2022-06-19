import React, { useEffect } from 'react'

export default function App() {

    const [words, setWords] = React.useState('')
    const [time, setTime] = React.useState(3)
    const [isRunning, setIsRunning] = React.useState(false)

    const handleChange = e => setWords(e.target.value)

    const calculateWordCount = text => text.trim().split(' ').filter(word => word !== '').length

    const resetGame = () => {
        setWords('')
        setIsRunning(true)
        setTime(3)
    }

    useEffect(() => {
        isRunning && time > 0 && setTimeout(() => setTime(time => time - 1), 1000)
        !time && setIsRunning(false)
    }, [time, isRunning])

    // console.log(isRunning)

    return (
        <div>
            <h1>Speed typing game</h1>
            <textarea disabled={!isRunning} onChange={handleChange} value={words} />
            <h4>Remaining time: {time}s</h4>
            <button className={isRunning ? 'inactive' : ''} onClick={time ? () => setIsRunning(true) : resetGame}>Start</button>
            <h1>Word count: {!time ? calculateWordCount(words) : '...'}</h1>
        </div>
    )
}
