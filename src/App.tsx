import { Route, HashRouter as Router, Switch } from 'react-router-dom'

import { AboutScreen } from 'screens/about'
import { AdminScreen } from 'screens/admin'
import { ApiProvider } from 'services/api'
import { AuthProvider } from 'services/auth'
import { ConfigProvider } from 'services/config'
import { LandingScreen } from 'screens/landing'
import { LoginScreen } from 'screens/login'
import { ProtectedRoute } from 'components/protected-route'

function App() {
	return (
		<AuthProvider>
			<ConfigProvider>
				<Router>
					<Switch>
						<Route path={'/about'}>
							<AboutScreen />
						</Route>
						<Route path={'/login'}>
							<LoginScreen />
						</Route>
						<ProtectedRoute path={'/admin'}>
							<ApiProvider>
								<AdminScreen />
							</ApiProvider>
						</ProtectedRoute>
						<Route path={'/'}>
							<LandingScreen />
						</Route>
					</Switch>
				</Router>
			</ConfigProvider>
		</AuthProvider>
	)
}

export default App
