import React from "react";

const search = async(event) => {
    event.preventDefault();
    console.log("submitting");

    const query = 'morb';
    const key = process.env.REACT_APP_MOVIEDB_KEY;
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=${query}&page=1&include_adult=false`

    const res = await fetch(url);
    const data = await res.json();

    console.log(data)
    // console.log(url)
    // console.log(key, process.env.NODE_ENV, " mode is running");
}

export default class SearchMovie extends React.Component {
    render() {
        return (
            <form className="form" onSubmit={search}>
                <label className="label" htmlFor="query">movie title</label>
                <input className="input" type="text" name="query" placeholder="ex. Morbius"></input>
                <button className="button" type="submit">Search</button>
            </form>
        )
    }
}