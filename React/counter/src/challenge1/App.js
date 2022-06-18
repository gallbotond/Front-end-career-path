import React, { Component } from 'react'
import Header from './Header'
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

    handleChange = (e) => {
        this.setState({name: e.target.value})
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
                        {({username, setUserName}) => (
                            <>
                                <p className='main'>No new notifications, {username}! 🎊</p>
                                <input
                                    type='text'
                                    name='name'
                                    placeholder='New username'
                                    value={this.state.name}
                                    onChange={this.handleChange}
                                />
                                <button onClick={() => setUserName(this.state.name)}>Change Username</button>
                            </>
                        )}
                    </UserContextConsumer>
                </main>
            </div>
        )
    }
}
