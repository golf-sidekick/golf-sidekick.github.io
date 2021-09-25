import { Maybe, Permission, Player } from 'services/api'

const hasPermission = (
	self: Maybe<Player> | undefined,
	permission: Permission
) => {
	if (!self?.permissions) {
		return false
	}

	return self.permissions.indexOf(permission) !== -1
}

export default hasPermission
