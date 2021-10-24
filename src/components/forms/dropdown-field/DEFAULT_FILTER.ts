const DEFAULT_FILTER = (term: string, {value}: {value: string}) =>
  term === '' || value.includes(term)

export default DEFAULT_FILTER
