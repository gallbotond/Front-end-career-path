import React from 'react'
import useToggler from './useToggler'

export default function Menu(props) {

  const [on, toggle] = useToggler(true)

  return (
    <div>
        <button onClick={toggle}>{on ? 'Hide' : 'Show'} Menu</button>
        <nav style={{display: on ? 'block' : 'none'}}>
            <h6>Signed in as Coder112</h6>
            <p><a>Your profile</a></p>
            <p><a>Your repositories</a></p>
            <p><a>Your stars</a></p>
            <p><a>Your gists</a></p>
        </nav>
    </div>
  )
}
