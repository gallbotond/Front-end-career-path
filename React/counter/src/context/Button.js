import React, { Component } from 'react'
import ThemeContext from '../themeContext'

// export default class Button extends Component {
//     render() {
//         const {theme} = this.context
//         return (
//         <button className={`${theme}-theme`}>Switch theme</button>
//         )
//     }
// }

// Button.contextType = ThemeContext

export default function Button(props) {
    return (
        <ThemeContext.Consumer>
            {({theme}) => (
                <button className={`${theme}-theme`}>Switch theme</button>
            )}
        </ThemeContext.Consumer>
    )
}
