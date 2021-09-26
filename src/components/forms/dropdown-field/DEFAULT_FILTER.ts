import {capitalize} from 'lodash'

const DEFAULT_FILTER = (term: string, {value}: {value: string}) =>
  term === '' || capitalize(value).includes(capitalize(term))

export default DEFAULT_FILTER
