import { useSelector, useDispatch } from 'react-redux';

import {
	setUsername, getUsername,
	setPassword, getPassword,
	toggleShowPassword, getShowPassword,
} from '../redux/reducers/userCredentials.js';

import { login } from '../services';

import { Close } from '@material-ui/icons';
import { TextField, Button } from '@material-ui/core';

import { icons } from '../resources/icons.js';

export default function Login() {
	const username = useSelector(getUsername);
	const password = useSelector(getPassword);
	const showPassword = useSelector(getShowPassword);

	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();

		login({ username, password });
	}

	return (
		<div className="root-container">
			<div className="flexbox login-container">
				<div className="login-title">
					<img src={icons.dot_logo_text} alt="Dot logo with text" />
					<p>CMS</p>
				</div>

				<form className="flexbox login-form" onSubmit={handleSubmit}>
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
							value={username}
							onChange={(e) => {
								const cross = document.querySelector('.login-form-input-container > *:last-child');
								if (e.target.value === '') {
									cross.style.visibility = 'hidden';
								} else {
									cross.style.visibility = 'visible';
								}
								dispatch(setUsername(e.target.value));
							}}
						/>

						<Close
							onClick={() => {
								const usernameInput = document.querySelector('.login-form-username input');
								usernameInput.focus();

								dispatch(setUsername(''));

								const cross = document.querySelector('.login-form-input-container > *:last-child');

								cross.style.visibility = 'hidden';
							}}
						/>
					</div>

					<div className="login-form-input-container">
						<TextField className="login-form-password"
							id="outlined-basic" label="Password" variant="outlined"
							autoComplete={'off'} spellCheck={false}
							type={
								showPassword ? 'text' : 'password'
							}
							onKeyPress={(e) => {
								if (e.code === 'Enter') {
									console.log('login in...');
								}
							}}
							value={password}
							onChange={(e) => dispatch(setPassword(e.target.value))}
						/>

						{<i className="far fa-eye"
							onClick={() => {
								const passwordInput = document.querySelector('.login-form-password input');
								passwordInput.focus();

								dispatch(toggleShowPassword());
							}}
						></i>}
					</div>

					<Button variant="contained"
						onClick={handleSubmit}
						color="primary"
					>Login</Button>
				</form>
			</div>
		</div>
	);
}
