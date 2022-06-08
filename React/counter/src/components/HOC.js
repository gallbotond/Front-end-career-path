export default function HOC(component) {
    const Component = component
    let randomNum = Math.random() * 10

    return function(props) {
        <Component favNum={randomNum} {...props} />
    }
}