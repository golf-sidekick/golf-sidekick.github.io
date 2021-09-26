import { FormDefinition } from '.'

const getFieldValue = <T>(form: FormDefinition<any>, fieldName: string) => {
	const [state] = form
	const field = state[fieldName]
	const value = field.converter
		? field.converter.toData(field.value)
		: field.value
	return value as T
}

export default getFieldValue
