import {isEqual, omit, uniqBy} from 'lodash'

import {FieldPolicy} from '@apollo/client'

const policy: FieldPolicy<any, any, any> = {
  keyArgs: false,
  read: ({cachedItem} = {}) => {
    return cachedItem
  },
  merge: (prev = {}, incoming, {args}) => {
    const stableArgs = omit(args, ['continuationToken'])

    if (!args?.continuationToken || !isEqual(prev.args, stableArgs)) {
      return {args: stableArgs, cachedItem: incoming}
    }

    return {
      args: stableArgs,
      cachedItem: {
        ...incoming,
        data: uniqBy(
          [...(prev?.cachedItem?.data ?? []), ...incoming.data],
          '__ref'
        )
      }
    }
  }
}

export default policy
