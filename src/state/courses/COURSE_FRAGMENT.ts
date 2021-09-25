import {gql} from '@apollo/client'

export const COURSE_FRAGMENT = gql`
  fragment CourseFragment on Course {
    __typename
    id
    name
    timezone {
      name
      utcOffset
    }
    physicalAddress {
      __typename
      streetNumber
      street
      suburb
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
