import { Maybe, Player } from 'services/api'
import { NetworkStatus, gql, useQuery } from '@apollo/client'

import SELF_FRAGMENT from './SELF_FRAGMENT'

const GET_SELF = gql`
	query GetSelf {
		self: player {
			...SelfFragment
		}
	}
	${SELF_FRAGMENT}
`

const useGetSelf = () => {
	const { data, networkStatus, refetch } = useQuery<{
		self: Maybe<Player>
	}>(GET_SELF, {
		notifyOnNetworkStatusChange: true
	})

	const loading = networkStatus === NetworkStatus.loading
	return { loading, data, networkStatus, refetch }
}

export default useGetSelf
