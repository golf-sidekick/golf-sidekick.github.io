import {gql} from '@apollo/client'

export default gql`
  fragment ImageRefFragment on ImageRef {
    ref
    width
    height
  }
`
