import React from 'react';

export function StarWarsBirthYear(props) {
	// const largerFont = {
	//     fontSize: '2em',
	//     fontWeight: "bold"
	// }

	const { birth_year } = props;
	return (
		<p>
			Birth Year: <span className="larger-font">{birth_year}</span>
		</p>
	);
}