import {
	GoogleAuthProvider,
	getAuth,
	getRedirectResult,
	signInWithRedirect
} from 'firebase/auth'
import React, { useEffect, useState } from 'react'

import { Body } from 'components/body'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames'
import { error } from 'services/logging'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { useAuthContext } from 'services/auth'
import { useHistory } from 'react-router'

const provider = new GoogleAuthProvider()

const LoginScreen = () => {
	const auth = getAuth()
	const history = useHistory()
	const [busy, setBusy] = useState(true)
	const { authenticated } = useAuthContext()
	const login = () => !busy && signInWithRedirect(auth, provider)

	useEffect(() => {
		getRedirectResult(auth)
			.then(() => {
				setBusy(false)

				if (authenticated) {
					history.push('/admin')
				}
			})
			.catch((e) => error(e))
	}, [auth, authenticated, history])

	return (
		<Body>
			<div
				className={classNames(
					'flex mx-auto',
					'bg-white',
					'p-9',
					'mt-9',
					'w-1/2',
					'rounded-md',
					'flex-col'
				)}
			>
				<h1 className={classNames('text-xl', 'text-black', 'border-b', 'p-2')}>
					Sign in
				</h1>
				<button
					onClick={login}
					className={classNames(
						'btn',
						'uppercase',
						'h-12',
						'mt-3',
						'text-white',
						'w-full',
						'rounded',
						'bg-red-800',
						'hover:bg-red-900',
						'flex items-center justify-center',
						{ loading: busy }
					)}
				>
					<FontAwesomeIcon className={'mx-4'} icon={faGoogle} />
					<span>Sign in with Google</span>
				</button>
			</div>
		</Body>
	)
}

export default LoginScreen
