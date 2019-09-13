import React from 'react';
import { CardTitle } from 'reactstrap';
import styled from 'styled-components';

export function StarWarsName(props) {
	const { name } = props;
	const charName = name;
	console.log('ch', charName);
	return (
		<CardTitle>
			<TheForce>{name}</TheForce>
		</CardTitle>
	);
}

const TheForce = styled.h1`
	${(props) => (props.charName !== 'Darth Vader' ? `color: red;` : `color: blue;`)}
`;