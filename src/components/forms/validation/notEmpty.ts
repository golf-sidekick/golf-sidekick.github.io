const notEmpty = (value: string | string[]) => {
	if (Array.isArray(value)) {
		return value.length > 0
	} else if (typeof value === 'string') {
		return value !== null && value.length > 0
	}
	return true
}

export default notEmpty
