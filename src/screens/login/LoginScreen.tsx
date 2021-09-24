import {
	GoogleAuthProvider,
	getAuth,
	getRedirectResult,
	signInWithRedirect
} from 'firebase/auth'
import React, { useEffect, useState } from 'react'

import classNames from 'classnames'
import { error } from 'services/logging'
import { useHistory } from 'react-router'

const provider = new GoogleAuthProvider()

const LoginScreen = () => {
	const auth = getAuth()
	const history = useHistory()
	const [busy, setBusy] = useState(true)
	const login = () => !busy && signInWithRedirect(auth, provider)

	useEffect(() => {
		getRedirectResult(auth)
			.then((result) => {
				setBusy(false)

				if (result?.user) {
					history.push('/admin')
				}
			})
			.catch((e) => error(e))
	}, [auth, history])

	return (
		<div>
			<div className={classNames('btn', { loading: busy })} onClick={login}>
				Sign in with google
			</div>
		</div>
	)
}

export default LoginScreen
