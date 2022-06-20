import { useEffect, useRef, useState } from 'react'

export default function useWordGame() {

  const REMAINING_TIME = 5

  const [words, setWords] = useState('')
  const [time, setTime] = useState(REMAINING_TIME)
  const [isRunning, setIsRunning] = useState(false)
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

  return {inputRef, isRunning, words, time, handleChange, resetGame, calculateWordCount}
}
