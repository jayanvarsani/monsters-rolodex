// import React and React.Component
import React, { Component } from "react";
import "./App.css";
// destructure import
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

// App inherits Component
class App extends Component {
	constructor() {
		super();
		// intiialise empty state
		this.state = {
			monsters: [],
			searchField: "",
		};
	}

	// called when site loaded on screen
	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => response.json())
			// set state will re-render components
			.then((users) => this.setState({ monsters: users }));
	}

	// upon key press, setState, thus re-rendering components
	handleChange = (e) => this.setState({ searchField: e.target.value });

	// called whenever re-rendering is needed to be done
	render() {
		// pull out via destructuring
		const { monsters, searchField } = this.state;
		// filter out monsters on every render based on current search
		const filteredMonsters = monsters.filter((monster) =>
			monster.name.toLowerCase().includes(searchField.toLowerCase())
		);
		return (
			<div className="App">
				<h1>Monsters Rolodex</h1>
				<SearchBox
					placeholder="Find Monsters..."
					handleChange={this.handleChange}
				/>
				{/* card list component made of card components of the filtered list */}
				<CardList monsters={filteredMonsters} />
			</div>
		);
	}
}

export default App;
