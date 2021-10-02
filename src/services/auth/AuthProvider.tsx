import React, {useCallback, useEffect, useRef, useState} from 'react'
import {User, getAuth, signOut} from 'firebase/auth'
import {error, info} from 'services/logging'

import AuthContext from './AuthContext'
import {AuthProviderProps} from './AuthProviderProps'

const AuthProvider = ({children}: AuthProviderProps) => {
  const auth = getAuth()
  const userRef = useRef<User | null>(null)

  const [state, setState] = useState<{
    authenticated: boolean
    authenticating: boolean
  }>({
    authenticated: false,
    authenticating: true
  })

  const tryLogout = async () => {
    await signOut(auth)

    setState({authenticated: true, authenticating: true})

    setState({
      authenticating: false,
      authenticated: false
    })
  }

  const handleLogin = useCallback(async (user: User) => {
    info('User logged in')

    userRef.current = user

    setState({
      authenticating: false,
      authenticated: true
    })
  }, [])

  const handleLogout = useCallback(() => {
    info('User logged out')
    setState({
      authenticating: false,
      authenticated: false
    })
  }, [])

  useEffect(() => {
    const subscriber = auth.onAuthStateChanged(async user => {
      try {
        if (user) {
          await handleLogin(user)
        } else {
          handleLogout()
        }
      } catch (e) {
        error(e)
      }
    })
    return subscriber
  }, [auth, handleLogin, handleLogout])

  return (
    <AuthContext.Provider
      value={{
        ...state,
        logout: tryLogout,
        getToken: async () => userRef.current?.getIdToken()
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
