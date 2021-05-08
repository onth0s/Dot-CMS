import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/Login.js';
import Home from './pages/Home.js';

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/"><Login /></Route>
				<Route path="/login"><Login /></Route>
				
				<Route path="/home"><Home /></Route>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
