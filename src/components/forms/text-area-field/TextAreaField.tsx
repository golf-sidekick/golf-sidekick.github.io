import {ChangeEvent} from 'react'
import {TextAreaFieldProps} from './TextAreaFieldProps'
import classNames from 'classnames'

const TextField = ({label, form, fieldName, ...props}: TextAreaFieldProps) => {
  const [state, {setValue}] = form
  const field = state[fieldName]
  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    setValue(fieldName, e.target.value)
  const hasError = field.touched && !field.isValid

  return (
    <div className={classNames('form-control', 'w-full', 'md:w-1/2')}>
      {label && (
        <label className="label">
          <span className="label-text">{label}</span>
        </label>
      )}
      <input
        {...props}
        type="text"
        className={classNames('textarea', 'textarea-bordered', 'h-24', {
          'textarea-error': hasError
        })}
        value={field.value}
        onChange={onChange}
      />
    </div>
  )
}

export default TextField
