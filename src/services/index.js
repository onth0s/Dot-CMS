import axios from 'axios';
import joinURL from 'url-join';

const SERVER_URL = 'https://dot-dot.herokuapp.com/';
// const SERVER_URL = 'http://localhost:8080';

// let counterLogin = 0;
export const login = async (userCredentials) => {
	const getIPPath = 'https://api.db-ip.com/v2/free/self';
	let IP = '';

	// let res = null;

	// let requestData = null;

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

	// try {
	// 	axios.interceptors.request.use(request => {
	// 		// to avoid overwriting if another interceptor
	// 		// already defined the same object (meta)
	// 		request.meta = request.meta || {};

	// 		request.meta.requestStartedAt = new Date().getTime();

	// 		// TODO ↓
	// 		// console.log('login() request.meta:');
	// 		// console.log(request.meta);

	// 		// requestData = request;

	// 		counterLogin++;
	// 		console.log('counterLogin:', counterLogin);

	// 		// return {
	// 		// 	test: 'some message'
	// 		// };
	// 		// return request.meta;

	// 	})
	// } catch (err) {
	// 	console.log('Axios Error intercepting request:');
	// 	console.log(err);
	// }


	try {
		const response = await axios({
			// await axios({
			method: 'POST',
			url: joinURL(SERVER_URL, 'CMS/login'),
			data: {
				userCredentials,
				IP
			}
		});

		console.log('login() userCredentials:');
		console.log(userCredentials);

		console.log('login() response:');
		console.log(response);

		return response;
		// res = response;
		// return { res, requestData };
	} catch (err) {
		console.log('Axios Error logging user in:');
		console.log(err);
	}

	// TODO 
	// return {
	// 	res, 
	// 	requestedAt: requestData.meta.requestStartedAt
	// };
}

export const uploadContent = async (data) => {
	try {
		console.log('uploadContent() called');
		console.log('dataaaa:');
		console.log(data);

		const res = await axios({
			method: 'POST',
			url: joinURL(SERVER_URL, 'CMS/upload'),
			data,
		});

		console.log('res:');
		console.log(res);
	} catch (err) {
		console.log('Error uploading content:');
		console.log(err);
	}
}
