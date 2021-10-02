import FormDefinition from '../FormDefinition'

const isFormValid = (form: FormDefinition<any>, fieldNames?: string[]) => {
  const {touch} = form[1]
  const affectedFields = Object.keys(form[0]).filter(key => {
    const field = form[0][key]

    if (!fieldNames) {
      return !field.isValid
    }

    if (fieldNames.indexOf(key) !== -1) {
      return !field.isValid
    }

    return false
  })
  touch(affectedFields)
  return affectedFields.length === 0
}

export default isFormValid
