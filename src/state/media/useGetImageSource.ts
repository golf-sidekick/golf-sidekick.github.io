import { useEffect, useState } from 'react'

import { ImageRef } from 'services/api'
import { Maybe } from 'graphql/jsutils/Maybe'
import { useAuthContext } from 'services/auth'
import { useConfig } from 'services/config'

const useGetImageSource = (imageRef: Maybe<ImageRef>, width: number = 256) => {
	const auth = useAuthContext()
	const config = useConfig()
	const [source, setSource] = useState<string>('')

	useEffect(() => {
		const baseUrl = config.getString('ApiUrl')
		const load = async () => {
			const token = await auth.getToken()

			const response = await fetch(
				`${baseUrl}${imageRef!.ref}?width=${width}&format=jpg`,
				{
					headers: {
						Authorization: `Bearer ${token}`
					}
				}
			)

			const blob = await response.blob()
			var arrayBuffer = await blob.arrayBuffer()
			const base64 = btoa(String.fromCharCode(...new Uint8Array(arrayBuffer)))
			const data = `data:${response.headers.get(
				'content-type'
			)};base64,${base64}`
			setSource(data)
		}
		imageRef && load()
	}, [imageRef, config, auth, width])

	return source
}

export default useGetImageSource
