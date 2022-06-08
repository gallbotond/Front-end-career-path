import React from "react";

export default class SearchMovie extends React.Component {
    render() {
        return (
            <form className="form">
                <label className="label" htmlFor="query"></label>
                <input className="input" type="text" name="query" placeholder="ex. Morbius"></input>
                <button className="button" type="submit">Search</button>
            </form>
        )
    }
}