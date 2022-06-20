import React, { useRef, useState } from 'react'

export default function App() {

    const [newValue, setNewValue] = useState('')
    const [todos, setTodos] = useState([])

    const inputRef = useRef(null)

    const handleChange = e => setNewValue(e.target.value)

    const addTodo = e => {
        e.preventDefault()
        setTodos(prevTodoList => [...prevTodoList, newValue])
        setNewValue('')
        console.log(inputRef)
        inputRef.current.focus()
    }

    const allTodos = todos.map((todo, i) => <p key={i}>{todo}</p>)

    return (
        <div>
            <form>
                <input ref={inputRef} type='text' name='todo' value={newValue} onChange={handleChange} />
                <button onClick={addTodo}>Add todo item</button>
            </form>
            {allTodos}
        </div>
    )
}
