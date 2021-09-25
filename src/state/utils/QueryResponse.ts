import {Maybe} from 'services/api'

export type QueryResponse<T, K extends keyof any> = {
  [P in K]: Maybe<T>
}
