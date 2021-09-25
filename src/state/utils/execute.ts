import { MutationTuple } from '@apollo/client'

const execute = <TData, TVariables>([func, { loading }]: MutationTuple<
	TData,
	TVariables
>) => {
	if (loading) {
		return Promise.reject('The function is busy executing')
	}
	return func()
}

export default execute
