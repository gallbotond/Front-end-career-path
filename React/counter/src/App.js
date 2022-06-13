// import Menu from './components/Menu'
// import Favorite from './components/Favorite'
// import Example from './components/method-passing/Example'
// import Grandparent from './components/Grandparent'
// import { render } from '@testing-library/react'
import React from 'react'

export default class App extends React.Component { 
  state = {count: 0}

  increment = () => this.setState(prevState => ({count: prevState.count + 1}))

  render() {
    console.log("App just rendered")
    return (
      <div>
        {/* <Menu />
        <hr />
        <Favorite />
        <Example 
          render={
            (isNight) => {
              return(
                <h1>{isNight ? "Bravo six, going dark" : "Love the smell of napalm in the morning"}</h1>
              )
            }
          } 
        />
        <button onClick={this.increment}>+1</button>
        <Grandparent count={this.state.count} />
        <Grandparent /> */}

      </div>
    )
  }
}

// export default FavNum(App)