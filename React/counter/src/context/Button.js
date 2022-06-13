import React from 'react'
import {ThemeContextConsumer} from '../themeContext'

// export default class Button extends Component {
//     render() {
//         const {theme} = this.context
//         return (
//         <button className={`${theme}-theme`}>Switch theme</button>
//         )
//     }
// }

// Button.contextType = ThemeContext

export default function Button() {
    return (
        <ThemeContextConsumer>
            {context=> (
                <button className={`${context.theme}-theme`} onClick={context.method}>Switch theme</button>
            )}
        </ThemeContextConsumer>
    )
}

// export default function Button(props) {
//     console.log(props)
//     return (
//         <button className={`${props.theme}-theme`}>Switch theme</button>
//     )
// }

// Button.propTypes = {
//     theme: PropTypes.oneOf(["light", "dark"])
// }

// Button.defaultProps = {
//     theme: "light"
// }