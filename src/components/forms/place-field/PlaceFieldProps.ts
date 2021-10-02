import FormDefinition from '../FormDefinition'
import {PlaceProps} from './PlaceProps'
import React from 'react'

export type PlaceFieldProps = Omit<React.InputHTMLAttributes<any>, 'form'> & {
  label: string
  form: FormDefinition<any>
  fieldName: string
  caption?: string
  containerClassName?: string
  onPlaceChanged?: (place: PlaceProps) => void
}
