export function FavNum(Component) {

    let n = Math.floor(Math.random() * 10);
    
    return function(props) {
        return (
            <Component number={n} {...props} />
        )
    }
}