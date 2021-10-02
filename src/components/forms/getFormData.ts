import {Dictionary} from './Dictionary'
import Form from './FormDefinition'
import FormField from './FormField'

export default function getFormData<T>(
  form: Form<Dictionary<FormField<any>>>
): T {
  return Object.keys(form[0]).reduce((data, fieldName) => {
    const field = form[0][fieldName]
    return {
      ...data,
      [fieldName]: field.converter
        ? field.converter.toData(field.value)
        : field.value
    }
  }, {}) as T
}
