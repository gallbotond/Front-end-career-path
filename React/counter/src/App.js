import CTA from './components/CTA'
import {HOC} from './components/HOC'
import {ExtraProp} from './components/ExtraProp'
import {FavNum} from './components/FavNum'

/*
function App(props) {
  console.log(props)

  return (
    <>
      <CTA>
        <h1>CTA title</h1>
        <p>
          Note that the development build is not optimized.
          To create a production build, use npm run build. 
        </p>
      </CTA>

      <CTA position="right">
        <p>
          Note that the development build is not optimized.
          To create a production build, use npm run build. 
        </p>
        <form>
          <input type="email" placeholder="Enter email"></input>
          <br />
          <button>Submit</button>
        </form>
      </CTA>

      <CTA>
        <p>lorem ipsum</p>
      </CTA>
    </>
  );
}

export default ExtraProp(App)
*/

function App(props) {

  console.log(props)

  return(
    <h1>Hello {props.number}</h1>
  )
}

export default FavNum(App)