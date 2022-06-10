import CTA from './components/CTA'
import HOC from './components/HOC'

export default function App() {
  // console.log(props)

  return (
    <>
      <CTA>
        <h1>CTA title</h1>
        <p>
          Note that the development build is not optimized.
          To create a production build, use npm run build. 
        </p>
      </CTA>

      <CTA position="right"> {/* does nothing */}
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

// const NumComponent = HOC(App)
// export default NumComponent;