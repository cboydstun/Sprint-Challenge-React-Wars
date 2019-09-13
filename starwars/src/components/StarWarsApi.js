import axios from 'axios';

function StarWarsApi(setter) {
	axios
		.get('https://swapi.co/api/people/')
		.then((res) => {
			//console.log(res.data);
			const characters = res.data.results;
			setter(characters);
		})
		.catch((err) => {
			console.log(err);
		});
}

export default StarWarsApi;