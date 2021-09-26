import {useCallback, useEffect, useState} from 'react'

import {Dictionary} from './Dictionary'
import FormDefinition from './FormDefinition'
import FormField from './FormField'
import isValid from './validation/isValid'

const createForm = <TFields extends Dictionary<FormField<any>>>(
  fields: TFields
): TFields => {
  return Object.keys(fields).reduce((form, key) => {
    const field = fields[key]
    return {
      ...form,
      [key]: {
        isValid: isValid(field.value, field.validators),
        value: field.converter
          ? field.converter.toField(field.value)
          : field.value,
        touched: false,
        converter: field.converter
      }
    }
  }, {}) as TFields
}

const createField = (field: FormField<any>, value: any, touched: boolean) => {
  return {
    ...field,
    isValid: isValid(value, field.validators),
    value: value,
    touched: touched
  }
}

export default function useForm<TFields extends Dictionary<FormField<any>>>(
  fields: TFields,
  onChange?: (form: FormDefinition<TFields>) => void
): FormDefinition<TFields> {
  const [state, setState] = useState<TFields>(createForm(fields))

  const setValue = useCallback(
    (key: string, value: any) => {
      const field = fields[key]
      setState({
        ...state,
        [key]: createField(field, value, true)
      })
    },
    [fields, state]
  )

  const touch = useCallback(
    (key: string | string[]) => {
      if (Array.isArray(key)) {
        setState({
          ...state,
          ...key.reduce((aggregate, fieldName) => {
            return {
              ...aggregate,
              [fieldName]: {
                ...state[fieldName],
                touched: true
              }
            }
          }, {})
        })
      } else {
        setState({
          ...state,
          [key]: {
            ...state[key],
            touched: true
          }
        })
      }
    },
    [state]
  )

  const setValues = useCallback(
    (values: {[key: string]: any}, touched = false) => {
      setState(
        Object.assign({}, state, {
          ...Object.entries(values).reduce((previousValue, [key, value]) => {
            const field = fields[key]
            return {
              ...previousValue,
              [key]: createField(field, value, touched)
            }
          }, {})
        })
      )
    },
    [fields, state]
  )

  const clear = useCallback(() => {
    setState(
      Object.assign({}, state, {
        ...Object.keys(state).reduce((previousValue, key) => {
          const field = fields[key]
          return {
            ...previousValue,
            [key]: createField(field, field.defaultValue, false)
          }
        }, {})
      })
    )
  }, [fields, state])

  useEffect(() => {
    onChange && onChange([state, {setValue, touch, setValues, clear}])
  }, [state, setValue, touch, setValues, clear, onChange])

  useEffect(() => {
    setState(() => createForm(fields))
  }, [fields])

  return [state, {setValue, touch, setValues, clear}]
}
