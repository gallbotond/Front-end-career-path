import React, { PureComponent } from 'react'
import Child from './Child'

// export default class Parent extends PureComponent {
//   render() {
//     console.log("   P rendered")
//     return (
//         <div>
//             <h2>_Parent</h2>
//             <Child />
//             <Child />
//         </div>
//     )
//   }
// }

export default React.memo(function Parent() {
    console.log("   P rendered")
    return (
        <div>
            <h2>_Parent</h2>
            <Child />
            <Child />
        </div>
    )
})

// export default React.memo(Parent)