import { createSlice } from "@reduxjs/toolkit";

const { actions, reducer } = createSlice({
	name: 'userCredentials-name',
	initialState: {
		name: '',
		isLoading: false
	},
	reducers: {
		testAction: () => {
			console.log('EUREKA THIS IS WORKING');
		},
		setName: (state, { payload }) => {
			state.name = payload
		},
		setLoader: (state, { payload }) => {
			state.isLoading = payload
		}
	}
})

export default reducer;

export const { setName, setLoader, testAction } = actions;
