import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import store from './redux/store.js';

import App from './App';

import './styles/common/global.css';
import './styles/common/fonts.css';
import './styles/Login.css';

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>,
  </React.StrictMode>,
	document.getElementById('root')
);
