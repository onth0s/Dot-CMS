import axios from 'axios';
import joinURL from 'url-join';

// const SERVER_URL = 'https://dot-dot.herokuapp.com/';
const SERVER_URL = 'http://localhost:8080';

export const login = async(userCredentials) => {
	try {
		console.log('Registering user...');
		const res = await axios({
			method: 'POST',
			url: joinURL(SERVER_URL, 'CMS/login'),
			data: userCredentials
		});

		console.log(res);
	} catch (err) {
		console.log('Axios Error registering user:');
		console.log(err);
	}
}

export const sendIP = () => {
	const path = 'https://api.db-ip.com/v2/free/self';

	try {
		const res = await axios({
			method: 'GET',
			url: path,
		});

		console.log(res.data);
	} catch (err) {
		console.log('Axios Error getting IP:');
		console.log(err);
	}

	try {
		const res = await axios({
			method: 'GET',
			url: path,
		});

		console.log(res.data);
	} catch (err) {
		console.log('Axios Error getting IP:');
		console.log(err);
	}
}
