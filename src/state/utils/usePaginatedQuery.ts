import {DocumentNode, useQuery} from '@apollo/client'

import {Maybe} from 'graphql/jsutils/Maybe'

const usePaginatedQuery = <TResponse, TData>(
  gql: DocumentNode,
  variables: any,
  getData: (response: Maybe<TResponse>) => Maybe<{
    data: Array<TData>
    continuationToken?: Maybe<string>
  }>
) => {
  const {data, refetch, fetchMore, networkStatus} = useQuery<TResponse>(gql, {
    variables,
    fetchPolicy: 'cache-and-network'
  })

  const fetchMoreIfMoreExist = () => {
    const continuationToken = getData(data)?.continuationToken

    // No continuation token indicates no more results to load
    if (!continuationToken) return

    fetchMore({
      variables: {
        ...variables,
        continuationToken: continuationToken
      }
    })
  }

  return {
    data: getData(data)?.data ?? [],
    refetch,
    fetchMore: fetchMoreIfMoreExist,
    networkStatus
  }
}

export default usePaginatedQuery
