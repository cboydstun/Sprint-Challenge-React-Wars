import React from 'react';

export function StarWarsMass(props) {
	const { mass } = props;

	return <p>Weight: {mass}<span> kg</span></p>;
}