import { Redirect, Route } from 'react-router-dom'

import { ProtectedRouteProps } from './ProtectedRouteProps'
import { useAuthContext } from 'services/auth'

const ProtectedRoute = ({ children, ...props }: ProtectedRouteProps) => {
	const { authenticated } = useAuthContext()

	return (
		<Route {...props}>
			{authenticated ? <>{children}</> : <Redirect to={'/login'} />}
		</Route>
	)
}

export default ProtectedRoute
