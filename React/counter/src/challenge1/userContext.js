import React, {Component} from "react";

const {Provider, Consumer} = React.createContext()

class UserContextProvider extends Component {

    state = {username: 'hello'}

    setUserName = (username) => {
        this.setState({username})
    }

    render() {
        return (
            <Provider value={{username: this.state.username, setUserName: this.setUserName}}>
                {this.props.children}
            </Provider>
        )
    }
}

export {UserContextProvider, Consumer as UserContextConsumer}