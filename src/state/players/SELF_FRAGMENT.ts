import IMAGE_REF_FRAGMENT from 'state/IMAGE_REF_FRAGMENT'
import { gql } from '@apollo/client'

export default gql`
	fragment SelfFragment on Player {
		__typename
		id
		initials
		name
		profileImageRef {
			...ImageRefFragment
		}
	}
	${IMAGE_REF_FRAGMENT}
`
