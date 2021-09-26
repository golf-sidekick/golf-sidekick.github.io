import FormFieldConverter from './FormFieldConverter'
import FormFieldValidator from './FormFieldValidator'

type FormField<T> = {
  value: T
  touched?: boolean
  isValid?: boolean
  converter?: FormFieldConverter<T>
  validators?: FormFieldValidator<T>[]
  defaultValue?: T
}

export default FormField
