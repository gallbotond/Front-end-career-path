import React, { Component } from 'react'
import Header from '../context/Header'
import {UserContextConsumer} from './userContext'

// export default function App() {
//   return (
//     <div>
//         <Header />
//         <main>
//             <UserContextConsumer>
//                 {username => (
//                     <p className='main'>No new notifications, {userName}! 🎊</p>
//                 )}
//             </UserContextConsumer>
//         </main>
//         <input
//             type='text'
//             name='username'
//             placeholder='New username'
//             value={}
//             onChange={}
//         />
//         <button onClick={}>Change Username</button>
//     </div>
//   )
// }

export default class App extends Component {

    state = {
        name: ''
    }

    handleChange = (name) => {
        this.setState({name: name})
    }

    handleClick = () => {
        this.props.method(this.state.name)
    }

    render() {
        return (
            <div>
                <Header />
                <main>
                    <UserContextConsumer>
                        {context => (
                            <p className='main'>No new notifications, {context.username}! 🎊</p>
                        )}
                    </UserContextConsumer>
                </main>
                <input
                    type='text'
                    name='username'
                    placeholder='New username'
                    value={this.state.name}
                    onChange={this.handleChange}
                />
                <button onClick={this.handleClick}>Change Username</button>
            </div>
        )
    }
}
