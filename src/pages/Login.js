import { useSelector, useDispatch } from 'react-redux';

import { testAction } from '../redux/reducers/userCredentials.js';

import { serverCall } from '../services';

import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';

import { TextField, Button } from '@material-ui/core';

import { icons } from '../resources/icons.js';

const theme = createMuiTheme({
	palette: {
		primary: {
			"500": "#EC6408",
		},
	},
});

export default function Login() {
	// const count = useSelector(selectCount);
	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();

		serverCall('login!');

		dispatch(testAction());
	}

	return (
		<ThemeProvider theme={theme}>
			<div className="root-container">
				<div className="flexbox login-container">
					<img className="login-title"
					src={icons.dot_logo_text} alt="Dot logo with text" />

					<form className="flexbox login-form"
						onSubmit={handleSubmit}
					>
						<TextField className="login-form-username"
							id="outlined-basic" label="Username" variant="outlined"
							autoComplete={'off'} autoFocus={true} spellCheck={false}
							onKeyPress={(e) => {
								if (e.code === 'Enter') {
									const passwordInput = document.querySelector('.login-form-password input');
									passwordInput.focus();
								}
							}}
						/>
						<TextField className="login-form-password"
							id="outlined-basic" label="Password" variant="outlined"
							autoComplete={'off'} type={'password'}
							onKeyPress={(e) => {
								if (e.code === 'Enter') {
									console.log('login in...');
								}
							}}
						/>

						<Button variant="contained"
							onClick={handleSubmit}
							color="primary"
						// classes={classes}
						>Login</Button>
					</form>
				</div>
			</div>
		</ThemeProvider>
	);
}
