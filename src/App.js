import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/Login.js';

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/"><Login /></Route>
				<Route path="/login"><Login /></Route>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
