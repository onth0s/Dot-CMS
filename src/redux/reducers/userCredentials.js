import { createSlice } from "@reduxjs/toolkit";

const { actions, reducer } = createSlice({
	name: 'userCredentials-name',
	initialState: {
		username: '',
		password: '',

		showPassword: false,
	},
	reducers: {
		setUsername: (state, { payload }) => {
			state.username = payload;
		},
		setPassword: (state, { payload }) => {
			state.password = payload;
		},

		toggleShowPassword: (state) => {
			state.showPassword = !state.showPassword;
		}
	}
})

export const getUsername = (state) => {
	return state.userCredentials.username;
}
export const getPassword = (state) => {
	return state.userCredentials.password;
}

export const getShowPassword = (state) => {
	return state.userCredentials.showPassword;
}

export default reducer;

export const {
	setUsername, setPassword,
	toggleShowPassword
} = actions;
