import {FieldPolicy} from '@apollo/client'

const policy: FieldPolicy<any, any, any> = {
  merge(_, incoming) {
    return incoming
  }
}

export default policy
