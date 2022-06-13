import React from 'react'
// import { withToggler } from './HOCs/withToggler'
import Toggler from './HOCs/withToggler'

// class Menu extends React.Component {
//     render() {
//         return (
//             <div>
//                 <button onClick={this.props.toggle}>{this.props.on ? "Hide" : "Show"} Menu</button>
//                 <nav style={{display: this.props.on ? "block" : "none"}}>
//                     <h6>Signed in as username</h6>
//                     <a>Profile</a>
//                     <a>Repos</a>
//                     <a>Stars</a>
//                     <a>Gists</a>
//                 </nav>
//             </div>
//         )
//     }
// }

function Menu(props) {
    return (
        <Toggler defaultOnValue={true} render={(on, toggle) => {
            return(
                <div>
                    <button onClick={toggle}>{on ? "Hide" : "Show"} Menu</button>
                    <nav style={{display: on ? "block" : "none"}}>
                        <h6>Signed in as username</h6>
                        <a>Profile</a>
                        <a>Repos</a>
                        <a>Stars</a>
                        <a>Gists</a>
                    </nav>
                </div>
            )
        }} />
    )
}

// export default withToggler(Menu, {defaultOnValue: true})
export default Menu