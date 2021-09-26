import {countries} from 'typed-countries'
import {useMemo} from 'react'

const useCountryDropdownSource = () => {
  const source = useMemo(
    () =>
      countries.map(country => ({
        key: country.iso,
        value: country.name
      })),
    []
  )

  return source
}

export default useCountryDropdownSource
