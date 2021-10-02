import FormFieldValidator from '../FormFieldValidator'

const isValid = (
  value: any,
  validators: FormFieldValidator<any>[] | undefined
): boolean => {
  if (!validators) {
    return true
  }

  return (
    validators.filter(validator => (validator ? !validator(value) : false))
      .length === 0
  )
}

export default isValid
