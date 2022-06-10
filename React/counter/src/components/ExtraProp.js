export function ExtraProp(Component) {
    return function(props) {
        return (
            <Component anotherProp="Lorem ipsum" {...props} />
        )
    }
}