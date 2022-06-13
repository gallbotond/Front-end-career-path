import React, {Component} from "react";
const {Provider, Consumer} = React.createContext()

class ThemeContextProvider extends Component {

    state = {theme: "light"}

    flipTheme = () => {
        this.setState(prevState => ({theme: prevState.theme === "light" ? "dark" : "light"}))
    }

    render() {
        return (
            <Provider value={{theme: this.state.theme, toggleMethod: this.flipTheme}}>
                {this.props.children}
                {/* <button onClick={this.flipTheme}>Flip</button> */}
            </Provider>
        )
    }
}

export {ThemeContextProvider, Consumer as ThemeContextConsumer}