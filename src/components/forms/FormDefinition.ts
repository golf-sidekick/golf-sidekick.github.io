import {Dictionary} from './Dictionary'
import FormField from './FormField'

type FormDefinition<TFields extends Dictionary<FormField<any>>> = [
  TFields,
  {
    setValue: (fieldName: string, value: any) => void
    touch: (fieldName: string | string[]) => void
    setValues: (values: {[key: string]: any}, touched?: boolean) => void
    clear: () => void
  }
]

export default FormDefinition
