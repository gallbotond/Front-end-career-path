import React, { Component } from 'react'
import ThemeContext from '../themeContext'

// export default class Header extends Component {
//     static contextType = ThemeContext
//   	render() {
// 		const {theme, name} = this.context
// 		// console.log(theme, name)
// 		return (
// 		<header className={`${theme}-theme`}>
// 			<h2>Welcome, {name}, current theme: {theme === "dark" ? "dark" : "light"}</h2>
// 		</header>
// 		)
// 	}
// }

export default function Header() {
	return (
		<ThemeContext.Consumer>
			{({theme, name}) => (
				<header className={`${theme}-theme`}>
				<h2>Welcome, {name}, current theme: {theme === "dark" ? "dark" : "light"}</h2>
			</header>
			)}
		</ThemeContext.Consumer>
	)
}
