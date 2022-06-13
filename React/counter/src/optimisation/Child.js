import React, { Component } from 'react'
import GrandChild from './GrandChild'

// export default class Child extends Component {
//   render() {
//     console.log("       C rendered")
//     return (
//         <div>
//             <h3>__Child</h3>
//             <GrandChild />
//             <GrandChild />
//         </div>
//     )
//   }
// }

export default function Child() {
    console.log("       C rendered")
    return (
        <div>
            <h3>__Child</h3>
            <GrandChild />
            <GrandChild />
        </div>
    )
}
  