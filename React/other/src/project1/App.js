import React from 'react'

export default function App() {

    const [words, setWords] = React.useState('')

    const handleChange = e => setWords(e.target.value)

    return (
        <div>
            <h1>Speed typing game</h1>
            <textarea onChange={handleChange} value={words} />
            <h4>Remaining time: 10s</h4>
            <button>Start</button>
            <h1>Word count: 12</h1>
        </div>
    )
}
