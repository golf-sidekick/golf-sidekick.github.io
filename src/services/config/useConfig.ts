import {
	getBoolean,
	getNumber,
	getRemoteConfig,
	getString,
	getValue
} from 'firebase/remote-config'

import { ConfigKeys } from './ConfigKeys'

const useConfig = () => {
	const remoteConfig = getRemoteConfig()
	return {
		getString: (key: ConfigKeys) => getString(remoteConfig, key),
		getNumber: (key: ConfigKeys) => getNumber(remoteConfig, key),
		getBoolean: (key: ConfigKeys) => getBoolean(remoteConfig, key),
		getValue: (key: ConfigKeys) => getValue(remoteConfig, key)
	}
}

export default useConfig
