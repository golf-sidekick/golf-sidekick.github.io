import {AuthContextProps} from './AuthContextProps'
import React from 'react'

export default React.createContext<AuthContextProps>({
  authenticating: true,
  authenticated: false,
  logout: () => Promise.resolve(),
  getToken: () => Promise.resolve('')
})
