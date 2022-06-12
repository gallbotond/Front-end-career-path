import React, { PureComponent } from 'react'
import Parent from './Parent'

// export default class Grandparent extends PureComponent {
//   render() {
//     console.log("GP rendered")
//     return (
//         <div>
//             <h1>Grandparent</h1>
//             <Parent />
//             <Parent />
//         </div>
//     )
//   }
// }

function Grandparent() {
    console.log("GP rendered")
    return (
        <div>
             <h1>Grandparent</h1>
             <Parent />
             <Parent />
         </div>
    )
}

export default React.memo(Grandparent)