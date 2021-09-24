import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import { AboutScreen } from 'screens/about'
import { AdminScreen } from 'screens/admin'
import { AuthProvider } from 'services/auth'
import { LandingScreen } from 'screens/landing'
import { LoginScreen } from 'screens/login'
import { ProtectedRoute } from 'components/protected-route'

function App() {
	return (
		<AuthProvider>
			<Router>
				<Switch>
					<Route path={'/about'}>
						<AboutScreen />
					</Route>
					<Route path={'/login'}>
						<LoginScreen />
					</Route>
					<ProtectedRoute path={'/admin'}>
						<AdminScreen />
					</ProtectedRoute>
					<Route path={'/'}>
						<LandingScreen />
					</Route>
				</Switch>
			</Router>
		</AuthProvider>
	)
}

export default App
