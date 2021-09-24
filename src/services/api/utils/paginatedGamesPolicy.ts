import { FieldPolicy } from '@apollo/client'

const policy: FieldPolicy<any, any, any> = {
	keyArgs: [
		'input',
		[
			'term',
			'courseIds',
			'isAscending',
			'teeTime',
			['from', 'to'],
			'communityIds'
		]
	]
}

export default policy
