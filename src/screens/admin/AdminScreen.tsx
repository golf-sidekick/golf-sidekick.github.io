import React from 'react'
import { useAuthContext } from 'services/auth'

const AdminScreen = () => {
	const { logout } = useAuthContext()
	return (
		<div>
			<div className={'btn'} onClick={logout}>
				Logout
			</div>
		</div>
	)
}

export default AdminScreen
