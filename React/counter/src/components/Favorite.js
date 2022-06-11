import { getDefaultNormalizer } from '@testing-library/react'
import React from 'react'
// import {withToggler} from './HOCs/withToggler'
import Toggler from './HOCs/withToggler'

// class Favorite extends React.Component {
//     render() {
//         return (
//             <>
//                 <h3>Click to heart favorite</h3>
//                 <h1>
//                     <span onClick={this.props.toggle}>
//                         {this.props.on ? "❤️" : "🤍"}
//                     </span>
//                 </h1>
//             </>
//         )
//     }
// }

// function Favorite(props) {
//     return (
//         <>
//             <h3>Click to heart favorite</h3>
//             <h1>
//                 <span onClick={props.toggle}>
//                     {props.on ? "❤️" : "🤍"}
//                 </span>
//             </h1>
//         </>
//     ) 
// }

function Favorite(props) {
    return (
        <Toggler render={(on, toggle) => {
            return (
                <>
                    <h3>Click to heart favorite</h3>
                    <h1>
                        <span onClick={toggle}>
                            {on ? "❤️" : "🤍"}
                        </span>
                    </h1>
                </>
            )
        }} />
    )
}

// export default withToggler(Favorite, {defaultOnValue: false})
export default Favorite