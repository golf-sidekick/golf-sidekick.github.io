import {FieldPolicy} from '@apollo/client'
import {uniqBy} from 'lodash'

const policy: FieldPolicy<any, any, any> = {
  merge(existing = [], incoming) {
    return uniqBy([...existing, ...incoming], '__ref')
  }
}

export default policy
