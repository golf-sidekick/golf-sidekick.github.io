import {useEffect, useState} from 'react'

import {ImageRef} from 'services/api'
import {Maybe} from 'graphql/jsutils/Maybe'
import {useAuthContext} from 'services/auth'
import {useConfig} from 'services/config'

const useGetImageSource = (imageRef: Maybe<ImageRef>, width: number = 256) => {
  const auth = useAuthContext()
  const config = useConfig()
  const [source, setSource] = useState<string>('')

  useEffect(() => {
    const baseUrl = config.getString('ApiUrl')
    const load = async () => {
      const token = await auth.getToken()
      const source = `${baseUrl}${
        imageRef!.ref
      }?width=${width}&format=jpg&access_token=${token}`
      setSource(source)
    }
    imageRef && load()
  }, [imageRef, config, auth, width])

  return source
}

export default useGetImageSource
