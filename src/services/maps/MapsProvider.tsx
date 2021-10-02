import {MapsProviderProps} from './MapsProviderProps'
import {memo} from 'react'
import {useJsApiLoader} from '@react-google-maps/api'

const MapsProvider = ({children}: MapsProviderProps) => {
  const {isLoaded} = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY!,
    libraries: ['places']
  })

  return isLoaded ? <>{children}</> : <></>
}

export default memo(MapsProvider)
