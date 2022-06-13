import React from 'react'

export default function Example(props) {
    console.log(props)
    return (
        <div>{props.render(true)}</div>
    )
}
