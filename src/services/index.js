import axios from 'axios';
import joinURL from 'url-join';

// const SERVER_URL = 'https://dot-dot.herokuapp.com/';
const SERVER_URL = 'http://localhost:8080';

export const login = async(userCredentials) => {
	const getIPPath = 'https://api.db-ip.com/v2/free/self';
	let IP = '';

	try {
		const res = await axios({
			method: 'GET',
			url: getIPPath,
		});

		IP = res.data;
	} catch (err) {
		console.log('Axios Error getting IP:');
		console.log(err);
	}

	try {
		console.log('Logging in...');

		await axios({
			method: 'POST',
			url: joinURL(SERVER_URL, 'CMS/login'),
			data: {
				userCredentials,
				IP
			}
		});

	} catch (err) {
		console.log('Axios Error logging user in:');
		console.log(err);
	}
}
