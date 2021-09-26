import {ChangeEvent} from 'react'
import {TextFieldProps} from './TextFieldProps'
import classNames from 'classnames'

const TextField = ({
  label,
  form,
  fieldName,
  containerClassName,
  ...props
}: TextFieldProps) => {
  const [state, {setValue}] = form
  const field = state[fieldName]
  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    setValue(fieldName, e.target.value)
  const hasError = field.touched && !field.isValid

  return (
    <div
      className={classNames(
        'form-control',
        'w-full',
        'md:w-1/2',
        containerClassName
      )}>
      {label && (
        <label className="label">
          <span className="label-text">{label}</span>
        </label>
      )}
      <input
        {...props}
        type="text"
        className={classNames('input', 'input-bordered', {
          'input-error': hasError
        })}
        value={field.value}
        onChange={onChange}
      />
    </div>
  )
}

export default TextField
