import React, {useEffect, useState} from 'react'
import {fetchAndActivate, getRemoteConfig} from 'firebase/remote-config'

import {ConfigProviderProps} from './ConfigProviderProps'

const ConfigProvider = ({children}: ConfigProviderProps) => {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const remoteConfig = getRemoteConfig()

    const init = async () => {
      await fetchAndActivate(remoteConfig)
      setReady(true)
    }

    init()
  }, [])

  return <>{ready && children}</>
}

export default ConfigProvider
