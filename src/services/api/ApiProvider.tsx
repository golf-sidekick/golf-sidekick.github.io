import {
  ApolloClient,
  ApolloProvider,
  NormalizedCacheObject
} from '@apollo/client'
import {useEffect, useRef, useState} from 'react'

import {ApiProviderProps} from './ApiProviderProps'
import MIN_SUPPORTED_API_VERSION from './MIN_SUPPORTED_API_VERSION'
import createClient from './createClient'
import useApiVersion from './useApiVersion'
import {useAuthContext} from 'services/auth'
import {useConfig} from 'services/config'

const ApiProvider = ({children}: ApiProviderProps) => {
  const authContext = useAuthContext()
  const clientRef = useRef<ApolloClient<NormalizedCacheObject>>()
  const [ready, setReady] = useState(false)
  const config = useConfig()
  const currentVersion = useApiVersion()

  useEffect(() => {
    setReady(false)
    if (authContext.authenticated) {
      clientRef.current = createClient(
        config.getString('ApiUrl'),
        authContext.getToken
      )
      setReady(true)
    } else if (clientRef.current) {
      clientRef.current.clearStore()
    }
  }, [authContext, currentVersion, clientRef, config])

  if (currentVersion && MIN_SUPPORTED_API_VERSION < currentVersion) {
    return <></>
  } else if (ready) {
    return (
      <ApolloProvider client={clientRef.current!}>{children}</ApolloProvider>
    )
  } else {
    return <></>
  }
}

export default ApiProvider
