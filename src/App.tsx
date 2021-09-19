import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import { AboutScreen } from 'screens/about'
import { LandingScreen } from 'screens/landing'

function App() {
	return (
		<Router>
			<Switch>
				<Route path={'/about'}>
					<AboutScreen />
				</Route>
				<Route path={'/'}>
					<LandingScreen />
				</Route>
			</Switch>
		</Router>
	)
}

export default App
