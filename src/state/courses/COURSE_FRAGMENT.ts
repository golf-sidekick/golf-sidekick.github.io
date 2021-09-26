import {gql} from '@apollo/client'

export const COURSE_FRAGMENT = gql`
  fragment CourseFragment on Course {
    __typename
    id
    name
    description
    emailAddress
    telephoneNumber {
      number
      dialingCode
    }
    timezone {
      id
      name
      utcOffset
    }
    physicalAddress {
      __typename
      streetNumber
      street
      suburb
      city
      province
      countryCode
      postCode
      coordinates {
        lat
        lon
      }
    }
  }
`
