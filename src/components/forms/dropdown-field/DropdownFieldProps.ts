import FormDefinition from '../FormDefinition'

export type DropdownFieldItem = {
  key: string
  value: string
}

export type DropdownFieldProps = Omit<
  React.InputHTMLAttributes<any>,
  'form'
> & {
  label: string
  form: FormDefinition<any>
  fieldName: string
  caption?: string
  containerClassName?: string
  source: DropdownFieldItem[]
  filter?: (term: string, item: {value: string}) => boolean
}
