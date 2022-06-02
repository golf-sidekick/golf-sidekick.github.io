const DEFAULT_FILTER = (term: string, {value}: {value: string}) =>
  term === '' || (!!value && !!term && value.toLowerCase().includes(term.toLowerCase()))

export default DEFAULT_FILTER
