import { useEffect, useState } from 'react'

import { useConfig } from 'services/config'

const useApiVersion = () => {
	const config = useConfig()
	const [version, setVersion] = useState<number | undefined>()

	useEffect(() => {
		fetch(`${config.getString('ApiUrl')}health`)
			.then(
				(response) => response.json(),
				(err) => {
					console.error(err)
				}
			)
			.then((data) => setVersion(data.version))
	}, [config])
	return version
}

export default useApiVersion
