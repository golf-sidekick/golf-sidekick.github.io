import { FormDefinition } from '.'

const isSet = (form: FormDefinition<any>, fieldName: string) => {
	const [state] = form
	const field = state[fieldName]
	return !!field.value
}

export default isSet
