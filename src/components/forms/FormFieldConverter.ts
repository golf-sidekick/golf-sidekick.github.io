type FormFieldConverter<T> = {
  toField: (value: T) => string | undefined
  toData: (value: string) => T
}

export default FormFieldConverter
