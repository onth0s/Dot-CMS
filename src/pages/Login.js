import { useSelector, useDispatch } from 'react-redux';

import { testAction } from '../redux/reducers/userCredentials.js';

import { serverCall } from '../services';

import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Close } from '@material-ui/icons';
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

		serverCall('lemme login!');

		dispatch(testAction());
	}

	return (
		<ThemeProvider theme={theme}>
			<div className="root-container">
				<div className="flexbox login-container">
					<div className="login-title">
						<img src={icons.dot_logo_text} alt="Dot logo with text" />
						<p>CMS</p>
					</div>

					<form className="flexbox login-form"
						onSubmit={handleSubmit}
					>
						<div className="login-form-input-container"
							onLoad={() => {
								console.log('username input loaded');
							}}
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

							<Close
								onClick={() => {
									const usernameInput = document.querySelector('.login-form-username input');
									usernameInput.focus();

									console.log('test');
								}}
							/>
						</div>

						<div className="login-form-input-container">
							<TextField className="login-form-password"
								id="outlined-basic" label="Password" variant="outlined"
								autoComplete={'off'} type={'password'}
								onKeyPress={(e) => {
									if (e.code === 'Enter') {
										console.log('login in...');
									}
								}}
							/>

							<i className="far fa-eye"
								onClick={() => {
									const passwordInput = document.querySelector('.login-form-password input');
									passwordInput.focus();
								}}
							></i>
						</div>

						<Button variant="contained"
							onClick={handleSubmit}
							color="primary"
						>Login</Button>
					</form>
				</div>
			</div>
		</ThemeProvider>
	);
}
