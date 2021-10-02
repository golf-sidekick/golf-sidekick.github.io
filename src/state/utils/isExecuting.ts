import {MutationTuple} from '@apollo/client'

const isExecuting = <TData, TVariables>([_, {loading}]: MutationTuple<
  TData,
  TVariables
>) => {
  return loading
}
export default isExecuting
