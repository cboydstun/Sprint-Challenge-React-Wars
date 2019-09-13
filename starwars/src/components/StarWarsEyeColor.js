import React from 'react';

export function StarWarsEyeColor(props) {
	const { eye_color } = props;
	return <p>Eyes: {eye_color}</p>;
}