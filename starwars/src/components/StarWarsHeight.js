import React from 'react';

export function StarWarsHeight(props) {
	const { height } = props;
	return <p>Height: {height}<span> cm</span></p>;
}
