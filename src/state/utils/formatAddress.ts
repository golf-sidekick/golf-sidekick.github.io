import {memoize, truncate} from 'lodash'

import {PhysicalAddress} from 'services/api'
import {countries} from 'typed-countries'

const getCountryName = memoize(
  (countryCode: string) =>
    countries.filter(c => c.iso === countryCode).map(c => c.name)[0]
)

const formatAddress = (
  {street, streetNumber, suburb, province, countryCode}: PhysicalAddress,
  maxLength: number = 60
) => {
  return truncate(
    [streetNumber, street, suburb, province, getCountryName(countryCode)]
      .filter(term => term)
      .join(', '),
    {
      length: maxLength
    }
  )
}

export default formatAddress
