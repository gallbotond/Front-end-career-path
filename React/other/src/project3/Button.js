import React, { useContext } from 'react'
import { ThemeContext } from './themeContext'

export default function Button() {

    const context = useContext(ThemeContext)

    return (
        <button onClick={context.toggleTheme} className={`${context.theme}-theme`}>Switch theme</button>
    )
}
