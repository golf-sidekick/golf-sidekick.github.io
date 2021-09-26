import {ApolloClient, InMemoryCache} from '@apollo/client'
import {
  mergePolicy,
  paginatedGamesPolicy,
  paginationPolicy,
  replacePolicy
} from './utils'

import {BatchHttpLink} from '@apollo/client/link/batch-http'
import {error} from 'services/logging'
import {onError} from '@apollo/client/link/error'
import {setContext} from '@apollo/client/link/context'
import {uniqBy} from 'lodash'

const createClient = (
  url: string,
  getToken: () => Promise<string | undefined>
) => {
  const httpLink = new BatchHttpLink({
    uri: url
  })

  const authLink = setContext(async (_, {headers}) => {
    const token = await getToken()
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : ''
      }
    }
  })

  const errorLink = onError(({graphQLErrors, networkError}) => {
    if (graphQLErrors) graphQLErrors.forEach(e => error(e))
    if (networkError) error(networkError)
  })

  const client = new ApolloClient({
    link: errorLink.concat(authLink).concat(httpLink),
    cache: new InMemoryCache({
      typePolicies: {
        PostCommentOfPlayer: {
          fields: {
            replies: paginationPolicy,
            reactions: replacePolicy
          }
        },
        PostOfPlayer: {
          fields: {
            comments: paginationPolicy,
            reactions: replacePolicy
          }
        },
        Player: {
          fields: {
            playerTypes: replacePolicy,
            preferredGameTypes: replacePolicy,
            preferredPlayerTypes: replacePolicy,
            preferredCourses: replacePolicy,
            communities: replacePolicy,
            gameInvitations: replacePolicy,
            games: paginatedGamesPolicy,
            posts: paginationPolicy
          }
        },
        PostCommentOfCommunity: {
          fields: {
            replies: paginationPolicy,
            reactions: replacePolicy
          }
        },
        PostOfCommunity: {
          fields: {
            comments: paginationPolicy,
            reactions: replacePolicy
          }
        },
        Community: {
          fields: {
            posts: paginationPolicy,
            admins: replacePolicy
          }
        },
        Game: {
          fields: {
            players: replacePolicy,
            invitations: replacePolicy
          }
        },
        PaginatedResultsOfGame: {
          fields: {
            data: mergePolicy
          }
        },
        Course: {
          fields: {
            physicalAddress: replacePolicy
          }
        },
        PhysicalAddress: {
          keyFields: [
            'countryCode',
            'postCode',
            'province',
            'street',
            'streetNumber',
            'suburb'
          ]
        },
        Query: {
          fields: {
            communities: paginationPolicy,
            games: paginatedGamesPolicy,
            courses: paginationPolicy,
            chat: replacePolicy,
            feed: paginationPolicy,
            // Ensures that all agenda items are merged into one big array
            // i.e. We never overwrite records
            agenda: {
              keyArgs: false,
              merge(existing = [], incoming) {
                return uniqBy([...existing, ...incoming], '__ref')
              }
            }
          }
        }
      }
    })
  })
  return client
}

export default createClient
