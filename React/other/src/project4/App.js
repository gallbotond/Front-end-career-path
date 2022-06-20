import React, { useState } from 'react'
import useCounter from './useCounter'

export default function App() {

    const [n, add] = useCounter()

    return (
        <div>
            <h1>The count is {n}</h1>
            <button onClick={add}>Add</button>
        </div>
    )
}
