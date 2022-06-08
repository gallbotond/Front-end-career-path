// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import SearchMovie from './components/SearchMovie';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends React.Component {
  

  render() {
    return (
      <div className='container'>
        <h1 className='title'>React Movie Search</h1>
        <SearchMovie />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum a suscipit fugit adipisci similique dicta est quisquam accusantium. Sapiente commodi repellat quod iure nisi ipsa sequi officia mollitia aliquid doloremque quasi labore, ullam voluptatibus nihil consequatur, perferendis error porro quia?</p>
        <small>Sapiente commodi repellat quod iure nisi ipsa sequi officia mollitia aliquid doloremque quasi labore, ullam voluptatibus nihil consequatur.</small>
      </div>
    )
  }
}

export default App;