import { DateTimeInfoInput } from 'services/api'

const dateTimeInfoConverter = {
	toField: (value: DateTimeInfoInput | undefined) => {
		return value
			? new Date(
					value.year,
					value.month,
					value.day,
					value.hour,
					value.minute
			  ).toISOString()
			: undefined
	},
	toData: (value: string) => {
		const date = new Date(value)
		return {
			year: date.getFullYear(),
			month: date.getMonth() + 1,
			day: date.getDate(),
			hour: date.getHours(),
			minute: date.getMinutes()
		}
	}
}

export default dateTimeInfoConverter
