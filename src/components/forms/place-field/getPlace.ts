import {PlaceProps} from './PlaceProps'
import {first} from 'lodash'

type AddressCommponent = {
  key: string
  longName: string
  shortName: string
}

const DIALING_CODE_REGEX = /^\+?(\d+)/

const getAddressComponents = (result: google.maps.places.PlaceResult) => {
  return (
    result.address_components?.reduce<AddressCommponent[]>((result, item) => {
      return [
        ...result,
        ...item.types.map(type => ({
          key: type,
          shortName: item.short_name,
          longName: item.long_name
        }))
      ]
    }, []) ?? []
  )
}

const findAddressComponent = (result: AddressCommponent[], type: string) =>
  result.find(({key}) => key === type)

const getTelephoneNumber = (result: google.maps.places.PlaceResult) =>
  result.international_phone_number?.replace(DIALING_CODE_REGEX, '')

const getDialingCode = (result: google.maps.places.PlaceResult) =>
  first(result.international_phone_number?.match(DIALING_CODE_REGEX) ?? [])

const getCountryCode = (result: AddressCommponent[]) =>
  findAddressComponent(result, 'country')?.shortName ?? ''

const getPostCode = (result: AddressCommponent[]) =>
  findAddressComponent(result, 'postal_code')?.shortName ?? ''

const getProvince = (result: AddressCommponent[]) =>
  findAddressComponent(result, 'administrative_area_level_1')?.longName ?? ''

const getStreet = (result: AddressCommponent[]) =>
  findAddressComponent(result, 'route')?.longName ?? ''

const getStreetNumber = (result: AddressCommponent[]) =>
  findAddressComponent(result, 'street_number')?.shortName ?? ''

const getSuburb = (result: AddressCommponent[]) =>
  findAddressComponent(result, 'locality')?.longName ?? ''

const getCity = (result: AddressCommponent[]) =>
  findAddressComponent(result, 'administrative_area_level_2')?.longName ?? ''

const getPlace = (result: google.maps.places.PlaceResult): PlaceProps => {
  console.log(result)

  const addressComponents = getAddressComponents(result)

  return {
    telephoneNumber: getTelephoneNumber(result),
    dialingCode: getDialingCode(result),
    countryCode: getCountryCode(addressComponents),
    postCode: getPostCode(addressComponents),
    province: getProvince(addressComponents),
    street: getStreet(addressComponents),
    streetNumber: getStreetNumber(addressComponents),
    suburb: getSuburb(addressComponents),
    city: getCity(addressComponents),
    lat: result.geometry?.location?.lat(),
    lon: result.geometry?.location?.lng(),
    website: result.website,
    description: result.name,
    name: result.name
  }
}

export default getPlace
