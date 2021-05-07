import { combineReducers } from "redux";

import userCredentials from './reducers/userCredentials.js';

export const rootReducer = combineReducers({
	userCredentials,
});

export default rootReducer;
