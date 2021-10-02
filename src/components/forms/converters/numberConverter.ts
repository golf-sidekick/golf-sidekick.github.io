const numberConverter = {
  toField: (value: number | undefined) => (value ? value.toString() : ''),
  toData: (value: string) => +value
}

export default numberConverter
