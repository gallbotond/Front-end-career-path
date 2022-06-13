import React, { Component } from 'react'
import ThemeContext from '../themeContext'
import PropTypes from 'prop-types'

// export default class Button extends Component {
//     render() {
//         const {theme} = this.context
//         return (
//         <button className={`${theme}-theme`}>Switch theme</button>
//         )
//     }
// }

// Button.contextType = ThemeContext

// export default function Button(props) {
//     return (
//         <ThemeContext.Consumer>
//             {({theme}) => (
//                 <button className={`${theme}-theme`}>Switch theme</button>
//             )}
//         </ThemeContext.Consumer>
//     )
// }

export default function Button(props) {
    console.log(props)
    return (
        <button className={`${props.theme}-theme`}>Switch theme</button>
    )
}

Button.propTypes = {
    theme: PropTypes.oneOf(["light", "dark"])
}

Button.defaultProps = {
    theme: "light"
}