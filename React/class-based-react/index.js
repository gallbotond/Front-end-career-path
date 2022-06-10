// import App from './components/App'

// function MyApp() {
//     return <h1>Hello, world!</h1>;
// }

class Greeting extends React.Component {
    render() {
        const date = new Date()
        const hours = date.getHours()
        let timeOfDay

        if(hours < 12) {
            timeOfDay = "morning"
        }
        else if(hours >= 12 && hours < 17) {
            timeOfDay = "afternoon"
        }
        else {
            timeOfDay = "night"
        }

        return (
            <h1>Good {timeOfDay}!</h1>
        )
    }
}

class Header extends React.Component {
    render() {
        return(
            <header>Welcome, {this.props.name}</header>
        )
    }
}

class MyApp extends React.Component {
    render() {
        return (
            <>
                <Header name="Simon Riley" />
                <Greeting />
            </>
        )
    }
}

class App extends React.Component {
    state = {
        go: "yes",
        character: {}
    }

    toggleGo = () => {
        this.setState(prevState => {
            return {
                go: prevState.go === "yes" ? "no" : "yes"
            }
        })
    }

    componentDidMount() {
        console.log("componentDidMount")

        fetch("https://swapi.dev/api/people/1")
            .then(res => res.json())
            .then(data => {
                this.setState({character: data})
            })
    }


    render() {
        console.log("render")
        return(
            <>
                <h1>Go out with {this.state.character.name}?</h1>
                <div onClick={this.toggleGo}>
                    <h2>{this.state.go}</h2>
                </div>
            </>
        )
    }
}

class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
        this.add = this.add.bind(this)
        this.sub = this.sub.bind(this)
    }
    state = {
        count: 0
    }

    add = () => {
        this.setState(prevState => ({count: prevState.count + 1}))
    }

    
    sub = () => {
        this.setState(prevState => ({count: prevState.count - 1}))
    }

    render() {
        return (
            <>
                {this.state.count}
                <div onClick={this.add}>Add</div>
                <div onClick={this.sub}>Subtract</div>
            </>
        )
    }
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App name="Botond" />);
