const dateConverter = {
	toField: (value: Date | undefined) => (value ? value.toISOString() : ''),
	toData: (value: string) => new Date(value)
}

export default dateConverter
