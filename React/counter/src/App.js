import Menu from './components/Menu'
import Favorite from './components/Favorite'
import Example from './components/Example'

export default function App() {
  return (
    <div>
      <Menu />
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
    </div>
  )
}

// export default FavNum(App)