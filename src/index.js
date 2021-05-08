import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import store from './redux/store.js';

import App from './App';

import './styles/common/global.css';
import './styles/common/fonts.css';
import './styles/Login.css';

import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'animate.css/animate.min.css';

const theme = createMuiTheme({
	palette: {
		primary: {
			"500": "#EC6408",
		},
	},
});

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<ReactNotification className="test-test-test" />
				<App />
			</ThemeProvider>
		</Provider>,
  </React.StrictMode>,
	document.getElementById('root')
);
