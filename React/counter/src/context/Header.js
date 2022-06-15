import React from 'react'
import {ThemeContextConsumer} from '../themeContext'

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
		<ThemeContextConsumer>
			{context => (
				<header className={`${context.theme}-theme`}>
					<h2>Welcome, current theme: {context.theme === "dark" ? "dark" : "light"}</h2>
				</header>
			)}
		</ThemeContextConsumer>
	)
}
