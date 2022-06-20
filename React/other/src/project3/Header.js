import React, { useContext } from 'react'
import {ThemeContext} from './themeContext'

export default function Header() {

    const context = useContext(ThemeContext)
    // console.log(context)

    return (
        <header className={`${context.theme}-theme`}>
            <h2>{context.theme === 'light' ? 'Light' : 'Dark'} theme</h2>
        </header>
    )
}
