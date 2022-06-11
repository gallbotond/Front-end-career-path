import React from 'react'

class Toggler extends React.Component {
    state = {
        on: this.props.defaultOnValue
    }

    toggle = () => {
        this.setState(prevState => ({
            on: !prevState.on
        }))
    }

    render() {
        // const Component = this.props.component 
        // const {component: C, defaultOnValue, ...props} = this.props
        return (
            // <C on={this.state.on} toggle={this.toggle} {...this.props} />
            <>{this.props.render(this.state.on, this.toggle)}</>
        )
    }
}

// export function withToggler(component, optionsObject) {
//     return (props) => {
//         return (
//             <Toggler component={component} defaultOnValue={optionsObject.defaultOnValue} {...props } />
//         )
//     }
// }

export default Toggler

//https://swapi.dev/api/people/1/