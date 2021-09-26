const notInPast = (value: any) => {
	if (!value || !(value instanceof Date)) {
		return true
	}

	return value >= new Date()
}

export default notInPast
