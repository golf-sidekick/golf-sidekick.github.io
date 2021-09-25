import { NetworkStatus } from '@apollo/client'

const isBusy = (
	currentStatus: NetworkStatus,
	busy: NetworkStatus[] = [NetworkStatus.loading, NetworkStatus.refetch]
) => {
	return busy.indexOf(currentStatus) !== -1
}

export default isBusy
