import FormDefinition from '../FormDefinition'
import React from 'react'

export type TextAreaFieldProps = Omit<
  React.InputHTMLAttributes<any>,
  'form'
> & {
  label: string
  form: FormDefinition<any>
  fieldName: string
  caption?: string
}
