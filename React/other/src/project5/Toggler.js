import React, { Component } from 'react'

export default class Toggler extends Component {

    state = {
        on: this.props.defaultOnValue
    }

    static defaultProps = {
        defaultOnValue: false
    }

    toggle = () => this.setState(prevState => ({on: !prevState.on}))
    
    render() {
        return (
            <div>
                {div.props.render({
                    on: this.state.on,
                    toggle: this.toggle
                })}
            </div>
        )
    }
}
