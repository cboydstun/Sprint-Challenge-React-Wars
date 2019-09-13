import React, { useState, useEffect } from 'react';
import StarWarsApi from './components/StarWarsApi';
import { StarWarsComponent } from './components/StarWarsComponent';

import './App.css';

const App = () => {
	// Try to think through what state you'll need for this app before starting. Then build out
	// the state properties here.

	// Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
	// side effect in a component, you want to think about which state and/or props it should
	// sync up with, if any.
	const [starWarsCharacters, setStarWarsCharacters] = useState();

	useEffect(() => {
		StarWarsApi(setStarWarsCharacters);
	}, []);

	// name
	// birth_year
	// mass
	// eye_color

	console.log('star wars', starWarsCharacters);
	if (!starWarsCharacters) {
		return <h2>Loading...</h2>;
	}

	return (
		<div className="App">
			<h1 className="Header">React Wars</h1>

			<StarWarsComponent starWarsCharacters={starWarsCharacters} />
		</div>
	);
};

export default App;