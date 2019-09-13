import React from 'react';
import { StarWarsName } from './StarWarsName';
import { StarWarsBirthYear } from './StarWarsBirthYear';
import { StarWarsEyeColor } from './StarWarsEyeColor';
import { StarWarsMass } from './StarWarsMass';
import { CardColumns, Card } from 'reactstrap';
import styled from 'styled-components';

export function StarWarsComponent(props) {
	const { starWarsCharacters } = props;

	return (
		<CardColumns>
			{starWarsCharacters.map((starWarsCharacter, index) => {
				return (
					<StarWarsCard>
						<StarWarsName name={starWarsCharacter.name} key={index + 'n'} />
						<StarWarsBirthYear birth_year={starWarsCharacter.birth_year} key={index + 'b'} />
						<StarWarsEyeColor eye_color={starWarsCharacter.eye_color} key={index + 'e'} />
						<StarWarsMass mass={starWarsCharacter.mass} key={index + 'm'} />
					</StarWarsCard>
				);
			})}
		</CardColumns>
	);
}

const StarWarsCard = styled(Card)`
	margin: 15px 1.5% 25px;
	border-radius: 5px;
    background-color: grey;
    opacity: 0.9;
`;