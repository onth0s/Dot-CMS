import { configureStore } from "@reduxjs/toolkit";
// import logger from 'redux-logger';
import rootReducer from './rootReducer.js';

// TODO ↓ test if this also works
// import { createStore } from 'redux';
// const store = createStore(rootReducer);

const store = configureStore({
	reducer: rootReducer,
	// middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), logger],
})

export default store;
